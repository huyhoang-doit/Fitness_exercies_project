import { Box, Typography, Stack } from '@mui/material'

import Logo from '../assets/images/Logo-1.png'

const Footer = () => {
  return (
    <Box mt='80px' bgcolor='#fff3f4'>
      <Stack gap='40px' alignItems='center' px='40px' pt='24px'>
        <img src={Logo} alt="Logo" width='200px' height='50px' />
        <Typography variant='h5' pb='40px' mt='20px' fontWeight={600}>
          Every day is a choice.
          Eat Sleep, <span style={{ color: '#FF2625', textTransform: 'capitalize' }}>Gym</span>, and Repeat.
        </Typography>
      </Stack>
    </Box>
  )
}

export default Footer
