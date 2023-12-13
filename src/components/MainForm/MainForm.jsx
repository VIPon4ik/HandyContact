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

const getFieldType = (field) => {
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
}

const getDefaultValue = (type, defaultName, defaultNumber) => {
  switch (type) {
    case 'text':
      return defaultName;
    case 'tel':
      return defaultNumber;
    default:
      return '';
  }
}

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

  return (
    <FormContainer>
      <CentredTitle>{title}</CentredTitle>
      <StyledForm onSubmit={handleFormSubmit(handleSubmit)}>
        {fields.map((field, index) => {
          const type = getFieldType(field);
          return (
            <>
              <TextField type={type}
                label={`${field.charAt(0).toUpperCase() + field.slice(1)}`}
                variant="outlined"
                {...register(field)}
                defaultValue={getDefaultValue(type, defaultName, defaultNumber)}
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
