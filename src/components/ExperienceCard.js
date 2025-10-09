import {
    Card,
    CardContent,
    Typography,
    CardActions,
    Button,
    Chip,
    Stack
  } from "@mui/material";
  
  export default function ExperienceCard({ experience }) {
    return (
      <Card
        sx={{
          height: 280,
          width: 320,
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
          <Typography
            gutterBottom
            variant="h6"
            component="div"
            sx={{ fontWeight: 700, color: "#f06292" }}
          >
            {experience.jobTitle}
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{ 
              fontWeight: 500, 
              color: "#f48fb1", 
              mb: 1 
            }}
          >
            {experience.company}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ 
              mb: 1, 
              fontSize: 14,
              overflow: "hidden",
              display: "-webkit-box",
              WebkitLineClamp: 4,
              WebkitBoxOrient: "vertical",
              textOverflow: "ellipsis"
            }}
          >
            {experience.description}
          </Typography>
          <Stack direction="row" spacing={1} sx={{ mt: 1 }}>
            <Chip
              label={experience.timeFrame}
              size="small"
              sx={{
                backgroundColor: "#fce4ec",
                color: "#f06292",
                fontWeight: 500,
              }}
            />
          </Stack>
        </CardContent>
        <CardActions>
          <Button
            size="small"
            sx={{
              color: "#f06292",
              fontWeight: 500,
              textTransform: "none",
              "&:hover": {
                backgroundColor: "#fce4ec",
              },
            }}
          >
            View Details
          </Button>
        </CardActions>
      </Card>
    );
  }