import React from 'react';
import { Button } from '@mui/material';
import { NavContainer, HeaderLink } from 'components/Header/Header.styled';

const AuthMenu = () => {
  return (
    <NavContainer>
      <Button
        variant="contained"
        LinkComponent={HeaderLink}
        disableElevation
        to="login"
      >
        Sign in
      </Button>
      <Button
        variant="contained"
        LinkComponent={HeaderLink}
        disableElevation
        to="registration"
      >
        Sign up
      </Button>
    </NavContainer>
  );
};

export default AuthMenu;
