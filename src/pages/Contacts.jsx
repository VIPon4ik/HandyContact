import React from 'react';
import { useSelector } from 'react-redux';
import { selectContacts, selectContactsIsLoading } from '../redux/selectors';
import ContactsItem from 'components/ContactsItem/ContactsItem';
import Loader from 'components/Loader/Loader';

const Contacts = () => {
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectContactsIsLoading);

  return (
    <>
      {isLoading && <Loader />}
      <ul>
        {contacts.map(({ name, number, id }) => (
          <ContactsItem key={id} ID={id} name={name} number={number} />
        ))}
      </ul>
    </>
  );
};

export default Contacts;
