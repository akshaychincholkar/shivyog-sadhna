import React, { useState } from 'react';
import { Card, CardMedia, CardContent, Button, Box, Typography } from '@mui/material';

const ImageCarousel = () => {
const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    { src: require('./images/Saptashati/saptashati_adhyay_'+(currentIndex+1)+'.jpg'), title: 'Image 1' },
  ];



  const handleNext = () => {
    // setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % 16);
  };

  const handlePrev = () => {
    // setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + 16) % 16);
  };

  return (
    <Card sx={{ maxWidth: 500, margin: 'auto', mt: 4, boxShadow: 3 }}>
      {/* Image Section */}
      <CardMedia
        component="img"
        image={images[0].src}
        alt={currentIndex}
        sx={{ height: 500 ,
            // objectFit: 'cover', // Ensures the entire image fits in the container
            objectFit: 'contain', // Ensures the entire image fits in the container
            // backgroundColor: '#f5f5f5', // Optional: adds a background color to fill empty space
          
        }}
      />

      {/* Image Title */}
      {/* <CardContent>
        <Typography variant="h6" align="center">
          {images[currentIndex].title}
          {currentIndex}
        </Typography>
      </CardContent> */}
      {/* Navigation Buttons */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', p: 2 }}>
        <Button variant="outlined" onClick={handlePrev}>
          Prev
        </Button>
        <Button variant="outlined" onClick={handleNext}>
          Next
        </Button>
      </Box>
    </Card>
  );
};

export default ImageCarousel;
