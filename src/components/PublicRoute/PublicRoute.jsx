import React from 'react';
import { useSelector } from 'react-redux';
import { Outlet, Navigate } from 'react-router-dom';
import { selectIsLogged } from '../../redux/selectors';

const PublicRoutes = () => {
  const isLogged = useSelector(selectIsLogged);
  return isLogged ? <Navigate to="/" /> : <Outlet />;
};

export default PublicRoutes;
