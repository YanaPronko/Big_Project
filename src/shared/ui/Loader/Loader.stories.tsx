import { Loader } from "./Loader";
import { Meta, StoryObj } from "@storybook/react";
import ThemeDecorator from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/Theme/lib/ThemeContext";

const meta: Meta<typeof Loader> = {
  title: "shared/Loader",
  component: Loader,
};

export default meta;
type Story = StoryObj<typeof Loader>;

export const Normal: Story = {
  args: {},
};

export const Dark: Story = {
  args: {},
};

Dark.decorators = [ThemeDecorator(Theme.DARK)];