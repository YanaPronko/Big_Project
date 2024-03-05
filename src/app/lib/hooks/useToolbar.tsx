import { ReactElement } from "react";

import { AppRoutes } from "@/shared/const/AppRoutes";
import { useRouteChange } from "@/shared/lib/hooks/useRouteChange/useRouteChange";
import { ScrollToolbar } from "@/widgets/ScrollToolbar";

export function useToolbar() {
  const appRoute = useRouteChange();

  const toolbarByAppRoute: OptionalRecord<AppRoutes, ReactElement> = {
    [AppRoutes.ARTICLES]: <ScrollToolbar />,
    [AppRoutes.ARTICLE_DETAILS]: <ScrollToolbar />,
  };

  return toolbarByAppRoute[appRoute];
}
