import { Suspense } from "react";
import { classNames } from "shared/lib/classNames";
import { useTheme } from "app/providers/Theme";
import { NavBar } from "widgets/NavBar";
import { SideBar } from "widgets/SideBar";
import { AppRouter } from "app/providers/Router";
import "shared/config/i18n/i18n";

import "./styles/index.scss";

export const App = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <Suspense fallback={<div>Loading...</div>}>
        <NavBar />
        <div className="content-page">
          <SideBar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
};
