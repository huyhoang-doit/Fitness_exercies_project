import React from 'react'
import { Typography, Stack, Box } from '@mui/material'
import HorizontalScrollbar from './HorizontalScrollbar'
import Loader from './Loader'


const SimilarExercises = ({ targetMuscleExercises, equipmentExercises }) => {
  return (
    <Box sx={{ mt: { lg: '100px', xs: '0' } }} p="20px">
      <Typography sx={{ fontSize: { lg: '44px', xs: '25px' } }} fontWeight={700} color="#000" mb="33px">
        Exercises that target the same <span style={{ color: '#FF2625', textTransform: 'capitalize' }}>muscle</span> group
      </Typography>
      <Stack direction='row' sx={{ p: '2px', position: 'relative' }} mb={7}>
        {targetMuscleExercises.length ?
          <HorizontalScrollbar data={targetMuscleExercises} /> :
          <Loader />
        }
      </Stack>
      <Typography sx={{ fontSize: { lg: '44px', xs: '25px' } }} fontWeight={700} color="#000" mb="33px">
        Exercises that target the same <span style={{ color: '#FF2625', textTransform: 'capitalize' }}>equipment</span>
      </Typography>
      <Stack direction='row' sx={{ p: '2px', position: 'relative' }}>
        {equipmentExercises.length ?
          <HorizontalScrollbar data={equipmentExercises} /> :
          <Loader />
        }
      </Stack>
    </Box>
  )
}

export default SimilarExercises
