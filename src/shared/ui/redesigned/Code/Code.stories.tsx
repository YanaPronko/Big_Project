import { Meta, StoryObj } from "@storybook/react";

import ThemeDecorator from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "@/shared/const/theme";

import { CodeRedesigned } from "./Code";

const meta: Meta<typeof CodeRedesigned> = {
  title: "shared/CodeRedesigned",
  component: CodeRedesigned,
};

export default meta;
type Story = StoryObj<typeof CodeRedesigned>;

export const Primary: Story = {
  args: {
    text: `import { Meta, StoryObj } from '@storybook/react';
            import ThemeDecorator from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
            import { Theme } from 'app/providers/Theme';
            import { Code } from './Code';

            const meta: Meta<typeof Code> = {
              title: 'shared/Code',
              component: Code,
            };

            export default meta;
            type Story = StoryObj<typeof Code>;

            export const Primary: Story = {
              args: {
                text:
              },
            };

            export const PrimaryDark: Story = {
              args: {},
            };

            PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];
          `,
  },
};

export const PrimaryDark: Story = {
  args: {
    text: `import { Meta, StoryObj } from '@storybook/react';
            import ThemeDecorator from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
            import { Theme } from 'app/providers/Theme';
            import { Code } from './Code';

            const meta: Meta<typeof Code> = {
              title: 'shared/Code',
              component: Code,
            };

            export default meta;
            type Story = StoryObj<typeof Code>;

            export const Primary: Story = {
              args: {
                text:
              },
            };

            export const PrimaryDark: Story = {
              args: {},
            };

            PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];
          `,
  },
};

PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];
