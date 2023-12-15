import React from 'react';
import { Button } from '@mui/material';
import { NavContainer, HeaderLink } from 'components/Header/Header.styled';
import { LimitedButton } from './UserMenu.styled';

const UserMenu = ({ name }) => {
  return (
    <NavContainer>
      <LimitedButton
        variant="contained"
        LinkComponent={HeaderLink}
        disableElevation
        to="contacts"
      >
        {name}
      </LimitedButton>
      <Button
        variant="contained"
        LinkComponent={HeaderLink}
        disableElevation
        to="logout"
      >
        Log Out
      </Button>
    </NavContainer>
  );
};

export default UserMenu;
