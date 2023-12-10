import React from 'react';
import { useSelector } from 'react-redux';
import { selectContacts } from '../redux/selectors';

const Contacts = () => {
  const contacts = useSelector(selectContacts);

  return (
    <ul>
      {contacts.map(({ name, number, id }) => (
        <li key={id}>
          {name} {number}
        </li>
      ))}
    </ul>
  );
};

export default Contacts;
