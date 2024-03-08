import { Meta, StoryObj } from "@storybook/react";

import { RedesignedThemeDecorator } from "@/shared/config/storybook/RedesignedThemeDecorator/RedesignedThemeDecorator";
import StoreDecorator from "@/shared/config/storybook/StoreDecorator/StoreDecorator";

import LoginFormRedesigned from "./LoginForm";

const meta: Meta<typeof LoginFormRedesigned> = {
  title: "features/LoginFormRedesigned",
  component: LoginFormRedesigned,
  decorators: [RedesignedThemeDecorator()],
};

export default meta;
type Story = StoryObj<typeof LoginFormRedesigned>;

export const Normal: Story = {
  args: {},
};

Normal.decorators = [StoreDecorator({ loginForm: { isLoading: false } })];

export const WithError: Story = {
  args: {},
};

WithError.decorators = [
  StoreDecorator({
    loginForm: {
      error: "Invalid password or login",
      isLoading: false,
    },
  }),
];

export const Loading: Story = {
  args: {},
};

Loading.decorators = [StoreDecorator({ loginForm: { isLoading: true } })];
