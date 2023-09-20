import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { AppRoutes, RoutePaths } from 'app/config/routeConfig';
import { getUserAuthData } from 'entities/User';

export const RequireAuth = ({ children }: { children: React.JSX.Element }) => {
  const auth = useSelector(getUserAuthData);
  const location = useLocation();

  if (!auth) {
    return (
      <Navigate
        to={RoutePaths[AppRoutes.MAIN]}
        state={{ from: location }}
        replace
      />
    );
  }

  return children;
};
