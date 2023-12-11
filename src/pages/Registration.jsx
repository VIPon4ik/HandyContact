import React from 'react';
import MainForm from 'components/MainForm/MainForm';
import { useDispatch } from 'react-redux';
import { signUp } from '../redux/operations';

const Registration = () => {
  const dispatch = useDispatch();

  const handleSubmit = data => {
    const name = data.name;
    const email = data.email;
    const password = data.password;

    dispatch(signUp({ name, email, password }));
  }

  return <MainForm page="registration" title='Sign up' handleSubmit={handleSubmit} />;
};

export default Registration;
