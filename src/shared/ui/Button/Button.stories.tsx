import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  title: "shared/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  // args: { children: "Test" },
  argTypes: {
    // theme: BtnTheme,
  },
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

