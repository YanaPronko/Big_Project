import { Decorator } from "@storybook/react";

// eslint-disable-next-line path-checker-pryweb/layers-import
import { ThemeProvider } from "@/app/providers/Theme";
import { Theme } from "@/shared/const/theme";
import { setFeatureFlags, getAllFeatureFlags } from "@/shared/lib/featureFlags";

export const RedesignedThemeDecorator =
  (theme: Theme = Theme.LIGHT): Decorator =>
  (Story) => {
    setFeatureFlags({ ...getAllFeatureFlags(), isAppRedesigned: true });
    return (
      <ThemeProvider initialTheme={theme}>
        <div className={`app_redesigned ${theme}`}>
          <Story />
        </div>
      </ThemeProvider>
    );
  };
