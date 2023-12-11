import React from 'react';
import { useSelector } from 'react-redux';
import { selectContacts } from '../redux/selectors';
import ContactsItem from 'components/ContactsItem/ContactsItem';

const Contacts = () => {
  const contacts = useSelector(selectContacts);

  return (
    <ul>
      {contacts.map(({ name, number, id }) => (
        <ContactsItem key={id} ID={id} name={name} number={number} />
      ))}
    </ul>
  );
};

export default Contacts;
