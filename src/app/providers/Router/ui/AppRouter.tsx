import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from '../../../config/routeConfig';

export const AppRouter = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {Object.values(routeConfig).map(({ path, element }) => {
          return <Route key={path} path={path} element={element}/>
        })}
        </Routes>
      </Suspense>
  )
}
