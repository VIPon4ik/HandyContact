import React from 'react';
import { HeaderContainer, NavContainer, HeaderLink } from './Header.styled';
import HomeIcon from '@mui/icons-material/Home';
import { Button } from '@mui/material';
import AuthMenu from 'components/AuthMenu/AuthMenu';
import UserMenu from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { selectAuthIsLoading, selectIsLogged, selectName } from '../../redux/selectors';

const Header = () => {
  const name = useSelector(selectName);
  const isLogged = useSelector(selectIsLogged);
  const isLoading = useSelector(selectAuthIsLoading);

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
          to="contacts/add-contact"
        >
          Add contact
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
      {!isLoading && (isLogged ? <UserMenu name={name} /> : <AuthMenu />)}
    </HeaderContainer>
  );
};

export default Header;
