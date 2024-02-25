import { Meta, StoryObj } from "@storybook/react";

import ThemeDecorator from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "@/shared/const/theme";

import { PopoverRedesigned } from "./Popover";
import { ButtonRedesigned } from "../../../Button/Button";
import { TextRedesigned } from "../../../Text/Text";

const meta: Meta<typeof PopoverRedesigned> = {
  title: "shared/Popups/Popover",
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

RightDark.decorators = [ThemeDecorator(Theme.DARK)];
