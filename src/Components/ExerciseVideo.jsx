import React from "react";
import { Box, Stack, Typography } from "@mui/material";
const ExerciseVideo = ({ exerciseVideoData, name }) => {
    if(!exerciseVideoData.contents){
        return "Loading...";
    }
  return (
    <Box sx={{ marginTop: { lg: "203px", xs: "20px" } }} p="20px">
      <Typography variant="h3" mb="33px" textTransform="capitalize">
        watch{" "}
        <span style={{ color: "#FF2625", textTransform: "capitalize" }}>
          {name}
        </span>{" "}
        exercise Videos
      </Typography>
      <Stack
        sx={{ flexDirection: { lg: "row" }, gap: { lg: "110px", xs: "0px" } }}
        justifyContent="flex-start"
        flexWrap="wrap"
        alignItems="center"
      >
{exerciseVideoData.contents.slice(1,5).map((item, index) => (
  <a
    key={index}
    className="exercise-video"
    href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
    target="_blank"
    rel="noreferrer"
    style={{position:"relative" , margin:"10px 0"}}

  >
    <img src={item.video.thumbnails[0].url} alt={item.video.title} position="relative" style={{position:"relative"}}/>
    <Typography color="#fff" backgroundColor="#000" width="60px" textAlign="center" position="absolute" bottom="40%" right="0">
        {item.video.lengthText}
    </Typography>
    <Box>
              <Typography sx={{ fontSize: { lg: '22px', xs: '16px' } }} fontWeight={600} color="#000">
                {item.video.title}
              </Typography>
              <Typography fontSize="14px" color="#000">
                {item.video.channelName}
              </Typography>
            </Box>
  </a>
))}
      </Stack>
    </Box>
  );
};

export default ExerciseVideo;
