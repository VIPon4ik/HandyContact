import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header style={{margin: '40px'}}>
      <nav>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/'>Contacts</NavLink>
      </nav>
      <div>
        <NavLink to='login'>Login</NavLink>
      </div>
    </header>
  )
}

export default Header
