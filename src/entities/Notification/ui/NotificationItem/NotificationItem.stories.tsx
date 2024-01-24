import { Meta, StoryObj } from "@storybook/react";

import StoreDecorator from "@/shared/config/storybook/StoreDecorator/StoreDecorator";
import ThemeDecorator from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "@/shared/const/theme";

import { NotificationItem } from "./NotificationItem";
import { Notification } from "../../model/types/notification";

const mockNotification: Notification = {
  id: "1",
  title: "some title 1",
  description: "Some description 1",
  href: "http://localhost:3000/admin",
};

const meta: Meta<typeof NotificationItem> = {
  title: "entities/Notification/NotificationItem",
  component: NotificationItem,
  args: {
    item: mockNotification,
  },
  decorators: [StoreDecorator({})],
};

export default meta;
type Story = StoryObj<typeof NotificationItem>;

export const Primary: Story = {
  args: {},
};

export const PrimaryDark: Story = {
  args: {},
};

PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];
