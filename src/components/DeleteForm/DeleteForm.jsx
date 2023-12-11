import React from 'react';
import { Button } from '@mui/material';
import { deleteContact } from '../../redux/operations';
import { useDispatch } from 'react-redux';

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
    <form style={{ background: '#fff' }} onSubmit={handleDelete}>
      <h1>You sure you want to delete {name} contact?</h1>
      <Button variant="contained" type="click" onClick={handleClose}>
        Go back
      </Button>
      <Button variant="contained" type="submit">
        Delete
      </Button>
    </form>
  );
};

export default DeleteForm;
