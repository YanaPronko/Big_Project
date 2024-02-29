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

export const App = () => {
  const dispatch = useAppDispatch();
  const inited = useSelector(getUserInited);

  useEffect(() => {
    dispatch(initUserAuthData());
  }, [dispatch]);

  if (!inited) {
    return <PageLoader />;
  }

  return (
    <ToggleFeatures
      feature="isAppRedesigned"
      on={<AppRedesigned />}
      off={<AppDeprecated />}
    />
  );
};
