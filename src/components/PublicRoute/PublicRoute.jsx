import React from 'react';
import { useSelector } from 'react-redux';
import { Outlet, Navigate } from 'react-router-dom';
import { selectIsLogged } from '../../redux/selectors';
import { toast } from 'react-toastify';

const PublicRoutes = () => {
  const isLogged = useSelector(selectIsLogged);
  return isLogged ? (
    <>
      {toast.error('You already logged in ')}
      <Navigate to="/" />
    </>
  ) : (
    <Outlet />
  );
};

export default PublicRoutes;
