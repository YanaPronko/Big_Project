import { useEffect, useState } from "react";

import { matchPath, useLocation } from "react-router-dom";

import { AppRouteByPathPattern, AppRoutes } from "@/shared/const/AppRoutes";

export const useRouteChange = () => {
  const location = useLocation();
  const [currentRoute, setCurrentRoute] = useState<AppRoutes>(AppRoutes.MAIN);

  useEffect(() => {
    Object.entries(AppRouteByPathPattern).forEach(([pattern, route]) => {
      if (matchPath(pattern, location.pathname)) {
        setCurrentRoute(route);
      }
    });
  }, [location.pathname]);
  return currentRoute;
};
