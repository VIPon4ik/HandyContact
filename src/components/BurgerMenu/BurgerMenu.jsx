import React from 'react';
import {
  CloseButton,
  BurgerMenuContainer,
  BurgerNavContainer,
  BurgerLink,
} from './BurgerMenu.styled';
import CloseIcon from '@mui/icons-material/Close';
import { useSelector } from 'react-redux';
import { selectIsLogged, selectAuthIsLoading } from '../../redux/selectors';

const BurgerMenu = ({ showMenu }) => {
  const isLogged = useSelector(selectIsLogged);
  const isLoading = useSelector(selectAuthIsLoading);

  return (
    <BurgerMenuContainer>
      <BurgerNavContainer>
        <BurgerLink to="/">Home</BurgerLink>
        <BurgerLink to="contacts/add-contact">Add contact</BurgerLink>
        <BurgerLink to="contacts">Contacts</BurgerLink>
        {!isLoading && isLogged && (
          <BurgerLink to="logout">Log out</BurgerLink>
        )}
      </BurgerNavContainer>
      <CloseButton type="button" onClick={showMenu}>
        <CloseIcon />
      </CloseButton>
    </BurgerMenuContainer>
  );
};

export default BurgerMenu;
