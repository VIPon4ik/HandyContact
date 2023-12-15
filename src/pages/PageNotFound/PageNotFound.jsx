import React from 'react';
import { StyledTitle } from './PageNotFound.styled';
import { Button } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
  return (
    <>
      <Button to="/" variant='contained' LinkComponent={Link}><ArrowBackIcon />Home</Button>
      <StyledTitle>Page not Found</StyledTitle>
    </>
  );
};

export default PageNotFound;
