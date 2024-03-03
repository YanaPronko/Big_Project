import { Meta, StoryObj } from "@storybook/react";

import StoreDecorator from "@/shared/config/storybook/StoreDecorator/StoreDecorator";

import LoginFormDeprecated from "./LoginForm";

const meta: Meta<typeof LoginFormDeprecated> = {
  title: "features/LoginFormDeprecated",
  component: LoginFormDeprecated,
};

export default meta;
type Story = StoryObj<typeof LoginFormDeprecated>;

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
