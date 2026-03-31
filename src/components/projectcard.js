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
  const languageList = proj.languages
    ? proj.languages.split(",").map((item) => item.trim()).filter(Boolean)
    : [];
  const imageSrc = proj.image
    ? require(`../assets/images/projectsImages/${proj.image}`)
    : projectPlaceholder;

  return (
    <Card
      sx={{
        maxWidth: "390px",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        borderRadius: 3,
        borderTop: `5px solid ${palette.navy}`,
        boxShadow: `4px 4px 0px ${palette.pink}`,
        transition: "0.25s",
        "&:hover": {
          transform: "translateY(-5px) translateX(3px)",
          boxShadow: `6px 6px 0px ${palette.navy}`,
          borderTopColor: palette.pink,
        },
        backgroundColor: palette.white,
        border: `1px solid ${palette.midCream}`,
        borderTopWidth: "5px",
        borderTopColor: palette.navy,
      }}
    >
      <CardMedia
        component="img"
        height="190"
        image={imageSrc}
        alt={`${proj.name} preview`}
        sx={{ objectFit: "cover", objectPosition: "top" }}
      />
      <CardContent sx={{ flexGrow: 1, pt: 2 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 0.5,
          }}
        >
          <Typography
            gutterBottom
            variant="h6"
            component="div"
            sx={{
              fontFamily: "'Archivo Black', sans-serif",
              fontWeight: 900,
              color: palette.navy,
              fontSize: "1rem",
              m: 0,
            }}
          >
            {proj.name}
          </Typography>
          <a
            href={proj.link}
            target="_blank"
            rel="noreferrer"
            style={{ color: palette.navy, textDecoration: "none" }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: 32,
                height: 32,
                borderRadius: "50%",
                backgroundColor: palette.cream,
                border: `2px solid ${palette.navy}`,
                transition: "0.2s",
                "&:hover": {
                  backgroundColor: palette.pink,
                  borderColor: palette.pink,
                  color: palette.white,
                },
              }}
            >
              <GitHubIcon sx={{ fontSize: 16 }} />
            </Box>
          </a>
        </Box>
        <Typography
          variant="body2"
          sx={{ mb: 1.5, fontSize: "0.85rem", color: palette.softText, lineHeight: 1.6 }}
        >
          {proj.description}
        </Typography>
        <Stack
          direction="row"
          spacing={0.75}
          sx={{ mt: 1, flexWrap: "wrap", rowGap: 0.75 }}
        >
          {languageList.map((lang, i) => (
            <Chip
              key={i}
              label={lang}
              size="small"
              sx={{
                backgroundColor: palette.lightPink,
                color: palette.navy,
                fontWeight: 600,
                fontSize: "0.7rem",
                border: `1px solid ${palette.pink}`,
                borderRadius: "6px",
                transition: "0.2s",
                "&:hover": {
                  backgroundColor: palette.pink,
                  color: palette.white,
                },
              }}
            />
          ))}
        </Stack>
      </CardContent>
    </Card>
  );
}
