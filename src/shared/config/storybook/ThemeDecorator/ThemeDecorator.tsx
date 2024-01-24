import { Decorator } from "@storybook/react";

// eslint-disable-next-line path-checker-pryweb/layers-import
import { ThemeProvider } from "@/app/providers/Theme";
import { Theme } from "@/shared/const/theme";

const ThemeDecorator =
  (theme: Theme): Decorator =>
  (Story) => (
    <ThemeProvider initialTheme={theme}>
      <div className={`app ${theme}`}>
        <Story />
      </div>
    </ThemeProvider>
  );

export default ThemeDecorator;

// import classNames from 'classnames';
// import { Story, StoryContext } from '@storybook/react';

// import { ThemeProvider } from 'app/providers/ThemeProvider';

// export const ThemeDecorator = (Story: Story, context: StoryContext) => {
//   const {
//     globals: { theme },
//   } = context;

//   return (
//     <ThemeProvider>
//       <div className={classNames('app', theme)}>
//         <Story />
//       </div>
//     </ThemeProvider>
//   );
// };
