import { ReactNode } from "react";

import { ReducersMapObject } from "@reduxjs/toolkit";
import { render } from "@testing-library/react";
import { I18nextProvider } from "react-i18next";
import { MemoryRouter } from "react-router-dom";

import { StateSchema, StoreProvider } from "@/app/providers/StoreProvider";
// eslint-disable-next-line path-checker-pryweb/layers-import
import { ThemeProvider } from "@/app/providers/Theme";
import i18nForTest from "@/shared/config/i18n/i18nForTest";
import { Theme } from "@/shared/const/theme";
// eslint-disable-next-line path-checker-pryweb/layers-import
import "@/app/styles/index.scss";

export interface ComponentRenderProps {
  route?: string;
  initialState?: DeepPartial<StateSchema>;
  asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>;
  theme?: Theme;
}

interface TestProviderProps {
  children: ReactNode;
  options?: ComponentRenderProps;
}

export const TestProvider = (props: TestProviderProps) => {
  const { children, options = {} } = props;
  const {
    route = "/",
    initialState,
    asyncReducers,
    theme = Theme.DARK,
  } = options;
  return (
    <MemoryRouter initialEntries={[route]}>
      <StoreProvider initialState={initialState} asyncReducers={asyncReducers}>
        <I18nextProvider i18n={i18nForTest}>
          <ThemeProvider initialTheme={theme}>
            <div className={`app ${theme}`}>{children}</div>
          </ThemeProvider>
        </I18nextProvider>
      </StoreProvider>
    </MemoryRouter>
  );
};

export const componentRender = (
  componet: ReactNode,
  options: ComponentRenderProps = {},
) => render(<TestProvider options={options}>{componet}</TestProvider>);
