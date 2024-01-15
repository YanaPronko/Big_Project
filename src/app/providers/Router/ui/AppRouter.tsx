import { memo, Suspense, useCallback } from 'react';

import { Route, Routes } from 'react-router-dom';

import { AppRoutesProps } from '@/shared/types/appRoutesPropsType';
import { PageLoader } from '@/widgets/PageLoader';

import { RequireAuth } from './RequireAuth';
import { routeConfig } from '../../../config/routeConfig';

export const AppRouter = memo(() => {
  const renderWithWrapper = useCallback((route: AppRoutesProps) => {
    const element = route.element as JSX.Element;
    return (
      <Route
        key={route.path}
        path={route.path}
        element={route.authOnly ? <RequireAuth roles={route.roles}>{element}</RequireAuth> : element}
      />
    );
  }, []);

  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        {Object.values(routeConfig).map(renderWithWrapper)}
      </Routes>
    </Suspense>
  );
});
