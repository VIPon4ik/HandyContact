import React from 'react';
import { TextField } from '@mui/material';
import { Button } from '@mui/material';
import { StyledForm } from './AuthForm.styled';
import { CentredTitle } from './AuthForm.styled';
import { Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const AuthForm = ({ type }) => {
  return (
    <StyledForm>
      <CentredTitle>Login</CentredTitle>
      <TextField label="Email" variant="outlined" type="email" name="email" />
      <TextField
        label="Password"
        variant="outlined"
        type="password"
        name="password"
      />
      <Button variant="contained" type="submit" size="large">
        Sign In
      </Button>
      <Link component={RouterLink} to='/register'>Don't have an account? Register</Link>
    </StyledForm>
  );
};

export default AuthForm;
