import { Suspense } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/providers/Theme';
import { NavBar } from 'widgets/NavBar';
import { SideBar } from 'widgets/SideBar';
import { AppRouter } from 'app/providers/Router';
import { ErrorBoundary } from 'app/providers/ErrorBoundary';
import 'shared/config/i18n/i18n';
import './styles/index.scss';

export const App = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <Suspense fallback={<div>Loading...</div>}>
        <NavBar />
        <div className="content-page">
          <SideBar />
          <ErrorBoundary>
            <AppRouter />
          </ErrorBoundary>
        </div>
      </Suspense>
    </div>
  );
};
