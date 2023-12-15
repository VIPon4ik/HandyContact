import styled from '@emotion/styled';
import { Link } from '@mui/material';

export const FormContainer = styled.div`
  width: 100%;
  max-width: 400px;
  box-shadow: 1px 1px 4px 1px rgba(0, 0, 0, 0.2);
  padding: 40px 20px;
  border-radius: 4px;
  background-color: #fff;
  margin: 0 auto;
  margin-top: 120px;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;

export const CentredTitle = styled.h1`
  text-align: center;
  margin-bottom: 20px;
  text-transform: capitalize;
  color: rgb(67, 77, 91);
`;

export const ErrorMessage = styled.p`
  margin: 10px 0;
  color: tomato;
  
  &:first-letter {
    text-transform: capitalize;
  }
`;

export const StyledLink = styled(Link)`
  margin-top: 20px;
`;
