import React, { useState } from 'react';
import Modal from 'components/Modal/Modal';
import DeleteForm from 'components/DeleteForm/DeleteForm';
import { Link } from 'react-router-dom';
import { ContactsItemContainer } from './ContactsItem.styled';

const ContactsItem = ({ name, number, ID }) => {
  const [show, setShow] = useState(false);

  const showModal = () => setShow(state => !state);

  return (
    <ContactsItemContainer>
      <div>
        <h1>{name}</h1>
        <p>{number}</p>
      </div>
      <div>
        <button type="click" onClick={showModal}>
          Delete
        </button>
        <Link to={`edit-contact/${ID}`} state={{ name, number }}>
          Edit
        </Link>
      </div>
      {show && (
        <Modal>
          <DeleteForm setShow={setShow} name={name} ID={ID} />
        </Modal>
      )}
    </ContactsItemContainer>
  );
};

export default ContactsItem;
