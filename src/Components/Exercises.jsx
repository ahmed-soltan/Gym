import React, { useEffect, useState } from "react";
import Pagination from "@mui/material/Pagination";
import { Stack, Box, Typography } from "@mui/material";
import {ExercisesOptions , fetchFromAPI } from "../Utils/FetchData";
import ExerciseCard from "./ExerciseCard";
const Exercises = ({ setExercises, bodyPart, exercises }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const exercisePerPage = 15;
  const indexOfLastExercise=currentPage * exercisePerPage ;
  const indexOfFirstExercise=indexOfLastExercise - exercisePerPage ;
  const currentExercise = exercises.slice(indexOfFirstExercise, indexOfLastExercise)
  const Paginate = (e, value) => {
    setCurrentPage(value)
    window.scrollTo({ top: 1800, left: 100, behavior: "smooth" });

  };
  useEffect(()=>{
    const fetchExercises = async () =>{
      let exercisesData=[]
      if(bodyPart==="all"){
        exercisesData= await fetchFromAPI("https://exercisedb.p.rapidapi.com" , "/exercises" , ExercisesOptions);
      }else{
        
        console.log(bodyPart);
        exercisesData= await fetchFromAPI("https://exercisedb.p.rapidapi.com",`/exercises/bodyPart/${bodyPart}` , ExercisesOptions);
        
      }
      setExercises(exercisesData);
    }
    fetchExercises()
  },[bodyPart , setExercises])
  return (
    <Box id="exercises" sx={{ mt: { lg: "109px" } }} mt="50px" p="20px">
      <Typography
        variant="h4"
        fontWeight="bold"
        sx={{ fontSize: { lg: "44px", xs: "30px" } }}
        mb="46px"
      >
        Showing Results
      </Typography>
      <Stack
        direction="row"
        sx={{ gap: { lg: "110px", xs: "50px" } }}
        flexWrap="wrap"
        justifyContent="center"
      >
        {currentExercise.map((exercise) => (
          <ExerciseCard key={exercise.index} exercise={exercise} />
        ))}
      </Stack>
      <Stack direction="row" mt="100px" alignItems="center" justifyContent="center">
        {exercises.length > exercisePerPage && (
          <Pagination
            color="standard"
            shape="rounded"
            count={Math.ceil(exercises.length / exercisePerPage)}
            page={currentPage}
            onChange={Paginate}
            size="large"
          />
        )}
      </Stack>
    </Box>
  );
};

export default Exercises;
