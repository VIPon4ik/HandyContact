import React from 'react';
import MainForm from 'components/MainForm/MainForm';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts, logIn } from '../redux/operations';
import { selectAuthIsLoading } from '../redux/selectors';
import Loader from 'components/Loader/Loader';
import * as yup from 'yup';

const schema = yup.object({
  email: yup.string().email().max(36).required(),
  password: yup.string().min(8).max(36).required(),
});

const Login = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectAuthIsLoading);

  const handleSubmit = async data => {
    const email = data.email;
    const password = data.password;

    await dispatch(logIn({ email, password }));
    await dispatch(getContacts());
  };

  return (
    <>
      {isLoading && <Loader />}
      <MainForm
        title="Sign in"
        handleSubmit={handleSubmit}
        validationSchema={schema}
        redirectUrl="registration"
        redirectMessage="Don't have an account? Sign up"
      />
    </>
  );
};

export default Login;
