import React from 'react';
import MainForm from 'components/MainForm/MainForm';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts, signUp } from '../redux/operations';
import { selectAuthIsLoading } from '../redux/selectors';
import Loader from 'components/Loader/Loader';
import * as yup from 'yup';

const schema = yup.object({
  name: yup.string().min(2).max(36).required(),
  email: yup.string().email().max(36).required(),
  password: yup
    .string()
    .min(8)
    .max(36)
    .required()
    .test(
      'lowercase',
      'Password must contain at least one lowercase letter',
      value => {
        return /[a-zа-я]/.test(value);
      }
    )
    .test(
      'uppercase',
      'Password must contain at least one uppercase letter',
      value => {
        return /[A-ZА-Я]/.test(value);
      }
    )
    .test('digit', 'Password must contain at least one digit', value => {
      return /\d/.test(value);
    }),
});

const Registration = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectAuthIsLoading);

  const handleSubmit = async data => {
    const name = data.name;
    const email = data.email;
    const password = data.password;

    await dispatch(signUp({ name, email, password }));
    await dispatch(getContacts());
  };

  return (
    <>
      {isLoading && <Loader />}
      <MainForm
        title="Sign up"
        handleSubmit={handleSubmit}
        validationSchema={schema}
        redirectUrl={'login'}
        redirectMessage={'Already signed up? Sign in'}
      />
    </>
  );
};

export default Registration;
