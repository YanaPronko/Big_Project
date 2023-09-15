import { Meta, StoryObj } from '@storybook/react';
import ThemeDecorator from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/Theme/lib/ThemeContext';
import { Avatar } from './Avatar';
import Img from './avatar.png';

const meta: Meta<typeof Avatar> = {
  title: 'shared/Avatar',
  component: Avatar,
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Primary: Story = {
  args: {
    src: Img,
    alt: 'icon',
  },
};

export const Small: Story = {
  args: {
    src: Img,
    alt: 'icon',
    size: 50,
  },
};
