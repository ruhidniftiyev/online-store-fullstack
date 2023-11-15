import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { authRoutes, publicRoutes } from '../routes';
import Shop from '../pages/Shop';
import { useSelector } from 'react-redux';

const AppRouter = () => {
  const isAuth = useSelector((store) => store.authSlice.isAuth);
  // console.log(isAuth);
  return (
    <Routes>
      {isAuth &&
        authRoutes.map(({ path, Component }) => (
          <Route key={path} path={path} Component={Component} exact />
        ))}
      {publicRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} Component={Component} exact />
      ))}
      <Route path="*" Component={Shop} />
    </Routes>
  );
};

export default AppRouter;
