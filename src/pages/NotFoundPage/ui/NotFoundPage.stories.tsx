import { Meta, StoryObj } from "@storybook/react";

import { RedesignedThemeDecorator } from "@/shared/config/storybook/RedesignedThemeDecorator/RedesignedThemeDecorator";
import StoreDecorator from "@/shared/config/storybook/StoreDecorator/StoreDecorator";
import ThemeDecorator from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "@/shared/const/theme";

import NotFoundPage from "./NotFoundPage";

const meta: Meta<typeof NotFoundPage> = {
  title: "pages/NotFoundPage",
  component: NotFoundPage,
  decorators: [StoreDecorator({})],
};

export default meta;
type Story = StoryObj<typeof NotFoundPage>;

export const Normal: Story = {
  args: {},
};

export const NormalRedesigned: Story = {
  args: {},
};

NormalRedesigned.decorators = [RedesignedThemeDecorator()];

export const Dark: Story = {
  args: {},
};

Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const DarkRedesigned: Story = {
  args: {},
};

DarkRedesigned.decorators = [
  RedesignedThemeDecorator(Theme.DARK),
];
