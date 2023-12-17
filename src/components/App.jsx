import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState, lazy } from 'react';
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
const Home = lazy(() => import('pages/Home/Home'));
const Login = lazy(() => import('pages/Login'));
const Logout = lazy(() => import('pages/Logout'));
const Contacts = lazy(() => import('pages/Contacts/Contacts'));
const PageNotFound = lazy(() => import('pages/PageNotFound/PageNotFound'));

export const App = () => {
  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  const [isLoading, setIsLoading] = useState(true);

  const fetchUserData = async () => {
    if (token) {
        authToken.setToken(token);
        await dispatch(signInByToken(token));
        await dispatch(getContacts());
    }

    setIsLoading(false);
  }

  useEffect(() => {
    fetchUserData();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {!isLoading && (
          <>
            <Route index element={<Home />} />
            <Route path="*" element={<PageNotFound />} />
            <Route element={<PrivateRoutes />}>
              <Route path="logout" element={<Logout />} />
              <Route path="contacts" element={<Contacts />} />
            </Route>
            <Route element={<PublicRoutes />}>
              <Route path="login" element={<Login />} />
              <Route path="registration" element={<Registration />} />
            </Route>
          </>
        )}
      </Route>
    </Routes>
  );
};
