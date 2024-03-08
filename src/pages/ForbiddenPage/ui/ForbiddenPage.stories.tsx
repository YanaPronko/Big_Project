import { Meta, StoryObj } from "@storybook/react";

import { RedesignedThemeDecorator } from "@/shared/config/storybook/RedesignedThemeDecorator/RedesignedThemeDecorator";
import StoreDecorator from "@/shared/config/storybook/StoreDecorator/StoreDecorator";
import ThemeDecorator from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "@/shared/const/theme";

import { ForbiddenPage } from "./ForbiddenPage";

const meta: Meta<typeof ForbiddenPage> = {
  title: "pages/ForbiddenPage",
  component: ForbiddenPage,
  decorators: [
    StoreDecorator({
      user: {
        authData: {
          avatar: "https://avatars.githubusercontent.com/u/11681863311111111",
          id: "1",
          username: "LEV",
          roles: ["USER"],
        },
      },
    }),
  ],
};

export default meta;
type Story = StoryObj<typeof ForbiddenPage>;

export const Primary: Story = {
  args: {},
};

export const PrimaryRedesigned: Story = {
  args: {},
};

PrimaryRedesigned.decorators = [RedesignedThemeDecorator()];

export const PrimaryDark: Story = {
  args: {},
};

PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const PrimaryDarkRedesigned: Story = {
  args: {},
};

PrimaryDarkRedesigned.decorators = [RedesignedThemeDecorator(Theme.DARK)];
