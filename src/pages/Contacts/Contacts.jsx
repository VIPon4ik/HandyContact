import React from 'react';
import { useSelector } from 'react-redux';
import { selectContacts, selectContactsIsLoading } from '../../redux/selectors';
import ContactsItem from 'components/ContactsItem/ContactsItem';
import Loader from 'components/Loader/Loader';
import { ContactsList } from './Contacts.styled';

const Contacts = () => {
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectContactsIsLoading);

  return (
    <>
      {isLoading && <Loader />}
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
