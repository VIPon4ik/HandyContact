import React, { useEffect } from 'react';
import { TextField } from '@mui/material';
import { Button } from '@mui/material';
import {
  FormContainer,
  CentredTitle,
  StyledForm,
  ErrorMessage,
  StyledLink,
} from './MainForm.styled';
import { Link as RouterLink } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

const MainForm = ({
  title,
  handleSubmit,
  validationSchema,
  redirectUrl,
  redirectMessage,
}) => {
  const {
    register,
    formState: { isSubmitSuccessful, errors },
    handleSubmit: handleFormSubmit,
    reset,
  } = useForm({ resolver: yupResolver(validationSchema) });

  const fields = Object.keys(validationSchema.fields);

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [reset, isSubmitSuccessful]);

  return (
    <FormContainer>
      <CentredTitle>{title}</CentredTitle>
      <StyledForm onSubmit={handleFormSubmit(handleSubmit)}>
        {fields.map((field, index) => {
          return (
            <>
              <TextField
                label={`${field.charAt(0).toUpperCase() + field.slice(1)}`}
                variant="outlined"
                {...register(field)}
              />
              <ErrorMessage>{errors[field]?.message}</ErrorMessage>
            </>
          );
        })}
        <Button variant="contained" type="submit" size="large">
          Confirm
        </Button>
        {redirectMessage && (
          <StyledLink component={RouterLink} to={`/${redirectUrl}`}>
            {redirectMessage}
          </StyledLink>
        )}
      </StyledForm>
    </FormContainer>
  );
};

export default MainForm;
