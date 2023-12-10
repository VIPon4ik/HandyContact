import React from 'react';
import { TextField } from '@mui/material';
import { Button } from '@mui/material';
import { FormContainer, CentredTitle, StyledForm } from './MainForm.styled';
import { Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const AuthForm = ({ type }) => {
  return (
    <FormContainer>
      <CentredTitle>Login</CentredTitle>
      <StyledForm>
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
        <Link component={RouterLink} to="/register">
          Don't have an account? Register
        </Link>
      </StyledForm>
    </FormContainer>
  );
};

export default AuthForm;
