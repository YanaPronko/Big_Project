import React, { useMemo } from "react";

import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

import { UserRole, getUserAuthData, getUserRoles } from "@/entities/User";
import { getRouteForbidden, getRouteMain } from "@/shared/const/AppRoutes";

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
    return roles?.some((requiredRole) =>
      currentUserRoles?.includes(requiredRole),
    );
  }, [currentUserRoles, roles]);

  if (!hasRequiredRole) {
    return (
      <Navigate to={getRouteForbidden()} state={{ from: location }} replace />
    );
  }

  if (!auth) {
    return <Navigate to={getRouteMain()} state={{ from: location }} replace />;
  }

  return children;
};
