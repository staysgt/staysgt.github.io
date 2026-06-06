import { Box, Container, Typography } from "@mui/material";
import myface from "../assets/images/myface.png";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { palette } from "../styles/colors";

export default function About() {
  return (
    <Box
      id="about"
      sx={{
        backgroundColor: palette.cream,
        py: { xs: 6, md: 8 },
        px: { xs: 2, md: 4 },
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative sparkles */}
      <Typography
        sx={{
          position: "absolute",
          top: "12%",
          right: { xs: "5%", md: "8%" },
          fontSize: { xs: "2rem", md: "3rem" },
          color: palette.pink,
          lineHeight: 1,
          userSelect: "none",
          pointerEvents: "none",
        }}
      >
        ✦
      </Typography>
      <Typography
        sx={{
          position: "absolute",
          top: "55%",
          right: { xs: "3%", md: "5%" },
          fontSize: "1.4rem",
          color: palette.navy,
          lineHeight: 1,
          userSelect: "none",
          pointerEvents: "none",
        }}
      >
        ✧
      </Typography>
      <Typography
        sx={{
          position: "absolute",
          bottom: "15%",
          left: { xs: "3%", md: "6%" },
          fontSize: { xs: "1.6rem", md: "2.2rem" },
          color: palette.pink,
          lineHeight: 1,
          userSelect: "none",
          pointerEvents: "none",
        }}
      >
        ✦
      </Typography>
      <Typography
        sx={{
          position: "absolute",
          top: "30%",
          left: { xs: "2%", md: "3%" },
          fontSize: "1.2rem",
          color: palette.navy,
          lineHeight: 1,
          userSelect: "none",
          pointerEvents: "none",
        }}
      >
        +
      </Typography>

      <Container maxWidth="md">
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: { xs: 4, md: 6 },
            flexDirection: { xs: "column", md: "row" },
          }}
        >
          {/* Photo */}
          <Box sx={{ position: "relative", flexShrink: 0 }}>
            <Box
              sx={{
                width: { xs: 180, md: 220 },
                height: { xs: 180, md: 220 },
                borderRadius: "50%",
                border: `5px solid ${palette.pink}`,
                boxShadow: `8px 8px 0px ${palette.navy}`,
                overflow: "hidden",
              }}
            >
              <img
                src={myface}
                alt="Sarah"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </Box>
            {/* Sparkle near photo */}
            <Typography
              sx={{
                position: "absolute",
                top: -14,
                right: -14,
                fontSize: "1.8rem",
                color: palette.navy,
                lineHeight: 1,
                userSelect: "none",
              }}
            >
              ✦
            </Typography>
            <Typography
              sx={{
                position: "absolute",
                bottom: -8,
                left: -12,
                fontSize: "1.2rem",
                color: palette.pink,
                lineHeight: 1,
                userSelect: "none",
              }}
            >
              ✧
            </Typography>
          </Box>

          {/* Text */}
          <Box sx={{ flex: 1 }}>
            <Typography
              sx={{
                fontFamily: "'Archivo Black', sans-serif",
                fontSize: { xs: "2.4rem", md: "3.4rem" },
                fontWeight: 900,
                color: palette.navy,
                lineHeight: 1.05,
                mb: 0.5,
              }}
            >
              Hi, I'm Sarah!
            </Typography>
            {/* <Typography
              sx={{
                fontFamily: "'myhandwriting', sans-serif",
                fontSize: { xs: "1.3rem", md: "1.6rem" },
                color: palette.pink,
                mb: 2.5,
              }}
            >
              Software Engineer ✦
            </Typography> */}
            <Typography
              sx={{
                fontSize: { xs: "0.95rem", md: "1rem" },
                lineHeight: 1.85,
                color: palette.softText,
                mb: 1.5,
              }}
            >
              I'm a third-year CS student at Northeastern University's Khoury
              College, concentrating in software and graduating Spring 2027. I
              completed my first co-op at ZOLL Medical working on embedded
              medical systems, and I'm heading into my second this June at
              SimpliSafe in DevOps. Outside of coding, I love going to concerts,
              playing board games, and animals.
            </Typography>
            {/* Social links */}
            <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
              <a
                href="https://github.com/staysgt"
                target="_blank"
                rel="noreferrer"
                style={{ textDecoration: "none" }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    backgroundColor: palette.navy,
                    color: palette.cream,
                    px: 2.5,
                    py: 1,
                    borderRadius: "30px",
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontWeight: 700,
                    fontSize: "0.9rem",
                    transition: "0.2s",
                    "&:hover": {
                      backgroundColor: palette.pink,
                      transform: "translateY(-2px)",
                    },
                  }}
                >
                  <GitHubIcon fontSize="small" />
                  GitHub
                </Box>
              </a>
              <a
                href="https://www.linkedin.com/in/staysgt"
                target="_blank"
                rel="noreferrer"
                style={{ textDecoration: "none" }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    backgroundColor: palette.pink,
                    color: palette.white,
                    px: 2.5,
                    py: 1,
                    borderRadius: "30px",
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontWeight: 700,
                    fontSize: "0.9rem",
                    transition: "0.2s",
                    "&:hover": {
                      backgroundColor: palette.navy,
                      transform: "translateY(-2px)",
                    },
                  }}
                >
                  <LinkedInIcon fontSize="small" />
                  LinkedIn
                </Box>
              </a>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
