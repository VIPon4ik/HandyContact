import React from 'react';
import MainForm from 'components/MainForm/MainForm';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

const EditContact = () => {
  const { id } = useParams();
  const { state: { name, number }} = useLocation();
  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
  };
  return (
    <MainForm page="contacts" title="Edit contact" name={name} number={number} handleSubmit={handleSubmit} />
  );
};

export default EditContact;
