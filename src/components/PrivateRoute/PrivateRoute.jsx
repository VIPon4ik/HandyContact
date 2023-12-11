import React from 'react';
import { useSelector } from 'react-redux';
import { Outlet, Navigate } from 'react-router-dom';
import { selectIsLogged } from '../../redux/selectors';

const PrivateRoutes = () => {
  const isLogged = useSelector(selectIsLogged);
  console.log(isLogged);
  return isLogged ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;
