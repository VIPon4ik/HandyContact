import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectContactsIsLoading,
  selectFilteredContacts,
} from '../../redux/selectors';
import ContactsItem from 'components/ContactsItem/ContactsItem';
import Loader from 'components/Loader/Loader';
import { ContactsList, FilterInput } from './Contacts.styled';
import MainForm from 'components/MainForm/MainForm';
import * as yup from 'yup';
import { addContact } from '../../redux/operations';
import { changeFilter } from '../../redux/filterSlice';

const schema = yup.object({
  name: yup.string().min(2).max(36).required(),
  number: yup.string().min(8).max(14).required(),
});

const Contacts = () => {
  const isLoading = useSelector(selectContactsIsLoading);
  const filtredContacts = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();

  const handleSubmit = data => {
    const name = data.name;
    const number = data.number;
    dispatch(addContact({ name, number }));
  };

  const handleChange = e => {
    const filter = e.currentTarget.value;
    dispatch(changeFilter(filter));
  };

  return (
    <>
      {isLoading && <Loader />}
      <MainForm
        title="Add contact"
        handleSubmit={handleSubmit}
        validationSchema={schema}
      />
      <FilterInput
        label="Filter"
        variant="outlined"
        type="text"
        onChange={handleChange}
      />
      {filtredContacts.length !== 0 && (
        <ContactsList>
          {filtredContacts.map(({ name, number, id }) => (
            <ContactsItem key={id} ID={id} name={name} number={number} />
          ))}
        </ContactsList>
      )}
    </>
  );
};

export default Contacts;
