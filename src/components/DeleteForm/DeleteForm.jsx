import React from 'react';
import { Button } from '@mui/material';
import { deleteContact } from '../../redux/operations';
import { useDispatch } from 'react-redux';
import { StyledDeleteForm, DeleteFormButtonsContainer, DeleteFormTitle } from './DeleteForm.styled';

const DeleteForm = ({ ID, name, setShow }) => {
  const dispatch = useDispatch();

  const handleClose = e => {
    e.preventDefault();

    setShow();
  };

  const handleDelete = e => {
    e.preventDefault();

    dispatch(deleteContact(ID));
    setShow();
  };

  return (
    <StyledDeleteForm onSubmit={handleDelete}>
      <DeleteFormTitle>You sure you want to delete {name}?</DeleteFormTitle>
      <DeleteFormButtonsContainer>
        <Button variant="outlined" type="click" onClick={handleClose}>
          Go back
        </Button>
        <Button variant="contained" type="submit">
          Delete
        </Button>
      </DeleteFormButtonsContainer>
    </StyledDeleteForm>
  );
};

export default DeleteForm;
