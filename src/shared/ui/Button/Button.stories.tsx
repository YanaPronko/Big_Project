import { Button } from "./Button";
import { Meta, StoryObj } from "@storybook/react";
import ThemeDecorator from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/Theme/lib/ThemeContext";

const meta: Meta<typeof Button> = {
  title: "shared/Button",
  component: Button
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: "Text"
  },
};

export const Clear: Story = {
  args: {
    children: "Text",
    theme: "clear"
  },
};
export const Outline: Story = {
  args: {
    children: "Text",
    theme: "outline"
  },
};
export const OutlineDark: Story = {
  args: {
    children: "Text",
    theme: "outline",
  },
  decorators: [
    ThemeDecorator(Theme.DARK),
    // (Story) => (
    //   <div className={`app ${Theme.DARK}`}>
    //     <Story />
    //   </div>
    // ),
  ],
};
// OutlineDark.decorators = [ThemeDecorator(Theme.DARK)]