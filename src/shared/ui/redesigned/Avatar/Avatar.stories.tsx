import { Meta, StoryObj } from "@storybook/react";

import { AvatarRedesigned } from "./Avatar";
import Img from "../../assets/test/avatar.png";

const meta: Meta<typeof AvatarRedesigned> = {
  title: "shared/Avatar",
  component: AvatarRedesigned,
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
