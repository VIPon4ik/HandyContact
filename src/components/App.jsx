import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { selectToken } from '../redux/selectors';
import { signInByToken, token as authToken, getContacts } from '../redux/operations';
import Layout from './Layout/Layout';
import Registration from 'pages/Registration';
import Home from 'pages/Home';
import Login from 'pages/Login';
import Logout from 'pages/Logout';
import Contacts from 'pages/Contacts';
import AddContact from 'pages/AddContact';
import EditContact from 'pages/EditContact';

export const App = () => {
  const dispatch = useDispatch();
  const token = useSelector(selectToken);

  useEffect(() => {
    if (token) {
      authToken.setToken(token);
      dispatch(signInByToken(token));
      dispatch(getContacts());
    }
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="registration" element={<Registration />} />
        <Route path="logout" element={<Logout />} />
        <Route path="contacts" element={<Contacts />} />
        <Route path="contacts/add-contact" element={<AddContact />} />
        <Route path="contacts/edit-contact/:id" element={<EditContact />} />
        <Route path="*" element={<p>Not found</p>} />
      </Route>
    </Routes>
  );
};
