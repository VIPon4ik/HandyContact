import React from 'react';
import { Button } from '@mui/material';
import { NavContainer, HeaderLink } from 'components/Header/Header.styled';

const UserMenu = ({ name }) => {
  return (
    <NavContainer>
      <Button
        variant="contained"
        LinkComponent={HeaderLink}
        disableElevation
        to="contacts"
      >
        {name}
      </Button>
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
