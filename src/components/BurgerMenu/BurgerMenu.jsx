import React from 'react'
import { CloseButton, BurgerMenuContainer, BurgerNavContainer, BurgerLink } from './BurgerMenu.styled'
import CloseIcon from '@mui/icons-material/Close';

const BurgerMenu = ({ showMenu }) => {
  return (
    <BurgerMenuContainer>
      <BurgerNavContainer>
        <BurgerLink to='/'>Home</BurgerLink>
        <BurgerLink to='add-contact'>Add contact</BurgerLink>
        <BurgerLink to='contacts'>Contacts</BurgerLink>
        <BurgerLink to='/'>Log out</BurgerLink>
      </BurgerNavContainer>
      <CloseButton type='button' onClick={showMenu}><CloseIcon /></CloseButton>
    </BurgerMenuContainer>
  )
}

export default BurgerMenu
