import { Meta, StoryObj } from "@storybook/react";

import { RedesignedThemeDecorator } from "@/shared/config/storybook/RedesignedThemeDecorator/RedesignedThemeDecorator";
import StoreDecorator from "@/shared/config/storybook/StoreDecorator/StoreDecorator";
import ThemeDecorator from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "@/shared/const/theme";

import AdminPanelPage from "./AdminPanelPage";

const meta: Meta<typeof AdminPanelPage> = {
  title: "pages/AdminPanelPage",
  component: AdminPanelPage,
  decorators: [
    StoreDecorator({
      user: {
        authData: {
          avatar: "https://avatars.githubusercontent.com/u/11681863311111111",
          id: "1",
          username: "LEV",
          roles: ["ADMIN"],
        },
      },
    }),
  ],
};

export default meta;
type Story = StoryObj<typeof AdminPanelPage>;

export const Primary: Story = {
  args: {},
};

export const PrimaryRedeisgned: Story = {
  args: {},
};

PrimaryRedeisgned.decorators = [RedesignedThemeDecorator()];

export const PrimaryDark: Story = {
  args: {},
};

PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const PrimaryDarkRedesigned: Story = {
  args: {},
};

PrimaryDarkRedesigned.decorators = [
  RedesignedThemeDecorator(Theme.DARK),
];
