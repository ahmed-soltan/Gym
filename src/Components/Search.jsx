import React, { useEffect, useState } from "react";
import { TextField, Box, Stack, Typography, Button } from "@mui/material";
import { ExercisesOptions ,fetchFromAPI } from "../Utils/FetchData";
import HorizontalScrollbar from './HorizontalScrollbar.jsx'
const Search = ({setExercises , setBodyPart , bodyPart}) => {
  const [search, setSearch] = useState("all");
  const [bodyParts, setBodyParts] = useState([]);
  useEffect(()=>{

    fetchFromAPI('https://exercisedb.p.rapidapi.com' , '/exercises/bodyPartList' , ExercisesOptions)
      .then((data) => {
        setBodyParts(["all", ...data]);
      })
  },[])
  const handleSearch = async () => {
    if (search) {
      const exercisesData = await fetchFromAPI("https://exercisedb.p.rapidapi.com","/exercises" , ExercisesOptions);
      const searchExercises = exercisesData.filter((exercise) =>
      exercise.name.toLowerCase().includes(search)
      ||exercise.target.toLowerCase().includes(search)
      ||exercise.equipment.toLowerCase().includes(search)
      ||exercise.bodyPart.toLowerCase().includes(search)
      );
      setSearch('')
      setExercises(searchExercises)
    }
  };
  return (
    <Stack alignItems="center" mt="100px" justifyContent="center" p="20px">
      <Typography
        fontWeight={700}
        sx={{
          fontSize: { xs: "30px", lg: "44px" },
          mb: "50px",
          textAlign: "center",
        }}
      >
        Awesome Exercises You <br /> Should know
      </Typography>
      <Box position="relative" mb="72px">
        <TextField
          sx={{
            input: { fontWeight: "700", border: "none", borderRadius: "4px" },
            width: { lg: "1100px", xs: "100%" },
            backgroundColor: "#fff",
            borderRadius: "40px",
          }}
          height="76px"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value.toLowerCase());
          }}
          placeholder="Search Exercises"
          type="text"
        ></TextField>
        <Button
          className="search-btn"
          sx={{
            backgroundColor: "#ff2625",
            color: "#fff",
            textTransform: "none",
            width: { lg: "175px", xs: "100%" },
            fontSize: { lg: "20px", xs: "12px" },
            height: { lg: "56px", xs: "40px" },
            mt: { lg: "0", xs: "10px" },
          }}
          onClick={handleSearch}
        >
          {" "}
          Search{" "}
        </Button>
      </Box>
      <Box sx={{ position: 'relative', width: '100%', p: '20px' }}>
      <HorizontalScrollbar data={bodyParts}  bodyParts setBodyPart={setBodyPart} bodyPart={bodyPart} isBodyPart  />
      </Box>
    </Stack>
  );
};

export default Search;
