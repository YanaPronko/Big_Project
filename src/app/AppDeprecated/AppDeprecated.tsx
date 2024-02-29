import { Suspense, useEffect } from "react";

import { useSelector } from "react-redux";

import { getUserInited, userActions, initUserAuthData } from "@/entities/User";
import { classNames } from "@/shared/lib/classNames/classNames";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { useTheme } from "@/shared/lib/hooks/useTheme/useTheme";
import { NavBar } from "@/widgets/NavBar";
import { PageLoader } from "@/widgets/PageLoader";
import { SideBar } from "@/widgets/SideBar";

import { ErrorBoundary } from "../providers/ErrorBoundary";
import { AppRouter } from "../providers/Router";

import "@/shared/config/i18n/i18n";
import "../styles/index.scss";

export const AppDeprecated = () => {
  const { theme } = useTheme();
  const dispatch = useAppDispatch();
  const inited = useSelector(getUserInited);

  useEffect(() => {
    dispatch(initUserAuthData());
  }, [dispatch]);

  if (!inited) {
    return <PageLoader />;
  }

  return (
    <div className={classNames("app", {}, [theme])}>
      <Suspense fallback={<div>Loading...</div>}>
        <NavBar />
        <div className="content-page">
          <SideBar />
          <ErrorBoundary>{inited && <AppRouter />}</ErrorBoundary>
        </div>
      </Suspense>
    </div>
  );
};
