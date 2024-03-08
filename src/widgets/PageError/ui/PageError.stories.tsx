import { Meta, StoryObj } from "@storybook/react";

import { RedesignedThemeDecorator } from "@/shared/config/storybook/RedesignedThemeDecorator/RedesignedThemeDecorator";
import ThemeDecorator from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "@/shared/const/theme";

import { PageError } from "./PageError";

const meta: Meta<typeof PageError> = {
  title: "widgets/PageError",
  component: PageError,
};

export default meta;
type Story = StoryObj<typeof PageError>;

export const Normal: Story = {
  args: {},
  parameters: {
    loki: { skip: true },
  },
};

export const NormalRedesigned: Story = {
  args: {},
  parameters: {
    loki: { skip: true },
  },
};

NormalRedesigned.decorators = [RedesignedThemeDecorator()];

export const Dark: Story = {
  args: {},
  parameters: {
    loki: { skip: true },
  },
};

Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const DarkRedesigned: Story = {
  args: {},
  parameters: {
    loki: { skip: true },
  },
};

DarkRedesigned.decorators = [
  RedesignedThemeDecorator(Theme.DARK),
];
