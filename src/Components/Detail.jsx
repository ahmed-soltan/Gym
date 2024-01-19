import React from "react";
import { Stack, Button, Typography } from "@mui/material";
import BodyPartImage from "../assets/icons/body-part.png";
import TargetImage from "../assets/icons/target.png";
import EquipmentImage from "../assets/icons/equipment.png";
import Loader from "./Loader";
const Detail = ({ exerciseDetail }) => {
  const { bodyPart, name, gifUrl, target, equipment } = exerciseDetail;
  const ExtraDetail = [
    {
        icon:BodyPartImage,
        name:bodyPart,
    },
    {
        icon:TargetImage,
        name:target,
    },
    {
        icon:EquipmentImage,
        name:equipment,
    },
  ]
  return (
   <>
    {gifUrl ? <Stack
        gap="16px"
        sx={{ flexDirection: { lg: "row " }, p: "20px", alignItems: "center" , justifyContent:"center"}}
      >
        <img src={gifUrl} alt={name} loading="lazy" className="detail-image" />
        <Stack sx={{ gap: { lg: "35px", xs: "22px" } }}>
          <Typography sx={{ fontSize: { lg: '64px', xs: '30px' } }} fontWeight={600} textTransform="capitalize">{name}</Typography>
          <Typography
            sx={{ fontSize: { lg: "24px", xs: "18px" } }}
            color="#4F4C4C"
          >
            Exercises keep you strong.{" "}
            <span style={{ textTransform: "capitalize" }}>{name}</span> bup is one
            of the best <br /> exercises to target your {target}. It will help you
            improve your <br /> mood and gain energy.
          </Typography>
          {ExtraDetail.map((detail , index)=>(
              <Stack direction="row" key={index} gap="24px" alignItems="center">
                  <Button sx={{ background: '#FFF2DB', borderRadius: '50%', width: '100px', height: '100px' }}>
                      <img src={detail.icon} alt="" style={{ width: '50px', height: '50px' }} />
                  </Button>
                  <Typography variant="h6" textTransform="capitalize" sx={{ fontSize: { lg: '30px', xs: '20px' } }}>
                      {detail.name}
                  </Typography>
              </Stack>
          ))}
        </Stack>
      </Stack> : <Loader/>}</>
  );
};

export default Detail;
