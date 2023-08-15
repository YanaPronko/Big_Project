import { PageError } from "./PageError";
import { Meta, StoryObj } from "@storybook/react";
import ThemeDecorator from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/Theme/lib/ThemeContext";

const meta: Meta<typeof PageError> = {
  title: "widgets/PageError",
  component: PageError,
};

export default meta;
type Story = StoryObj<typeof PageError>;

export const Normal: Story = {
  args: {},
};

export const Dark: Story = {
  args: {},
};

Dark.decorators = [ThemeDecorator(Theme.DARK)];
