import React, { useState } from 'react';
import {
  HeaderContainer,
  NavContainer,
  HeaderLink,
  BurgerButton,
} from './Header.styled';
import HomeIcon from '@mui/icons-material/Home';
import MenuIcon from '@mui/icons-material/Menu';
import { Button } from '@mui/material';
import AuthMenu from 'components/AuthMenu/AuthMenu';
import UserMenu from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import {
  selectAuthIsLoading,
  selectIsLogged,
  selectName,
} from '../../redux/selectors';
import BurgerMenu from 'components/BurgerMenu/BurgerMenu';

const Header = () => {
  const name = useSelector(selectName);
  const isLogged = useSelector(selectIsLogged);
  const isLoading = useSelector(selectAuthIsLoading);
  const [show, setShow] = useState(false);

  const showMenu = () => setShow(state => !state);

  return (
    <HeaderContainer>
      <BurgerButton type="button" onClick={showMenu}>
        <MenuIcon style={{ fontSize: 30 }} />
      </BurgerButton>
      <NavContainer>
        <Button
          variant="contained"
          LinkComponent={HeaderLink}
          disableElevation
          to="/"
        >
          <HomeIcon />
        </Button>
        <Button
          variant="contained"
          LinkComponent={HeaderLink}
          disableElevation
          to="contacts"
          end
        >
          Contacts
        </Button>
      </NavContainer>
      {show && <BurgerMenu showMenu={showMenu} />}
      {!isLoading && (isLogged ? <UserMenu name={name} /> : <AuthMenu />)}
    </HeaderContainer>
  );
};

export default Header;
