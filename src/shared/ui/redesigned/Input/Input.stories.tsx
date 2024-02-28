import { Meta, StoryObj } from "@storybook/react";

import { InputRedesigned } from "./Input";

const meta: Meta<typeof InputRedesigned> = {
  title: "shared/Input",
  component: InputRedesigned,
};

export default meta;
type Story = StoryObj<typeof InputRedesigned>;

export const Primary: Story = {
  args: {
    type: "text",
    autoFocus: true,
    label: "Введите что-то",
    value: "SSSS",
    name: "input",
  },
};

export const PrimaryAutofocus: Story = {
  args: {
    type: "text",
    autoFocus: true,
    label: "Введите что-то",
    value: "SSSS",
    name: "input",
    autofocus: true,
  },
};
