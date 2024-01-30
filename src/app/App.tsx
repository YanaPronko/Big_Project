import { Suspense, useEffect } from "react";

import { useSelector } from "react-redux";

import { getUserInited, User, userActions } from "@/entities/User";
import { USER_LOCALSTORAGE_KEY } from "@/shared/const/localStorage";
import { classNames } from "@/shared/lib/classNames/classNames";
import { setFeatureFlags } from "@/shared/lib/featureFlags";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { useTheme } from "@/shared/lib/hooks/useTheme/useTheme";
import { NavBar } from "@/widgets/NavBar";
import { SideBar } from "@/widgets/SideBar";

import { ErrorBoundary } from "./providers/ErrorBoundary";
import { AppRouter } from "./providers/Router";
import "@/shared/config/i18n/i18n";
import "./styles/index.scss";

export const App = () => {
  const { theme } = useTheme();
  const dispatch = useAppDispatch();
  const { setAuthData, setInited } = userActions;
  const inited = useSelector(getUserInited);

  useEffect(() => {
    const user = localStorage.getItem(USER_LOCALSTORAGE_KEY);

    if (user) {
      const parcedUser = JSON.parse(user) as User;
      dispatch(setAuthData(parcedUser));
      setFeatureFlags(parcedUser.featureFlags);
    }
    dispatch(setInited(true));
  }, [dispatch, setAuthData, setInited]);

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
