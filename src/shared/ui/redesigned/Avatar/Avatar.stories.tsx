import { Meta, StoryObj } from "@storybook/react";

import { RedesignedThemeDecorator } from "@/shared/config/storybook/RedesignedThemeDecorator/RedesignedThemeDecorator";

import { AvatarRedesigned } from "./Avatar";
import Img from "../../../assets/icons/user-32-32.png";

const meta: Meta<typeof AvatarRedesigned> = {
  title: "shared/AvatarRedesigned",
  component: AvatarRedesigned,
  decorators: [RedesignedThemeDecorator()],
};

export default meta;
type Story = StoryObj<typeof AvatarRedesigned>;

export const Primary: Story = {
  args: {
    src: Img,
    alt: "icon",
  },
};

export const Small: Story = {
  args: {
    src: Img,
    alt: "icon",
    size: 50,
  },
};
