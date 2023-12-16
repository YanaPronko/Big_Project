import { memo, Suspense, useCallback } from 'react';

import { Route, Routes } from 'react-router-dom';

import { PageLoader } from '@/widgets/PageLoader';

import { RequireAuth } from './RequireAuth';
import { AppRoutesProps } from '../../../../shared/types/appRoutesPropsType';

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

  // <Suspense fallback={<PageLoader />}>
  //   <Routes>
  //     {Object.values(routeConfig).map(({ path, element, authOnly }) => (
  //       <Route
  //         key={path}
  //         path={path}
  //         element={(
  //           <div className="page-wrapper">
  //             {authOnly ? <RequireAuth>{element}</RequireAuth> : {element}}
  //           </div>
  //         )}
  //       />
  //     ))}
  //   </Routes>
  // </Suspense>
});
