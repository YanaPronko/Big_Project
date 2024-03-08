import { action } from "@storybook/addon-actions";
import { Meta, StoryObj } from "@storybook/react";

import { RedesignedThemeDecorator } from "@/shared/config/storybook/RedesignedThemeDecorator/RedesignedThemeDecorator";

import { DropdownRedesigned } from "./Dropdown";
import { getRouteProfile } from "../../../../../const/AppRoutes";
import { Theme } from "../../../../../const/theme";
import { ButtonRedesigned } from "../../../Button/Button";

const meta: Meta<typeof DropdownRedesigned> = {
  title: "shared/Popups/DropdownRedesigned",
  component: DropdownRedesigned,
  decorators: [
    (Story) => (
      <div style={{ padding: "12rem", width: "fit-content" }}>
        <Story />
      </div>
    ),
    RedesignedThemeDecorator(),
  ],
  args: {
    items: [
      {
        content: "Profile",
        href: getRouteProfile("1"),
      },
      {
        content: "Log out",
        onClick: action("onLogOut"),
      },
    ],
    trigger: <ButtonRedesigned>More</ButtonRedesigned>,
  },
};

export default meta;
type Story = StoryObj<typeof DropdownRedesigned>;

export const Primary: Story = {
  args: {
    trigger: <ButtonRedesigned>More</ButtonRedesigned>,
  },
};

export const PrimaryDark: Story = {
  args: {},
};

PrimaryDark.decorators = [RedesignedThemeDecorator(Theme.DARK)];

export const BottomLeft: Story = {
  args: {
    direction: "bottomL",
  },
};

export const TopLeft: Story = {
  args: {
    direction: "topL",
  },
};

export const TopRight: Story = {
  args: {
    direction: "topR",
  },
};
