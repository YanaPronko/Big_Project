import { action } from "@storybook/addon-actions";
import { Meta, StoryObj } from "@storybook/react";

import { RedesignedThemeDecorator } from "@/shared/config/storybook/RedesignedThemeDecorator/RedesignedThemeDecorator";
import { Theme } from "@/shared/const/theme";

import { ListBoxRedesigned } from "./ListBox";

const meta: Meta<typeof ListBoxRedesigned> = {
  title: "shared/Popups/ListBoxRedesigned",
  component: ListBoxRedesigned,
  args: {
    items: [
      { value: "1", content: "BYN" },
      { value: "2", content: "UAN" },
      { value: "3", content: "RUB" },
    ],
    label: "Choose currency>",
    onChange: action("onChange"),
  },
  decorators: [RedesignedThemeDecorator()],
};

export default meta;
type Story = StoryObj<typeof ListBoxRedesigned>;

export const Primary: Story = {
  args: {
    defaultVal: "BYN",
  },
};

export const PrimaryDark: Story = {
  args: {
    defaultVal: "BYN",
  },
};

PrimaryDark.decorators = [RedesignedThemeDecorator(Theme.DARK)];

export const Selected: Story = {
  args: {
    defaultVal: "BYN",
    selectedVal: "UAN",
  },
};

export const Readonly: Story = {
  args: {
    defaultVal: "BYN",
    selectedVal: "UAN",
    readonly: true,
  },
};

export const TopDirection: Story = {
  args: {
    defaultVal: "BYN",
    selectedVal: "UAN",
    direction: "topR",
  },
  decorators: [
    (Story) => (
      <div style={{ padding: "12rem" }}>
        {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
        <Story />
      </div>
    ),
  ],
};
