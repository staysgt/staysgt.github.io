import {
    Card,
    CardContent,
    Typography,
    Chip,
    Stack,
    Box,
  } from "@mui/material";
  import GitHubIcon from "@mui/icons-material/GitHub";

  
  export default function ProjectCard({ proj }) {
    const languageList = proj.languages?.split(/[\s,]+/) || [];
    return (
      <Card
        sx={{
          maxWidth:"390px",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          borderRadius: 4,
          boxShadow: 3,
          transition: "0.3s",
          "&:hover": {
            transform: "translateY(-5px)",
            boxShadow: 6,
          },
          backgroundColor: "#ffffff",
        }}
      >
        <CardContent sx={{ flexGrow: 1 }}>
          <Box>
          <Typography
            gutterBottom
            variant="h6"
            component="div"
            sx={{ fontWeight: 600, color: "#f06292" }}
          >
            {proj.name}
          </Typography>
          <a
          href={proj.link}
          target="_blank"
          rel="noreferrer"
          style={{ color: "#ff7043", textDecoration: "none" }}
        >
          <GitHubIcon fontSize="small" />
        </a>
          </Box>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ mb: 1, fontSize: 14 }}
          >
            {proj.description}
          </Typography>
          <Typography variant="body2" sx={{ fontWeight: 500, color: "#5d4037" }}>
            Technologies:
          </Typography>
          <Stack direction="row" spacing={1} sx={{ mt: 0.5, flexWrap: "wrap" }}>
            {languageList.map((lang, i) => (
              <Chip
                key={i}
                label={lang}
                size="small"
                sx={{
                  backgroundColor: "#ffffff",
                  color: "#5d4037",
                  fontWeight: 500,
                  border: "1px solid #ffede8",
                  "&:hover": {
                    backgroundColor: i % 2 === 0 ? "#f06292" : "#ff7043",
                    color: "#ffffff",
                    border: "none",
                  }
                }}
              />
            ))}
          </Stack>
        </CardContent>
        {/* Github link - TBA */}
        {/* <CardActions>
          <Button
            size="small"
            sx={{
              color: "#f06292",
              fontWeight: 500,
              textTransform: "none",
              "&:hover": {
                backgroundColor: "#ffede8",
              },
            }}
          >
            Github
          </Button>
        </CardActions> */}
      </Card>
    );
  }
  