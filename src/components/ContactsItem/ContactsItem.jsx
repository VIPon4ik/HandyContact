import React, { useState } from 'react';
import Modal from 'components/Modal/Modal';
import DeleteForm from 'components/DeleteForm/DeleteForm';

const ContactsItem = ({ name, number, ID}) => {
  const [show, setShow] = useState(false);

  const showModal = () => setShow(state => !state);

  return (
    <li>
      {name} {number}
      <button type='click' onClick={showModal}>Delete</button>
      {show && <Modal><DeleteForm setShow={setShow} name={name} ID={ID}/></Modal>}
    </li>
  );
};

export default ContactsItem;
