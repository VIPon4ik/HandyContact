import React from 'react';
import MainForm from 'components/MainForm/MainForm';
import { addContact } from '../redux/operations';
import { useDispatch, useSelector } from 'react-redux';
import { selectContactsIsLoading } from '../redux/selectors';
import Loader from 'components/Loader/Loader';

const AddContact = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectContactsIsLoading);

  const handleSubmit = data => {
    const name = data.name;
    const number = data.number;
    dispatch(addContact({ name, number }));
  };

  return (
    <>
      {isLoading && <Loader />}
      <MainForm
        page="contacts"
        title="Add contact"
        handleSubmit={handleSubmit}
      />
    </>
  );
};
export default AddContact;
