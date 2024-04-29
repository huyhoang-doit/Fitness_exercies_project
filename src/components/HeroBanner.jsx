
import { Box, Stack, Typography, Button } from '@mui/material'
import HeroBannerImage from '../assets/images/banner.png'

const HeroBanner = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
  return (
    <Box sx={{
      mt: { lg: '112px', xs: '70px' },
      ml: { sm: '50px' }
    }} position='relative' p='20px'>
      <Typography color='#FF2625' fontWeight='600' fontSize='26px'>
        Fitness Club
      </Typography>
      <Typography fontWeight={700} sx={{
        fontSize: { lg: '44px', xs: '40px' }
      }}
        mb='23px' mt='30px'
      >
        Sweat, Smile <br /> And Reapeat
      </Typography>
      <Typography fontSize='22px' lineHeight='35px' mb={4}>
        Checkout the most effective exercises
      </Typography>
      <Button
        variant="contained"
        color="error"
        sx={{ backgroundColor: '#ff2625', pading: '10px' }
        }
        onClick={() => scrollToSection('exercises')}
      >
        Explore Exercises
      </Button>
      <Typography
        fontWeight={600}
        color='#FF2625'
        sx={{
          opacity: 0.1,
          display: { lg: 'block', xs: 'none' }
        }}
        fontSize='200px'

      >
        Exercises
      </Typography>
      <img src={HeroBannerImage} alt='Hero-banner' className='hero-banner-img' />
    </Box >
  )
}

export default HeroBanner
