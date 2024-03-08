import { Meta, StoryObj } from "@storybook/react";

import { RedesignedThemeDecorator } from "@/shared/config/storybook/RedesignedThemeDecorator/RedesignedThemeDecorator";
import { Theme } from "@/shared/const/theme";

import { PopoverRedesigned } from "./Popover";
import { ButtonRedesigned } from "../../../Button/Button";
import { TextRedesigned } from "../../../Text/Text";

const meta: Meta<typeof PopoverRedesigned> = {
  title: "shared/Popups/PopoverRedesigned",
  component: PopoverRedesigned,
  args: {
    children: (
      <>
        <TextRedesigned title="item 1" />
        <TextRedesigned title="item 2" />
        <TextRedesigned title="item 3" />
      </>
    ),
  },
  decorators: [
    (Story) => (
      <div style={{ padding: "12rem", width: "fit-content" }}>
        <Story />
      </div>
    ),
    RedesignedThemeDecorator(),
  ],
};

export default meta;
type Story = StoryObj<typeof PopoverRedesigned>;

export const Left: Story = {
  args: {
    direction: "bottomL",
    trigger: <ButtonRedesigned>Notification</ButtonRedesigned>,
  },
};

export const RightDark: Story = {
  args: {
    direction: "bottomR",
    trigger: <ButtonRedesigned>Notification</ButtonRedesigned>,
  },
};

RightDark.decorators = [RedesignedThemeDecorator(Theme.DARK)];
