import React from 'react';
import MainForm from 'components/MainForm/MainForm';
import { useNavigate, useParams } from 'react-router-dom';
import { editContact } from '../redux/operations';
import { useDispatch, useSelector } from 'react-redux';
import { selectContactsIsLoading } from '../redux/selectors';
import Loader from 'components/Loader/Loader';

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
        page="contacts"
        title="Edit contact"
        handleSubmit={handleSubmit}
      />
    </>
  );
};

export default EditContact;
