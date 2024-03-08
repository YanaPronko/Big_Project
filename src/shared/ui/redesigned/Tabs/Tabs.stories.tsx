import { action } from "@storybook/addon-actions";
import { Meta, StoryObj } from "@storybook/react";

import { RedesignedThemeDecorator } from "@/shared/config/storybook/RedesignedThemeDecorator/RedesignedThemeDecorator";
import { Theme } from "@/shared/const/theme";

import { TabsRedesigned } from "./Tabs";

const meta: Meta<typeof TabsRedesigned> = {
  title: "shared/TabsRedesigned",
  component: TabsRedesigned,
  decorators: [RedesignedThemeDecorator()],
};

export default meta;
type Story = StoryObj<typeof TabsRedesigned>;

const tabs = [
  { value: "tab1", content: "tab1" },
  { value: "tab2", content: "tab2" },
  { value: "tab3", content: "tab3" },
];

export const Primary: Story = {
  args: {
    tabs,
    selectedValue: "tab2",
    onTabClick: action("onTabClick"),
  },
};

export const PrimaryDark: Story = {
  args: {
    tabs,
    selectedValue: "tab2",
    onTabClick: action("onTabClick"),
  },
};

PrimaryDark.decorators = [RedesignedThemeDecorator(Theme.DARK)];
