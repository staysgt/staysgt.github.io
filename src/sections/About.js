import { Box, Container, Typography } from "@mui/material";
import myface from "../assets/images/myface.png";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { palette } from "../styles/colors";

export default function About() {
  return (
    <Box
      style={{
        backgroundColor: palette.softGreen,
        boxShadow: "0 4px 12px rgba(63, 46, 38, 0.12)",
      }}
    >
      <Container maxWidth="md" sx={{ py: 4 }}>
        <Typography
          variant="h3"
          sx={{
            fontFamily: "myhandwriting, sans-serif",
            fontWeight: "bold",
            color: palette.richBrown,
          }}
        >
          About me!
        </Typography>

        <Box
          sx={{
            display: "flex",
            alignItems: "flex-start",
            gap: 4,
            flexDirection: { xs: "column", md: "row" },
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 2,
              minWidth: { md: "200px" },
            }}
          >
            <img
              src={myface}
              alt="Sarah"
              style={{
                width: "100%",
                maxWidth: "200px",
                height: "200px",
                objectFit: "cover",
                borderRadius: "50%",
                boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
              }}
            />
          </Box>
          <Box sx={{ flex: 1 }}>
            <Typography
              variant="body1"
              sx={{
                fontSize: "1.1rem",
                lineHeight: 1.7,
                color: palette.darkBrown,
              }}
            >
              Hi, I'm Sarah! I’m a third-year Computer Science student at
              Northeastern University in Boston, studying within the Khoury
              College of Computer Sciences with a concentration in software. I’m
              on track to graduate in Spring 2027, and I’m currently seeking a
              Fall 2026 software engineering co-op (May - December 2026).
              <br></br>
              <br></br>I recently completed my first co-op at ZOLL Medical,
              working as a Software Engineer, specifically working with embedded
              medical systems. Outside of coding, my interests include horses (I
              grew up riding for 10+ years!), dogs, concerts, and board games.
            </Typography>
          </Box>
        </Box>
        <Box sx={{ display: "flex", gap: 2, mt: 3, justifyContent: "center" }}>
          <a
            href="https://github.com/staysgt"
            target="_blank"
            rel="noreferrer"
            style={{ color: palette.richBrown, textDecoration: "none" }}
          >
            <GitHubIcon sx={{ fontSize: 50 }} />
          </a>

          <a
            href="https://www.linkedin.com/in/staysgt"
            target="_blank"
            rel="noreferrer"
            style={{ color: palette.richBrown, textDecoration: "none" }}
          >
            <LinkedInIcon sx={{ fontSize: 50 }} />
          </a>
        </Box>
      </Container>
    </Box>
  );
}
