import React from 'react';
import MainForm from 'components/MainForm/MainForm';
import { useNavigate, useParams } from 'react-router-dom';
import { editContact } from '../redux/operations';
import { useDispatch, useSelector } from 'react-redux';
import { selectContactsIsLoading } from '../redux/selectors';
import Loader from 'components/Loader/Loader';
import * as yup from 'yup';

const schema = yup.object({
  name: yup.string().min(2).max(36).required(),
  number: yup.string().min(8).max(14).required(),
});

const EditContact = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLoading = useSelector(selectContactsIsLoading);

  const handleSubmit = data => {
    const name = data.name;
    const number = data.number;

    dispatch(editContact({ id, name, number }));
    navigate('/contacts');
  };
  return (
    <>
      {isLoading && <Loader />}
      <MainForm
        title="Edit contact"
        handleSubmit={handleSubmit}
        validationSchema={schema}
      />
    </>
  );
};

export default EditContact;
