import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, lazy } from 'react';
import { selectToken } from '../redux/selectors';
import {
  signInByToken,
  token as authToken,
  getContacts,
} from '../redux/operations';
import Layout from './Layout/Layout';
import PrivateRoutes from './PrivateRoute/PrivateRoute';
import PublicRoutes from './PublicRoute/PublicRoute';
const Registration = lazy(() => import('pages/Registration'));
const Home = lazy(() => import('pages/Home'));
const Login = lazy(() => import('pages/Login'));
const Logout = lazy(() => import('pages/Logout'));
const Contacts = lazy(() => import('pages/Contacts'));
const AddContact = lazy(() => import('pages/AddContact'));
const EditContact = lazy(() => import('pages/EditContact'));

export const App = () => {
  const dispatch = useDispatch();
  const token = useSelector(selectToken);

  useEffect(() => {
    if (token) {
      authToken.setToken(token);
      dispatch(signInByToken(token));
      dispatch(getContacts());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="*" element={<p>Not found</p>} />
        <Route element={<PrivateRoutes />}>
          <Route path="logout" element={<Logout />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="contacts/add-contact" element={<AddContact />} />
          <Route path="contacts/edit-contact/:id" element={<EditContact />} />
        </Route>
          <Route path="login" element={<Login />} />
          <Route path="registration" element={<Registration />} />
        <Route element={<PublicRoutes restricted />}>
        </Route>
      </Route>
    </Routes>
  );
};
