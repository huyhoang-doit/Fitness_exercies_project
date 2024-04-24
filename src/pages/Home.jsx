// import React, { useState } from 'react'
import { Box } from '@mui/material'
import HeroBanner from '../components/HeroBanner.jsx'
import SearchExercises from '../components/SearchExercises.jsx'
import Exercises from '../components/Exercises.jsx'

const Home = () => {
  return (
    <Box>
      <HeroBanner />
      <SearchExercises />
      <Exercises />
    </Box>
  )
}

export default Home
