import { Meta, StoryObj } from "@storybook/react";

import StoreDecorator from "@/shared/config/storybook/StoreDecorator/StoreDecorator";
import ThemeDecorator from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "@/shared/const/theme";

import { SideBarDeprecated } from "./SideBarDeprecated";

const meta: Meta<typeof SideBarDeprecated> = {
  title: "widgets/SideBar",
  component: SideBarDeprecated,
};

export default meta;
type Story = StoryObj<typeof SideBarDeprecated>;

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
