import { Box, Typography, IconButton } from "@mui/material";
import { useState } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { palette } from "../styles/colors";

// Import images
import cteImage from "../assets/images/interestsImages/concerts/cte.png";
import katyperryImage from "../assets/images/interestsImages/concerts/katyperry.png";
import laufeyImage from "../assets/images/interestsImages/concerts/laufey.png";
import strutsImage from "../assets/images/interestsImages/concerts/struts.png";
import simonImage from "../assets/images/interestsImages/animals/simon.png";
import lolly1Image from "../assets/images/interestsImages/animals/lolly1.png";
import lolly2Image from "../assets/images/interestsImages/animals/lolly2.png";
import lollyandmaxImage from "../assets/images/interestsImages/animals/lollyandmax.png";

const concertImages = [
  { src: cteImage, name: "cte" },
  { src: katyperryImage, name: "katyperry" },
  { src: laufeyImage, name: "laufey" },
  { src: strutsImage, name: "struts" },
];

const animalImages = [
  { src: simonImage, name: "simon" },
  { src: lolly1Image, name: "lolly1" },
  { src: lolly2Image, name: "lolly2" },
  { src: lollyandmaxImage, name: "lollyandmax" },
];

// Mapping for image captions
const imageCaptionMap = {
  "cte": "Cage the Elephant in Atlanta, 9/20/25",
  "katyperry": "Katy Perry @ TD Garden, 8/8/25",
  "laufey": "Laufey @ TD Garden, 10/21/25",
  "struts": "The Struts in Boston, 9/2/25",
  "simon": "Simon the horse!",
  "lolly1": "Lolly, short for lolly-pup",
  "lolly2": "Sleeping on my jacket",
  "lollyandmax": "Siblings!",
};

// Carousel component
const ImageCarousel = ({ title, images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  if (images.length === 0) return null;

  return (
    <Box sx={{ flex: 1, minWidth: 0 }}>
      <Typography
        variant="h5"
        sx={{
          fontFamily: "myhandwriting, sans-serif",
          fontWeight: "bold",
          color: palette.richBrown,
          mb: 2,
          textAlign: "center",
        }}
      >
        {title}
      </Typography>
      <Box
        sx={{
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 0.5,
          width: "100%",
        }}
      >
        {images.length > 1 && (
          <IconButton
            onClick={prevImage}
            sx={{
              color: palette.richBrown,
              "&:hover": { backgroundColor: palette.midGreen },
              flexShrink: 0,
            }}
          >
            <ArrowBackIosIcon />
          </IconButton>
        )}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "100%",
            maxWidth: "400px",
            mx: "auto",
          }}
        >
          <Box
            component="img"
            src={images[currentIndex].src}
            alt={`${title} ${currentIndex + 1}`}
            sx={{
              width: "100%",
              maxHeight: "300px",
              objectFit: "contain",
              borderRadius: 2,
              mb: 1,
            }}
          />
          <Typography
            variant="body2"
            sx={{
              color: palette.darkBrown,
              fontStyle: "italic",
              textAlign: "center",
            }}
          >
            {imageCaptionMap[images[currentIndex].name] || images[currentIndex].name}
          </Typography>
        </Box>
        {images.length > 1 && (
          <IconButton
            onClick={nextImage}
            sx={{
              color: palette.richBrown,
              "&:hover": { backgroundColor: palette.midGreen },
              flexShrink: 0,
            }}
          >
            <ArrowForwardIosIcon />
          </IconButton>
        )}
      </Box>
    </Box>
  );
};

// Top Songs component
const TopSongs = () => {
  const songs = [
    { title: "Song 1", artist: "Artist 1" },
    { title: "Song 2", artist: "Artist 2" },
    { title: "Song 3", artist: "Artist 3" },
    { title: "Song 4", artist: "Artist 4" },
    { title: "Song 5", artist: "Artist 5" },
  ];

  return (
    <Box sx={{ flex: 1, minWidth: 0 }}>
      <Typography
        variant="h5"
        sx={{
          fontFamily: "myhandwriting, sans-serif",
          fontWeight: "bold",
          color: palette.richBrown,
          mb: 2,
          textAlign: "center",
        }}
      >
        Songs I've had on repeat the past month
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 1.5,
          maxWidth: "400px",
          mx: "auto",
        }}
      >
        {songs.map((song, index) => (
          <Box key={index}>
            <Typography
              variant="body1"
              sx={{
                fontWeight: 600,
                color: palette.darkGreen,
                mb: 0.5,
              }}
            >
              {song.title}
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: palette.richBrown,
              }}
            >
              {song.artist}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default function Interests() {
  return (
    <Box
      sx={{
        p: "2rem",
        mb: { xs: 6, md: 10 },
        backgroundColor: palette.softGreen,
        borderTop: `3px solid ${palette.midGreen}`,
      }}
    >
      <Typography
        variant="h3"
        sx={{
          fontFamily: "myhandwriting, sans-serif",
          fontWeight: "bold",
          color: palette.richBrown,
          textAlign: "center",
          mb: 4,
        }}
      >
        Interests
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "center",
          gap: 4,
          maxWidth: "1200px",
          mx: "auto",
        }}
      >
        <ImageCarousel title="Concerts" images={concertImages} />
        <TopSongs />
        <ImageCarousel title="Animals" images={animalImages} />
      </Box>
    </Box>
  );
}
