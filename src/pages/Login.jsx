import React from 'react';
import MainForm from 'components/MainForm/MainForm';
import { useDispatch } from 'react-redux';
import { logIn } from '../redux/operations';

const Login = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    const email = e.currentTarget.elements.email.value;
    const password = e.currentTarget.elements.password.value;

    dispatch(logIn({ email, password }));
  };

  return (
    <>
      <MainForm page="login" title="Sign in" handleSubmit={handleSubmit} />
    </>
  );
};

export default Login;
