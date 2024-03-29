import { Meta, StoryObj } from "@storybook/react";

import { RedesignedThemeDecorator } from "@/shared/config/storybook/RedesignedThemeDecorator/RedesignedThemeDecorator";
import StoreDecorator from "@/shared/config/storybook/StoreDecorator/StoreDecorator";
import { Theme } from "@/shared/const/theme";

import { NavbarRedesigned } from "./NavBarRedesigned";

const meta: Meta<typeof NavbarRedesigned> = {
  title: "widgets/NavbarRedesigned",
  component: NavbarRedesigned,
  // decorators: [RedesignedThemeDecorator()],
};

export default meta;
type Story = StoryObj<typeof NavbarRedesigned>;

export const Normal: Story = {
  args: {},
};

Normal.decorators = [StoreDecorator({}), RedesignedThemeDecorator()];

export const Dark: Story = {
  args: {},
};

Dark.decorators = [StoreDecorator({}), RedesignedThemeDecorator(Theme.DARK)];

export const NormalAuth: Story = {
  args: {},
};

NormalAuth.decorators = [
  StoreDecorator({
    user: {
      authData: {
        avatar: "https://avatars.githubusercontent.com/u/11681863311111111",
        id: "1",
        username: "LEV",
      },
    },
  }),
  RedesignedThemeDecorator(),
];

export const DarkAuth: Story = {
  args: {},
};

DarkAuth.decorators = [
  RedesignedThemeDecorator(Theme.DARK),
  StoreDecorator({
    user: {
      authData: {
        avatar: "https://avatars.githubusercontent.com/u/11681863311111111",
        id: "1",
        username: "LEV",
      },
    },
  }),
];

export const AdminAuth: Story = {
  args: {},
};

AdminAuth.decorators = [
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
  RedesignedThemeDecorator(),
];
