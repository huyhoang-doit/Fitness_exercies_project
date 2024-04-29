import { Link } from 'react-router-dom'
import { Stack } from '@mui/material'

import Logo from '../assets/images/Logo.png'

const Navbar = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
  return (
    <Stack
      direction='row'
      justifyContent='space-around'
      sx={{
        gap: { sm: '122px', xs: '40px' },
        mt: { sm: '32px', xs: '20px' },
        justifyContent: 'none'
      }} px='20px'
    >
      <Link to='/'>
        <img src={Logo} alt="Logo" style={{ width: '76px', height: '76px', margin: '0 20px' }} />
      </Link>
      <Stack
        direction='row'
        gap='40px'
        fontSize='24px'
        alignItems='center'
      >
        <Link to='/' style={{ textDecoration: 'none', color: '#3A1212', borderBottom: '3px solid #FF2625' }}>Home</Link>
        <a onClick={() => scrollToSection('exercises')} style={{ textDecoration: 'none', color: '#3A1212', cursor: 'pointer' }} behavior='smooth'>
          Exercises
        </a>
      </Stack>
    </Stack>
  )
}

export default Navbar
