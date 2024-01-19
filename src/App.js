import React from 'react'
import { Box } from '@mui/material'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import ExercisesDetails from './Pages/ExercisesDetails'
import Footer from './Components/Footer'
const App = () => {
  return (
    <BrowserRouter>
      <Box width="400px" sx={{ width: { xl: "100%" } }} m="auto">
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/exercise/:id' element={<ExercisesDetails />} />
        </Routes>
        <Footer />

      </Box>
    </BrowserRouter>
  )
}

export default App