import React, { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import { authRoutes, publicRoutes } from '../routes';
import { Context } from '../index';
import { observer } from 'mobx-react-lite';

const AppRouter = observer(() => {
  const { user } = useContext(Context);

  console.log(user);

  return (
    <Routes>
      {user.isAuth &&
        authRoutes.map(({ path, Component }) => (
          <Route key={path} path={path} element={Component} exact />
        ))}
      {publicRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} element={Component} exact />
      ))}
    </Routes>
  );
});

export default AppRouter;

