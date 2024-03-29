import { Meta, StoryObj } from "@storybook/react";

import { RedesignedThemeDecorator } from "@/shared/config/storybook/RedesignedThemeDecorator/RedesignedThemeDecorator";
import StoreDecorator from "@/shared/config/storybook/StoreDecorator/StoreDecorator";
import ThemeDecorator from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "@/shared/const/theme";

import { NotificationList } from "./NotificationList";
import { mockNotifications } from "../../model/mocks/notifications";

const meta: Meta<typeof NotificationList> = {
  title: "entities/Notification/NotificationList",
  component: NotificationList,
  // decorators: [
  //   (Story) => (
  //     <div style={{ padding: '2rem', width: 'fit-content', height: '10rem' }}>
  //       <Story />
  //     </div>
  //   ),
  // ],
};

export default meta;
type Story = StoryObj<typeof NotificationList>;

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

Primary.decorators = [StoreDecorator({})];

export const PrimaryRedesigned: Story = {
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

PrimaryRedesigned.decorators = [StoreDecorator({}), RedesignedThemeDecorator()];

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

PrimaryDark.decorators = [StoreDecorator({}), ThemeDecorator(Theme.DARK)];

export const PrimaryDarkRedesigned: Story = {
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

PrimaryDarkRedesigned.decorators = [
  StoreDecorator({}),
  RedesignedThemeDecorator(Theme.DARK),
];
