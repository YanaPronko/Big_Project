import { Meta, StoryObj } from "@storybook/react";

import StoreDecorator from "@/shared/config/storybook/StoreDecorator/StoreDecorator";
import ThemeDecorator from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "@/shared/const/theme";

import { SideBar } from "./SideBar";

const meta: Meta<typeof SideBar> = {
  title: "widgets/SideBar",
  component: SideBar,
};

export default meta;
type Story = StoryObj<typeof SideBar>;

export const Normal: Story = {
  args: {},
};
Normal.decorators = [StoreDecorator({ user: { authData: {} } })];

export const Dark: Story = {
  args: {},
};

Dark.decorators = [
  StoreDecorator({ user: { authData: {} } }),
  ThemeDecorator(Theme.DARK),
];
