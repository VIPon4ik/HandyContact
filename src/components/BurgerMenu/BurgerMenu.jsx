import React from 'react';
import { createPortal } from 'react-dom';
import {
  CloseButton,
  BurgerMenuContainer,
  BurgerNavContainer,
  BurgerLink,
} from './BurgerMenu.styled';
import CloseIcon from '@mui/icons-material/Close';

const modalRoot = document.getElementById('modal-root');

const BurgerMenu = ({ showMenu }) => {

  return createPortal(
    <BurgerMenuContainer>
      <BurgerNavContainer onClick={showMenu}>
        <BurgerLink to="/">Home</BurgerLink>
        <BurgerLink to="contacts/add-contact">Add contact</BurgerLink>
        <BurgerLink to="contacts">Contacts</BurgerLink>
      </BurgerNavContainer>
      <CloseButton type="button" onClick={showMenu}>
        <CloseIcon />
      </CloseButton>
    </BurgerMenuContainer>,
    modalRoot
  );
};

export default BurgerMenu;
