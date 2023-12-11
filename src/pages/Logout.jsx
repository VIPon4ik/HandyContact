import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { logOut } from '../redux/operations';
import { token } from '../redux/operations';

const Logout = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    token.removeToken();
    dispatch(logOut());
  }, [dispatch]);
  return <></>;
};

export default Logout;
