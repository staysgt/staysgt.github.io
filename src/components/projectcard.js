import {
  Card,
  CardContent,
  Typography,
  Chip,
  Stack,
  Box,
  CardMedia,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import { palette } from "../styles/colors";
import projectPlaceholder from "../assets/images/projectsImages/ThreeTrios.png";

export default function ProjectCard({ proj }) {
  const languageList = proj.languages?.split(/[\s,]+/) || [];
  const imageSrc = proj.image
    ? require(`../assets/images/projectsImages/${proj.image}`)
    : projectPlaceholder;
  return (
    <Card
      sx={{
        maxWidth: "390px",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        borderRadius: 4,
        boxShadow: "0 6px 12px rgba(63, 46, 38, 0.12)",
        transition: "0.3s",
        "&:hover": {
          transform: "translateY(-5px)",
          boxShadow: "0 10px 16px rgba(63, 46, 38, 0.18)",
        },
        backgroundColor: palette.warmWhite,
        border: `1px solid ${palette.midGreen}`,
      }}
    >
      <CardMedia
        component="img"
        height="180"
        image={imageSrc}
        alt={`${proj.name} preview`}
        sx={{ objectFit: "cover", borderBottom: `1px solid ${palette.midGreen}` }}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Typography
            gutterBottom
            variant="h6"
            component="div"
            sx={{ fontWeight: 600, color: palette.richBrown }}
          >
            {proj.name}
          </Typography>
          <a
            href={proj.link}
            target="_blank"
            rel="noreferrer"
            style={{ color: palette.richBrown, textDecoration: "none" }}
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
        <Typography variant="body2" sx={{ fontWeight: 500, color: palette.richBrown }}>
          Technologies:
        </Typography>
        <Stack direction="row" spacing={1} sx={{ mt: 0.5, flexWrap: "wrap" }}>
          {languageList.map((lang, i) => (
            <Chip
              key={i}
              label={lang}
              size="small"
              sx={{
                backgroundColor: palette.warmWhite,
                color: palette.richBrown,
                fontWeight: 500,
                border: `1px solid ${palette.midGreen}`,
                transition: "0.3s",
                "&:hover": {
                  backgroundColor: palette.midGreen,
                  color: palette.darkGreen,
                  border: "none",
                }
              }}
            />
          ))}
        </Stack>
      </CardContent>
    </Card>
  );
}