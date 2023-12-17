import React from 'react';
import { useSelector } from 'react-redux';
import { Outlet, Navigate } from 'react-router-dom';
import { selectIsLogged } from '../../redux/selectors';
import { toast } from 'react-toastify';

const PrivateRoutes = () => {
  const isLogged = useSelector(selectIsLogged);
  return isLogged ? (
    <Outlet />
  ) : (
    <>
      {toast.error('You need to sign in')}
      <Navigate to="/login" />
    </>
  );
};

export default PrivateRoutes;
