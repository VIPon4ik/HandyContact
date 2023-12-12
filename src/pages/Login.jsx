import React from 'react';
import MainForm from 'components/MainForm/MainForm';
import { useDispatch, useSelector } from 'react-redux';
import { logIn } from '../redux/operations';
import { selectAuthIsLoading } from '../redux/selectors';
import Loader from 'components/Loader/Loader';

const Login = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectAuthIsLoading);

  const handleSubmit = data => {
    const email = data.email;
    const password = data.password;

    dispatch(logIn({ email, password }));
  };

  return (
    <>
      {isLoading && <Loader />}
      <MainForm page="login" title="Sign in" handleSubmit={handleSubmit} />
    </>
  );
};

export default Login;
