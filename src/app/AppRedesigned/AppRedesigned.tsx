import { Suspense, useEffect } from "react";

import { useSelector } from "react-redux";

import { getUserInited, userActions, initUserAuthData } from "@/entities/User";
import { AppLoaderLayout, MainLayout } from "@/shared/layouts";
import { classNames } from "@/shared/lib/classNames/classNames";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { useTheme } from "@/shared/lib/hooks/useTheme/useTheme";
import { NavBar } from "@/widgets/NavBar";
import { PageLoader } from "@/widgets/PageLoader";
import { SideBar } from "@/widgets/SideBar";

import { AppRouter } from "../providers/Router";

import "@/shared/config/i18n/i18n";
import "../styles/index.scss";

export const AppRedesigned = () => {
  const { theme } = useTheme();
  return (
    <div className={classNames("app_redesigned", {}, [theme])}>
      <Suspense fallback={<AppLoaderLayout/>}>
        <MainLayout
          content={<AppRouter />}
          header={<NavBar />}
          sidebar={<SideBar />}
        />
      </Suspense>
    </div>
  );
};
