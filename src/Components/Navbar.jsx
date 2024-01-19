import React from 'react'
import { Stack} from '@mui/material'
import { NavLink } from 'react-router-dom'
import Logo from '../assets/images/Logo.png'
const Navbar = () => {
  return (
    <Stack direction="row" justifyContent="start" sx={{mt:{xs:"32px" , md:"20px" } , gap:{xs:"80px" , md:"120px"}}}>
      <NavLink to='/'>
        <img src={Logo} alt="Logo" width="55px" height="55px" style={{margin:"0 20px"}} />
      </NavLink>
      <Stack direction="row" fontSize="24px" alignItems="flex-end" gap={3}>
        <NavLink to='/' className="link" style={{textDecoration:"none" , color:"#3A1212" , borderBottom:"3px solid #ff2625"}}>
            Home
        </NavLink>
        <a href='#exercises' className="link" style={{textDecoration:"none" , color:"#3A1212"}}>
            Exercises
        </a>
      </Stack>
    </Stack>
  )
}

export default Navbar