import React, { useState } from 'react';
import Modal from 'components/Modal/Modal';
import DeleteForm from 'components/DeleteForm/DeleteForm';
import { ContactsItemContainer, ContactInfoContainer, ContactTitle, ContactButtonContainer } from './ContactsItem.styled';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import EditIcon from '@mui/icons-material/Edit';
import { Button } from '@mui/material';

const ContactsItem = ({ name, number, ID }) => {
  const [show, setShow] = useState(false);

  const showModal = () => setShow(state => !state);

  return (
    <ContactsItemContainer>
      <ContactInfoContainer>
        <AccountCircleIcon style={{fontSize: 60}} />
        <div>
          <ContactTitle>{name}</ContactTitle>
          <p>{number}</p>
        </div>
      </ContactInfoContainer>
      <ContactButtonContainer>
        <Button variant='contained' type="click" onClick={showModal}>
          Delete
        </Button>
        <Button variant='outlined'>
          Edit <EditIcon style={{fontSize: 16, marginLeft:2}}/> 
        </Button>
      </ContactButtonContainer>
      {show && (
        <Modal>
          <DeleteForm setShow={setShow} name={name} ID={ID} />
        </Modal>
      )}
    </ContactsItemContainer>
  );
};

export default ContactsItem;
