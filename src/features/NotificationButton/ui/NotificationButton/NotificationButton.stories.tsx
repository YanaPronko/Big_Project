import { Meta, StoryObj } from "@storybook/react";

import { mockNotifications } from "@/entities/Notification/testing";
import StoreDecorator from "@/shared/config/storybook/StoreDecorator/StoreDecorator";
import ThemeDecorator from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "@/shared/const/theme";

import { NotificationButton } from "./NotificationButton";

const meta: Meta<typeof NotificationButton> = {
  title: "features/NotificationButton",
  component: NotificationButton,
  decorators: [StoreDecorator({})],
};

export default meta;
type Story = StoryObj<typeof NotificationButton>;

export const Primary: Story = {
  args: {},
  parameters: {
    mockData: [
      {
        url: `${__API__}/notifications`,
        method: "GET",
        status: 200,
        response: [...mockNotifications],
      },
    ],
  },
};

export const PrimaryDark: Story = {
  args: {},
  parameters: {
    mockData: [
      {
        url: `${__API__}/notifications`,
        method: "GET",
        status: 200,
        response: [...mockNotifications],
      },
    ],
  },
};

PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];
