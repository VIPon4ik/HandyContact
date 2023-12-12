import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { logOut } from '../redux/operations';
import { token as authToken } from '../redux/operations';

const Logout = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(logOut());
    authToken.removeToken();
  }, [dispatch]);
  return <></>;
};

export default Logout;
