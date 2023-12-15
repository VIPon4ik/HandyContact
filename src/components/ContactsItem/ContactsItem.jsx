import React, { useState } from 'react';
import Modal from 'components/Modal/Modal';
import DeleteForm from 'components/DeleteForm/DeleteForm';
import {
  ContactsItemContainer,
  ContactInfoContainer,
  ContactTitle,
  ContactButtonContainer,
  ContactNumber,
} from './ContactsItem.styled';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import EditIcon from '@mui/icons-material/Edit';
import { Button } from '@mui/material';
import EditContact from 'components/EditContactForm/EditContact';

const ContactsItem = ({ name, number, ID }) => {
  const [showDelete, setShowDelete] = useState(false);
  const [showEdit, setShowEdit] = useState(false);

  const showEditModal = () => setShowEdit(state => !state);
  const showDeleteModal = () => setShowDelete(state => !state);

  return (
    <ContactsItemContainer>
      <ContactInfoContainer>
        <AccountCircleIcon style={{ fontSize: 50 }} />
        <div>
          <ContactTitle>{name}</ContactTitle>
          <ContactNumber>{number}</ContactNumber>
        </div>
      </ContactInfoContainer>
      <ContactButtonContainer>
        <Button variant="contained" type="click" onClick={showDeleteModal}>
          Delete
        </Button>
        <Button variant="outlined" onClick={showEditModal}>
          Edit <EditIcon style={{ fontSize: 16, marginLeft: 2 }} />
        </Button>
      </ContactButtonContainer>
      {showDelete && (
        <Modal>
          <DeleteForm setShow={showDeleteModal} name={name} ID={ID} />
        </Modal>
      )}
      {showEdit && (
        <Modal>
          <EditContact
            name={name}
            number={number}
            setShow={showEditModal}
            id={ID}
          />
        </Modal>
      )}
    </ContactsItemContainer>
  );
};

export default ContactsItem;
