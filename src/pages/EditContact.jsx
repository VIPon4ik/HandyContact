import React from 'react';
import MainForm from 'components/MainForm/MainForm';
import { useNavigate, useParams } from 'react-router-dom';
import { editContact } from '../redux/operations';
import { useDispatch } from 'react-redux';

const EditContact = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = data => {
    const name = data.name;
    const number = data.number;

    dispatch(editContact({ id, name, number }))
    navigate('/contacts');
  };
  return (
    <MainForm page="contacts" title="Edit contact" handleSubmit={handleSubmit} />
  );
};

export default EditContact;
