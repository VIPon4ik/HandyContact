import React from 'react';
import MainForm from 'components/MainForm/MainForm';
import { useDispatch, useSelector } from 'react-redux';
import { logIn } from '../redux/operations';
import { selectAuthIsLoading } from '../redux/selectors';
import Loader from 'components/Loader/Loader';
import * as yup from 'yup';

const schema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().required(),
});

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
      <MainForm
        page="login"
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
