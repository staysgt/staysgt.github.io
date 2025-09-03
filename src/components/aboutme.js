import { Box, Container, Typography } from "@mui/material";
import myface from "../images/myface.png";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function About() {
  return (
    <Box style={{ backgroundColor: "#fcf5fa" }}>
      <Container maxWidth="md" sx={{ py: 4 }}>
        <Typography
          variant="h3"
          sx={{ fontFamily: "myhandwriting, sans-serif", fontWeight: "bold" }}
        >
          ABOUT ME!
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
                color: "#2d3748",
              }}
            >
              Hi, I'm Sarah! I am currently a rising third year student at
              Northeastern University in Boston studying Computer Science, with
              a concentration in software, within the Khoury College of Computer
              Sciences. Currently, I'm completing my first co-op at ZOLL Medical
              Corporation as a Software Engineer, specifically working with
              embedded medical systems. Outside of coding, my interests include
              horses (grew up riding for 10+ years!), dogs, concerts, and board
              games.
            </Typography>
          </Box>
        </Box>
        <a
          href="https://github.com/staysgt"
          target="_blank"
          rel="noreferrer"
          style={{ color: "black", textDecoration: "none" }}
        >
          <GitHubIcon fontSize="large" />
        </a>

        <a
          href="https://www.linkedin.com/in/staysgt"
          target="_blank"
          rel="noreferrer"
          style={{ color: "black", textDecoration: "none" }}
        >
          <LinkedInIcon fontSize="large" />
        </a>
      </Container>
    </Box>
  );
}
