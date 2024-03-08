import { Meta, StoryObj } from "@storybook/react";

import { RedesignedThemeDecorator } from "@/shared/config/storybook/RedesignedThemeDecorator/RedesignedThemeDecorator";
import StoreDecorator from "@/shared/config/storybook/StoreDecorator/StoreDecorator";
import { Theme } from "@/shared/const/theme";

import { SideBarRedesigned } from "./SideBarRedesigned";

const meta: Meta<typeof SideBarRedesigned> = {
  title: "widgets/SideBarRedesigned",
  component: SideBarRedesigned,
};

export default meta;
type Story = StoryObj<typeof SideBarRedesigned>;

export const Normal: Story = {
  args: {},
};
Normal.decorators = [
  StoreDecorator({ user: { authData: {} } }),
  RedesignedThemeDecorator(),
];

export const Dark: Story = {
  args: {},
};

Dark.decorators = [
  StoreDecorator({ user: { authData: {} } }),
  RedesignedThemeDecorator(Theme.DARK),
];
