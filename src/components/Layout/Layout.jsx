import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Header from 'components/Header/Header';
import { Container } from './Layout.styled';
import Loader from 'components/Loader/Loader';

const Layout = () => {
  return (
    <>
      <Header />
      <Container>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </Container>
    </>
  );
};

export default Layout;
