import { useEffect } from "react";

import { useSelector } from "react-redux";

import { getUserInited, userActions, initUserAuthData } from "@/entities/User";
import { ToggleFeatures } from "@/shared/lib/featureFlags";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { PageLoader } from "@/widgets/PageLoader";

import "@/shared/config/i18n/i18n";
import "./styles/index.scss";
import { AppDeprecated } from "./AppDeprecated/AppDeprecated";
import { AppRedesigned } from "./AppRedesigned/AppRedesigned";
import { classNames } from "@/shared/lib/classNames/classNames";
import { AppLoaderLayout } from "@/shared/layouts";
import { useTheme } from "@/shared/lib/hooks/useTheme/useTheme";
import { LOCAL_STORAGE_LAST_DESIGN_KEY } from "@/shared/const/localStorage";

export const App = () => {
  const dispatch = useAppDispatch();
  const inited = useSelector(getUserInited);
  const { theme } = useTheme();

  useEffect(() => {
    const initFunction = async () => {
      const result = await dispatch(initUserAuthData()).unwrap();
      localStorage.setItem(
        LOCAL_STORAGE_LAST_DESIGN_KEY,
        result.featureFlags?.isAppRedesigned ? "new" : "old",
      );
    }
    if (!inited) {
      initFunction();
    }
  }, [dispatch]);

  if (!inited) {
    return (
      <ToggleFeatures
        feature="isAppRedesigned"
        on={
          <div id="app" className={classNames("app_redesigned", {}, [theme])}>
            <AppLoaderLayout />
          </div>
        }
        off={<PageLoader />}
      />
    );
  }

  return (
    <ToggleFeatures
      feature="isAppRedesigned"
      on={<AppRedesigned />}
      off={<AppDeprecated />}
    />
  );
};
