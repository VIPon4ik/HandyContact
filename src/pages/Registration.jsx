import React from 'react';
import MainForm from 'components/MainForm/MainForm';
import { useDispatch } from 'react-redux';
import { SignUp } from '../redux/operations';

const Registration = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    const name = e.currentTarget.elements.name.value;
    const email = e.currentTarget.elements.email.value;
    const password = e.currentTarget.elements.password.value;

    dispatch(SignUp({ name, email, password }));
    e.currentTarget.reset();
  }

  return <MainForm page="registration" title='Sign up' handleSubmit={handleSubmit} />;
};

export default Registration;
