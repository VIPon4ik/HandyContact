import React from 'react';
import { HeaderContainer, NavContainer, HeaderLink } from './Header.styled';
import HomeIcon from '@mui/icons-material/Home';
import { Button } from '@mui/material';
import AuthMenu from 'components/AuthMenu/AuthMenu';
import UserMenu from 'components/UserMenu/UserMenu';

const Header = () => {
  return (
    <HeaderContainer>
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
        >
          Contacts
        </Button>
      </NavContainer>
      <AuthMenu />
    </HeaderContainer>
  );
};

export default Header;
