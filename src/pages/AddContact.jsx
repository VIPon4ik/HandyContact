import React from 'react';
import MainForm from 'components/MainForm/MainForm';
import { addContact } from '../redux/operations';
import { useDispatch } from 'react-redux';

const AddContact = () => {
  const dispatch = useDispatch();

  const handleSubmit = data => {
    const name = data.name;
    const number = data.number;
    dispatch(addContact({ name, number }));
  };

  return (
    <MainForm page="contacts" title="Add contact" handleSubmit={handleSubmit} />
  );
};
export default AddContact;
