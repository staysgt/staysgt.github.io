// Pre-renders build/index.html so content is present in the page source.
// Serves ./build locally, loads it in headless Chrome, and saves the rendered HTML.
// Set CHROME_PATH to override the Chrome location.
const http = require("http");
const fs = require("fs");
const path = require("path");
const puppeteer = require("puppeteer-core");

const BUILD = path.join(__dirname, "..", "build");
const CHROME =
  process.env.CHROME_PATH ||
  {
    darwin: "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
    linux: "/usr/bin/google-chrome",
    win32: "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
  }[process.platform];

const TYPES = {
  ".html": "text/html",
  ".js": "text/javascript",
  ".css": "text/css",
  ".json": "application/json",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".ico": "image/x-icon",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
  ".ttf": "font/ttf",
};

const server = http.createServer((req, res) => {
  const urlPath = decodeURIComponent(req.url.split("?")[0]);
  let file = path.join(BUILD, urlPath);
  if (!file.startsWith(BUILD) || !fs.existsSync(file) || fs.statSync(file).isDirectory()) {
    file = path.join(BUILD, "index.html");
  }
  res.setHeader("Content-Type", TYPES[path.extname(file)] || "application/octet-stream");
  fs.createReadStream(file).pipe(res);
});

(async () => {
  await new Promise((r) => server.listen(0, "127.0.0.1", r));
  const { port } = server.address();
  const browser = await puppeteer.launch({ executablePath: CHROME, headless: true });
  try {
    const page = await browser.newPage();
    await page.setViewport({ width: 1280, height: 800 });
    await page.goto(`http://127.0.0.1:${port}/`, { waitUntil: "networkidle0" });
    await page.waitForSelector("#contact");
    // Emotion (MUI) inserts CSS via the CSSOM in production, which isn't
    // serialized. Copy the rules into the <style> tags so they land in the HTML.
    await page.evaluate(() => {
      document.querySelectorAll("style[data-emotion]").forEach((el) => {
        if (el.sheet && !el.textContent) {
          el.textContent = Array.from(el.sheet.cssRules).map((r) => r.cssText).join("");
        }
      });
    });
    const html = "<!DOCTYPE html>" + (await page.evaluate(() => document.documentElement.outerHTML));
    fs.copyFileSync(path.join(BUILD, "index.html"), path.join(BUILD, "200.html"));
    fs.writeFileSync(path.join(BUILD, "index.html"), html);
    console.log(`Pre-rendered build/index.html (${html.length} bytes)`);
  } finally {
    await browser.close();
    server.close();
  }
})().catch((e) => {
  console.error(e);
  process.exit(1);
});
