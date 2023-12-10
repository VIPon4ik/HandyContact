import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { selectToken } from '../redux/selectors';
import { signInByToken, token as authToken } from '../redux/operations';
import Layout from './Layout/Layout';
import Registration from 'pages/Registration';
import Home from 'pages/Home';
import Login from 'pages/Login/Login';
import Contacts from 'pages/Contacts';
import AddContact from 'pages/AddContact';

export const App = () => {
  const dispatch = useDispatch();
  const token = useSelector(selectToken);

  useEffect(() => {
    if (token) {
      authToken.setToken(token);
      dispatch(signInByToken(token));
    }
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="registration" element={<Registration />} />
        <Route path="log-out" element={<p>Log Out</p>} />
        <Route path="contacts" element={<Contacts />} />
        <Route path="add-contact" element={<AddContact />} />
        <Route path="edit-contact/:id" element={<p>Edit contact</p>} />
        <Route path="*" element={<p>Not found</p>} />
      </Route>
    </Routes>
  );
};
