import React from 'react'
import { HeaderContainer, NavContainer, HeaderLink } from './Header.styled'
import HomeIcon from '@mui/icons-material/Home'
import { Button } from '@mui/material'

const Header = () => {
  return (
    <HeaderContainer>
      <NavContainer>
        <Button variant='contained' LinkComponent={HeaderLink} disableElevation to='/'><HomeIcon /></Button>
        <Button variant='contained' LinkComponent={HeaderLink} disableElevation to='contacts'>Contacts</Button>
      </NavContainer>
      <NavContainer>
        <Button variant='contained' LinkComponent={HeaderLink} disableElevation to='login'>Sign in</Button>
        <Button variant='contained' LinkComponent={HeaderLink} disableElevation to='registration'>Sign up</Button>
      </NavContainer>
    </HeaderContainer>
  )
}

export default Header
