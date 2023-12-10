import React from 'react';
import MainForm from 'components/MainForm/MainForm';
import { useDispatch } from 'react-redux';
import { SignUp } from 'redux/operations';

const Registration = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    const email = e.currentTarget.elements.email.value;
  }

  return <MainForm page="registration" title='Sign up' />;
};

export default Registration;
