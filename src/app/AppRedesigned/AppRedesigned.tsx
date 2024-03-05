import { Suspense } from "react";

import { AppLoaderLayout, MainLayout } from "@/shared/layouts";
import { classNames } from "@/shared/lib/classNames/classNames";
import { useTheme } from "@/shared/lib/hooks/useTheme/useTheme";
import { NavBar } from "@/widgets/NavBar";
import { SideBar } from "@/widgets/SideBar";

import { useToolbar } from "../lib/hooks/useToolbar";
import { AppRouter } from "../providers/Router";

import "@/shared/config/i18n/i18n";
import "../styles/index.scss";

export const AppRedesigned = () => {
  const { theme } = useTheme();
  const toolbar = useToolbar();

  return (
    <div className={classNames("app_redesigned", {}, [theme])}>
      <Suspense fallback={<AppLoaderLayout />}>
        <MainLayout
          content={<AppRouter />}
          header={<NavBar />}
          sidebar={<SideBar />}
          toolbar={toolbar}
        />
      </Suspense>
    </div>
  );
};
