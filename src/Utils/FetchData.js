import axios from 'axios';
export const ExercisesOptions =  {
    method:"GET",
    params: {limit: '100'},
        headers: {
      'X-RapidAPI-Key': 'b7375562d8msh8fa0e845967f567p1960c1jsna9d73ea08d58',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };
  
  export const youtubeOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'b7375562d8msh8fa0e845967f567p1960c1jsna9d73ea08d58',
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    }
  };

// const API_KEY = 'b7375562d8msh8fa0e845967f567p1960c1jsna9d73ea08d58'; // Replace with your actual API key
// const BASE_URL = "https://exercisedb.p.rapidapi.com";

export const fetchFromAPI = async (BASE_URL , url , options) => {
    const response = await axios.get(`${BASE_URL}${url}`,options);

  try {
  return response.data;
  } catch (error) {
  console.error(error);
  }
}


// Usage example


