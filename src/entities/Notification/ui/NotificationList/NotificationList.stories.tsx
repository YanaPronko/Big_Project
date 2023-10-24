import { Meta, StoryObj } from '@storybook/react';
import ThemeDecorator from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/Theme';
import StoreDecorator from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { NotificationList } from './NotificationList';
import { Notification } from '../../model/types/notification';

const mockNotifications: Notification[] = [
  {
    id: '1',
    title: 'some title 1',
    description: 'Some description 1',
    href: 'http://localhost:3000/admin',
  },
  {
    id: '2',
    title: 'some title 2',
    description: 'Some description 2',
    href: 'http://localhost:3000/admin',
  },
  {
    id: '3',
    title: 'some title 3',
    description: 'Some description 3',
  },
];

const meta: Meta<typeof NotificationList> = {
  title: 'entities/Notification/NotificationList',
  component: NotificationList,
  decorators: [
    (Story) => (
      <div style={{ padding: '2rem', width: 'fit-content', height: '10rem' }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof NotificationList>;

export const Primary: Story = {
  args: {},
  parameters: {
    mockData: [
      {
        url: `${__API__}/notifications`,
        method: 'GET',
        status: 200,
        response: [...mockNotifications],
      },
    ],
  },
};

Primary.decorators = [StoreDecorator({})];

export const PrimaryDark: Story = {
  args: {},
  parameters: {
    mockData: [
      {
        url: `${__API__}/notifications`,
        method: 'GET',
        status: 200,
        response: [...mockNotifications],
      },
    ],
  },
};

PrimaryDark.decorators = [StoreDecorator({}), ThemeDecorator(Theme.DARK)];
