import React, { useEffect } from 'react';
import { TextField } from '@mui/material';
import { Button } from '@mui/material';
import { FormContainer, CentredTitle, StyledForm } from './MainForm.styled';
import { Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const MainForm = ({ page, title, handleSubmit }) => {
  const {
    register,
    formState: { errors, isSubmitSuccessful },
    handleSubmit: handleFormSubmit,
    reset,
  } = useForm();

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [reset, isSubmitSuccessful]);

  return (
    <FormContainer>
      <CentredTitle>{title}</CentredTitle>
      <StyledForm onSubmit={handleFormSubmit(handleSubmit)}>
        {page !== 'login' && (
          <>
            <TextField
              label="Name"
              variant="outlined"
              type="text"
              {...register('name', {
                required: 'This field is required',
                minLength: { value: 2, message: 'Min length is 2' },
                maxLength: { value: 36, message: 'Max length is 36' },
              })}
            />
            <p>{errors.name?.message}</p>
          </>
        )}
        {(page === 'registration' || page === 'login') && (
          <TextField
            label="Email"
            variant="outlined"
            type="email"
            {...register('email', {
              required: 'This field is required',
            })}
          />
        )}
        {page === 'contacts' ? (
          <TextField
            label="Number"
            variant="outlined"
            type="tel"
            {...register('number', {
              required: 'This field is required',
            })}
          />
        ) : (
          <TextField
            label="Password"
            variant="outlined"
            type="password"
            {...register('password', {
              required: 'This field is required',
              minLength: { value: 8, message: 'Min length is 8' },
            })}
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
