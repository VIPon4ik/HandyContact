import React from 'react';
import MainForm from 'components/MainForm/MainForm';
import { useDispatch } from 'react-redux';
import { logIn } from '../redux/operations';

const Login = () => {
  const dispatch = useDispatch();

  const handleSubmit = data => {
    const email = data.email;
    const password = data.password;

    dispatch(logIn({ email, password }));
  };

  return (
    <>
      <MainForm page="login" title="Sign in" handleSubmit={handleSubmit} />
    </>
  );
};

export default Login;
