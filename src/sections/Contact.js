import { Box, Typography } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import { palette } from "../styles/colors";

const LINKS = [
  { label: "sgtay3@gmail.com", href: "mailto:sgtay3@gmail.com", Icon: EmailIcon },
  { label: "GitHub", href: "https://github.com/staysgt", Icon: GitHubIcon },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/staysgt",
    Icon: LinkedInIcon,
  },
];

export default function Contact() {
  return (
    <Box
      id="contact"
      component="footer"
      sx={{
        backgroundColor: palette.navy,
        color: palette.cream,
        py: { xs: 6, md: 8 },
        px: { xs: 2, md: 4 },
        textAlign: "center",
        borderTop: `3px solid ${palette.pink}`,
      }}
    >
      <Typography
        variant="h3"
        sx={{
          fontFamily: "'Archivo Black', sans-serif",
          fontWeight: 900,
          textTransform: "uppercase",
          letterSpacing: "0.04em",
          fontSize: { xs: "1.8rem", md: "2.6rem" },
          mb: 1,
        }}
      >
        Get in touch
        <Box component="span" sx={{ color: palette.pink, ml: 1 }}>✦</Box>
      </Typography>
      <Typography sx={{ mb: 3, lineHeight: 1.7 }}>
        Sarah Taylor · Computer Science, Northeastern University
      </Typography>
      <Box sx={{ display: "flex", gap: 2, justifyContent: "center", flexWrap: "wrap" }}>
        {LINKS.map(({ label, href, Icon }) => (
          <a
            key={label}
            href={href}
            {...(href.startsWith("mailto:")
              ? {}
              : { target: "_blank", rel: "noreferrer noopener" })}
            style={{ textDecoration: "none" }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                backgroundColor: palette.pink,
                color: palette.navy,
                px: 2.5,
                py: 1,
                borderRadius: "30px",
                fontWeight: 700,
                fontSize: "0.9rem",
                transition: "0.2s",
                "&:hover": {
                  backgroundColor: palette.cream,
                  transform: "translateY(-2px)",
                },
              }}
            >
              <Icon fontSize="small" />
              {label}
            </Box>
          </a>
        ))}
      </Box>
    </Box>
  );
}
