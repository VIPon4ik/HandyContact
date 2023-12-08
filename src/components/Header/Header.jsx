import React from 'react'
import { NavLink } from 'react-router-dom'
import { HeaderContainer } from './Header.styled'

const Header = () => {
  return (
    <HeaderContainer>
      <nav>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/'>Contacts</NavLink>
      </nav>
      <div>
        <NavLink to='login'>Login</NavLink>
      </div>
    </HeaderContainer>
  )
}

export default Header
