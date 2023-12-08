import React from 'react';
import { TextField } from '@mui/material';
import { StyledForm } from './AuthForm.styled';

const AuthForm = () => {
  return (
    <StyledForm>
      <TextField label="Email" variant="outlined" type="email" name="email" />
      <TextField
        label="Password"
        variant="outlined"
        type="password"
        name="password"
      />
    </StyledForm>
  );
};

export default AuthForm;
