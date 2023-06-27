import "shared/config/i18n/i18n";
import { classNames } from "shared/lib/classNames";
import { useTheme } from "app/providers/Theme";
import { AppRouter } from "app/providers/router";
import { NavBar } from "widgets/NavBar";
import { SideBar } from "widgets/SideBar";

import "./styles/index.scss";
import { Suspense } from "react";

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
