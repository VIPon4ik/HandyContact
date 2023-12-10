import React from 'react'
import { HeaderContainer, NavContainer, HeaderLink } from './Header.styled'
import { NavLink } from 'react-router-dom'
import HomeIcon from '@mui/icons-material/Home'
import { Button } from '@mui/material'

const Header = () => {
  return (
    <HeaderContainer>
      <NavContainer>
        <Button variant='contained' LinkComponent={HeaderLink} disableElevation to='/'><HomeIcon /></Button>
        <Button variant='contained' LinkComponent={HeaderLink} disableElevation to='contacts'>Contacts</Button>
      </NavContainer>
      <div>
        <Button variant='contained' LinkComponent={HeaderLink} disableElevation to='login'>Login</Button>
      </div>
    </HeaderContainer>
  )
}

export default Header
