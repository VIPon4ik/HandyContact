import React from 'react';
import { TextField } from '@mui/material';
import { Button } from '@mui/material';
import { FormContainer, CentredTitle, StyledForm } from './MainForm.styled';
import { Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const MainForm = ({ page, title, name = '', number = '', handleSubmit }) => {
  return (
    <FormContainer>
      <CentredTitle>{title}</CentredTitle>
      <StyledForm onSubmit={handleSubmit}>
        <TextField label="Name" variant="outlined" type="text" name="name" />
        {page === 'registration' && (
          <TextField
            label="Email"
            variant="outlined"
            type="email"
            name="email"
          />
        )}
        {page === 'contacts' ? (
          <TextField
            label="Number"
            variant="outlined"
            type="tel"
            name="number"
          />
        ) : (
          <TextField
            label="Password"
            variant="outlined"
            type="password"
            name="password"
          />
        )}
        <Button variant="contained" type="submit" size="large">
          Confirm
        </Button>
        {page !== 'contacts' &&
          (page === 'login' ? (
            <Link component={RouterLink} to={`/registration`}>
              Don't have an account? Sign up
            </Link>
          ) : (
            <Link component={RouterLink} to={`/login`}>
              Have an account? Sign in
            </Link>
          ))}
      </StyledForm>
    </FormContainer>
  );
};

export default MainForm;
