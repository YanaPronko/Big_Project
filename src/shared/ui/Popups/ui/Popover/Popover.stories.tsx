import { Meta, StoryObj } from '@storybook/react';

import ThemeDecorator from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

import { Popover } from './Popover';
import { Button } from '../../../Button/Button';
import { Text } from '../../../Text/Text';

const meta: Meta<typeof Popover> = {
  title: 'shared/Popups/Popover',
  component: Popover,
  args: {
    children: (
      <>
        <Text title="item 1" />
        <Text title="item 2" />
        <Text title="item 3" />
      </>
    ),
  },
  decorators: [
    (Story) => (
      <div style={{ padding: '12rem', width: 'fit-content' }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Popover>;

export const Left: Story = {
  args: {
    direction: 'bottomL',
    trigger: <Button>Notification</Button>,
  },
};

export const RightDark: Story = {
  args: {
    direction: 'bottomR',
    trigger: <Button>Notification</Button>,
  },
};

RightDark.decorators = [ThemeDecorator(Theme.DARK)];
