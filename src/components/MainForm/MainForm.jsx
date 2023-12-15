import React, { useEffect } from 'react';
import { Button } from '@mui/material';
import {
  FormContainer,
  CentredTitle,
  StyledForm,
  ErrorMessage,
  StyledLink,
  InputContainer,
  StyledInput,
} from './MainForm.styled';
import { Link as RouterLink } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

const getFieldType = field => {
  switch (field) {
    case 'password':
      return 'password';
    case 'email':
      return 'email';
    case 'number':
      return 'tel';
    default:
      return 'text';
  }
};

const MainForm = ({
  title,
  handleSubmit,
  validationSchema,
  redirectUrl,
  redirectMessage,
  defaultName = '',
  defaultNumber = '',
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

  useEffect(() => {
    if (defaultName && defaultNumber) {
      reset({ name: defaultName, number: defaultNumber });
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [defaultName, defaultNumber]);

  return (
    <FormContainer>
      <CentredTitle>{title}</CentredTitle>
      <StyledForm onSubmit={handleFormSubmit(handleSubmit)}>
        {fields.map((field, index) => {
          const type = getFieldType(field);
          return (
            <InputContainer key={field}>
              <StyledInput
                type={type}
                label={`${field.charAt(0).toUpperCase() + field.slice(1)}`}
                variant="outlined"
                {...register(field)}
              />
              <ErrorMessage>{errors[field]?.message}</ErrorMessage>
            </InputContainer>
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
