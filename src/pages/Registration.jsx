import React from 'react';
import MainForm from 'components/MainForm/MainForm';
import { useDispatch, useSelector } from 'react-redux';
import { signUp } from '../redux/operations';
import { selectAuthIsLoading } from '../redux/selectors';
import Loader from 'components/Loader/Loader';

const Registration = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectAuthIsLoading);

  const handleSubmit = data => {
    const name = data.name;
    const email = data.email;
    const password = data.password;

    dispatch(signUp({ name, email, password }));
  };

  return (
    <>
      {isLoading && <Loader />}
      <MainForm
        page="registration"
        title="Sign up"
        handleSubmit={handleSubmit}
      />
    </>
  );
};

export default Registration;
