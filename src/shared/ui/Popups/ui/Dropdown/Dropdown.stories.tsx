import { Meta, StoryObj } from '@storybook/react';
import ThemeDecorator from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/Theme';
import { RoutePaths } from 'app/config/routeConfig';
import { action } from '@storybook/addon-actions';
import { Button } from '../../../Button/Button';
import { Dropdown } from './Dropdown';

const meta: Meta<typeof Dropdown> = {
  title: 'shared/Popups/Dropdown',
  component: Dropdown,
  decorators: [
    (Story) => (
      <div style={{ padding: '12rem', width: 'fit-content' }}>
        <Story />
      </div>
    ),
  ],
  args: {
    items: [
      {
        content: 'Profile',
        href: `${RoutePaths.profile}1`,
      },
      {
        content: 'Log out',
        onClick: action('onLogOut'),
      },
    ],
    trigger: <Button>More</Button>,
  },
};

export default meta;
type Story = StoryObj<typeof Dropdown>;

export const Primary: Story = {
  args: {
    trigger: <Button>More</Button>,
  },
};

export const PrimaryDark: Story = {
  args: {},
};

PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const BottomLeft: Story = {
  args: {
    direction: 'bottomL',
  },
};

export const TopLeft: Story = {
  args: {
    direction: 'topL',
  },
};

export const TopRight: Story = {
  args: {
    direction: 'topR',
  },
};
