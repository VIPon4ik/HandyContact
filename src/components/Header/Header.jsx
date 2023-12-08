import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <nav>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/'>Contacts</NavLink>
      </nav>
    </header>
  )
}

export default Header
