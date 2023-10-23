import { Meta, StoryObj } from '@storybook/react';
import ThemeDecorator from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/Theme';
import { Text } from '../Text/Text';
import { Card } from './Card';

const meta: Meta<typeof Card> = {
  title: 'shared/Card',
  component: Card,
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Primary: Story = {
  args: {
    children: <Text title="Title" text="Some text" />,
    theme: 'normal',
  },
};

export const PrimaryDark: Story = {
  args: {
    children: <Text title="Title" text="Some text" />,
    theme: 'normal',
  },
};

PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Outlined: Story = {
  args: {
    children: <Text title="Title" text="Some text" />,
    theme: 'outlined',
  },
};

export const OutlinedDark: Story = {
  args: {
    children: <Text title="Title" text="Some text" />,
    theme: 'outlined',
  },
};

OutlinedDark.decorators = [ThemeDecorator(Theme.DARK)];
