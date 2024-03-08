import { memo, useEffect } from "react";

import { useSelector } from "react-redux";

import { getUserInited, initUserAuthData } from "@/entities/User";
import { LOCAL_STORAGE_LAST_DESIGN_KEY } from "@/shared/const/localStorage";
import { AppLoaderLayout } from "@/shared/layouts";
import { classNames } from "@/shared/lib/classNames/classNames";
import { ToggleFeatures } from "@/shared/lib/featureFlags";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { useTheme } from "@/shared/lib/hooks/useTheme/useTheme";
import { PageLoader } from "@/widgets/PageLoader";

import "@/shared/config/i18n/i18n";
import "./styles/index.scss";
import { AppDeprecated } from "./AppDeprecated/AppDeprecated";
import { AppRedesigned } from "./AppRedesigned/AppRedesigned";
import { WithTheme } from "./providers/Theme/ui/WithTheme";

const App = memo(() => {
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
    };
    if (!inited) {
      initFunction();
    }
  }, [dispatch, inited]);

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
});

export default WithTheme(App);
