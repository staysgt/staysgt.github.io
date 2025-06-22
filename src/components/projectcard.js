import {
    Card,
    CardContent,
    Typography,
    Chip,
    Stack
  } from "@mui/material";
  
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
          backgroundColor: "#fffafc",
        }}
      >
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography
            gutterBottom
            variant="h6"
            component="div"
            sx={{ fontWeight: 600, color: "#6a1b9a" }}
          >
            {proj.name}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ mb: 1, fontSize: 14 }}
          >
            {proj.description}
          </Typography>
          <Typography variant="body2" sx={{ fontWeight: 500 }}>
            Technologies:
          </Typography>
          <Stack direction="row" spacing={1} sx={{ mt: 0.5, flexWrap: "wrap" }}>
            {languageList.map((lang, i) => (
              <Chip
                key={i}
                label={lang}
                size="small"
                sx={{
                  backgroundColor: "#f3e5f5",
                  color: "#6a1b9a",
                  fontWeight: 500,
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
              color: "#6a1b9a",
              fontWeight: 500,
              textTransform: "none",
              "&:hover": {
                backgroundColor: "#f3e5f5",
              },
            }}
          >
            Github
          </Button>
        </CardActions> */}
      </Card>
    );
  }
  