import React, { useEffect, useState } from 'react'
import {Box} from '@mui/material'
import {useParams} from 'react-router-dom'
import { youtubeOptions,ExercisesOptions , fetchFromAPI } from '../Utils/FetchData'
import Detail from '../Components/Detail'
import ExerciseVideo from '../Components/ExerciseVideo'
import SimilarExercises from '../Components/SimilarExercises'
const ExercisesDetail = () => {
  const [exerciseDetail , setExerciseDetail] = useState({})
  const [exerciseVideos , setExerciseVideos] = useState({})
  const [TargetMuscle , setTargetMuscle] = useState([])
  const [equipmentExercises , setEquipmentExercises] = useState([])
  const {id} = useParams()

  useEffect(()=>{
    const fetchExercisesData = async () => {
      const exerciseDbUrl="https://exercisedb.p.rapidapi.com"
      const YoutubeUrl='https://youtube-search-and-download.p.rapidapi.com'
      const exerciseDetailData= await fetchFromAPI(exerciseDbUrl,`/exercises/exercise/${id}` , ExercisesOptions)
      const exerciseVideoData= await fetchFromAPI(YoutubeUrl,`/search?query=${exerciseDetailData.name} exercise` , youtubeOptions)
      const TargetMuscleExerciseData= await fetchFromAPI(exerciseDbUrl,`/exercises/target/${exerciseDetailData.target}` , ExercisesOptions)
      const EquipmentExerciseData= await fetchFromAPI(exerciseDbUrl,`/exercises/equipment/${exerciseDetailData.equipment}` , ExercisesOptions)
      setExerciseDetail(exerciseDetailData)
      setExerciseVideos(exerciseVideoData)
      setTargetMuscle(TargetMuscleExerciseData)
      setEquipmentExercises(EquipmentExerciseData)
      console.log(EquipmentExerciseData)
    }
    fetchExercisesData()
  },[id])
  return (
    <Box>
        <Detail exerciseDetail={exerciseDetail}/>
        <ExerciseVideo exerciseVideoData={exerciseVideos} name={exerciseDetail.name}/>
        <SimilarExercises TargetMuscle={TargetMuscle} equipmentExercises={equipmentExercises} />
    </Box>
  )
}

export default ExercisesDetail
