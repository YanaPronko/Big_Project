import React, { useMemo } from 'react';

import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

import { UserRole, getUserAuthData, getUserRoles } from '@/entities/User';

import { AppRoutes, RoutePaths } from '../../../../shared/const/AppRoutes';

interface RequireAuthProps {
  children: React.JSX.Element;
  roles?: UserRole[];
}

export const RequireAuth = ({ children, roles }: RequireAuthProps) => {
  const auth = useSelector(getUserAuthData);
  const location = useLocation();

  const currentUserRoles = useSelector(getUserRoles);

  const hasRequiredRole = useMemo(() => {
    if (!roles) {
      return true;
    }
    return roles?.some((requiredRole) => currentUserRoles?.includes(requiredRole));
  }, [currentUserRoles, roles]);

  if (!hasRequiredRole) {
    return (
      <Navigate
        to={RoutePaths[AppRoutes.FORBIDDEN_PAGE]}
        state={{ from: location }}
        replace
      />
    );
  }

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
