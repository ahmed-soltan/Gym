import React from "react";
import { Box, Typography, Stack } from "@mui/material";
import { Button } from "@mui/material";
import Banner from '../assets/images/banner.png'
const HeroBanner = () => {
  return (
    <Box
      sx={{ mt: { lg: "180px" , xs:"100px"}, mr: {sm: "40px" } , px:{lg:"50px" , xs:"20px"} }}
      position="relative"
    >
      <Typography color="#ff2625" fontWeight="600" fontSize="30px">
        Fitness Club
      </Typography>
      <Typography color="#000" fontWeight="600" variant="h3" my={2}>
        Sweat, Smile <br /> and Repeat
      </Typography>
      <Typography
        color="#333"
        fontWeight="500"
        fontSize="18px"
        my={2}
        sx={{ "@media (max-width: 600px)": { color: "red" } }}
      >
        Checkout The most Effective Exercises
      </Typography>
      <Button href="#exercises" variant="contained" color="error">
        Explore Exercises
      </Button>
      <Typography fontWeight={600} color="#FF2625" sx={{ opacity: '0.1', display: { lg: 'block', xs: 'none' }, fontSize: '200px' }}>
      Exercise
    </Typography>
      <img src={Banner} alt="banner" className="hero-banner-img" />
    </Box>
  );
};

export default HeroBanner;
