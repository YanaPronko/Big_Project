/* eslint-disable arrow-body-style */
import { useJsonSettings } from "@/entities/User";

import ThemeProvider from "./ThemeProvider";

export const WithTheme = (Component: React.ComponentType) => {
  return () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { theme: defaultTheme } = useJsonSettings();
    return (
      <ThemeProvider initialTheme={defaultTheme}>
        <Component />
      </ThemeProvider>
    );
  };
};
