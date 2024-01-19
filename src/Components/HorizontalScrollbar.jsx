import React from "react";
import { Box } from "@mui/material";
import BodyPart from "./BodyPart";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Navigation, Mousewheel, Keyboard } from "swiper/modules";
import ExerciseCard from "./ExerciseCard";

const HorizontalScrollbar = ({
  data,
  setBodyPart,
  bodyPart,
  isBodyPart,
}) => (
  <>
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      cssMode={true}
      navigation={true}
      mousewheel={true}
      keyboard={true}
      modules={[Navigation, Mousewheel, Keyboard]}
      className="mySwiper"
    >
      {
        data.map((item) => (
          <SwiperSlide>
            <Box
              key={item.id || item}
              itemId={item.id || item}
              title={item.id || item}
            >
              {isBodyPart ? (
                <BodyPart
                  item={item}
                  setBodyPart={setBodyPart}
                  bodyPart={bodyPart}
                />
              ) : <ExerciseCard exercise={item} />}
            </Box>
          </SwiperSlide>
        ))}
    </Swiper>
  </>
);

export default HorizontalScrollbar;
