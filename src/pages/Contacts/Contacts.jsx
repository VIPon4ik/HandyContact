import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectContacts,
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
import { toast } from 'react-toastify';

const schema = yup.object({
  name: yup.string().min(2).max(36).required(),
  number: yup
    .number()
    .integer()
    .positive()
    .test('len', 'Number must be between 8 and 14 digits', value => {
      const stringValue = value.toString();
      return stringValue.length >= 8 && stringValue.length <= 14;
    })
    .required()
    .typeError('Number cannot be a string'),
});

const Contacts = () => {
  const isLoading = useSelector(selectContactsIsLoading);
  const contacts = useSelector(selectContacts);
  const filtredContacts = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();

  const handleSubmit = data => {
    const name = data.name;
    const number = data.number;

    if (contacts.find(contact => contact.name === name)) {
      toast.error('Contact with this name already exist');
      return;
    }

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
