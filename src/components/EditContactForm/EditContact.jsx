import React from 'react';
import MainForm from 'components/MainForm/MainForm';
import { editContact } from '../../redux/operations';
import { useDispatch, useSelector } from 'react-redux';
import { selectContactsIsLoading } from '../../redux/selectors';
import Loader from 'components/Loader/Loader';
import CloseIcon from '@mui/icons-material/Close';
import { CloseButton } from './EditContact.styled';
import * as yup from 'yup';

const schema = yup.object({
  name: yup.string().min(2).max(36).required(),
  number: yup.string().min(8).max(14).required(),
});

const EditContact = ({ name, number, id, setShow }) => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectContactsIsLoading);

  const handleSubmit = data => {
    const name = data.name;
    const number = data.number;

    dispatch(editContact({ id, name, number }));
    setShow();
  };
  return (
    <div style={{ position: 'relative' }}>
      {isLoading && <Loader />}
      <MainForm
        title="Edit contact"
        handleSubmit={handleSubmit}
        validationSchema={schema}
        defaultName={name}
        defaultNumber={number}
      />
      <CloseButton type='button' onClick={setShow}><CloseIcon /></CloseButton>
    </div>
  );
};

export default EditContact;
