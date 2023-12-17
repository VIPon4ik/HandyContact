import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, selectContactsIsLoading } from '../../redux/selectors';
import ContactsItem from 'components/ContactsItem/ContactsItem';
import Loader from 'components/Loader/Loader';
import { ContactsList, FilterInput } from './Contacts.styled';
import MainForm from 'components/MainForm/MainForm';
import * as yup from 'yup';
import { addContact } from '../../redux/operations';

const schema = yup.object({
  name: yup.string().min(2).max(36).required(),
  number: yup.string().min(8).max(14).required(),
});

const Contacts = () => {
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectContactsIsLoading);
  const dispatch = useDispatch();

  const handleSubmit = data => {
    const name = data.name;
    const number = data.number;
    dispatch(addContact({ name, number }));
  };

  return (
    <>
      {isLoading && <Loader />}
      <MainForm
        title="Add contact"
        handleSubmit={handleSubmit}
        validationSchema={schema}
      />
      <FilterInput label="Filter" variant="outlined" type="text" />
      {contacts.length !== 0 && (
        <ContactsList>
          {contacts.map(({ name, number, id }) => (
            <ContactsItem key={id} ID={id} name={name} number={number} />
          ))}
        </ContactsList>
      )}
    </>
  );
};

export default Contacts;
