import React from 'react';
import MainForm from 'components/MainForm/MainForm';
import { addContact } from '../redux/operations';
import { useDispatch } from 'react-redux';

const AddContact = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    const name = e.currentTarget.elements.name.value;
    const number = e.currentTarget.elements.number.value;

    dispatch(addContact({ name, number }));

    e.currentTarget.reset();
  }

  return <MainForm page="contacts" title="Add contact" handleSubmit={handleSubmit} />;
};
export default AddContact;
