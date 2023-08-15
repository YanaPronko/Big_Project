import { SideBar } from "./SideBar";
import { Meta, StoryObj } from "@storybook/react";
import ThemeDecorator from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/Theme/lib/ThemeContext";

const meta: Meta<typeof SideBar> = {
  title: "widgets/SideBar",
  component: SideBar,
};

export default meta;
type Story = StoryObj<typeof SideBar>;

export const Normal: Story = {
  args: {},
};

export const Dark: Story = {
  args: {},
};

Dark.decorators = [ThemeDecorator(Theme.DARK)]
