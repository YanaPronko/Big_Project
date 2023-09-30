import { Meta, StoryObj } from '@storybook/react';
import ThemeDecorator from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/Theme/lib/ThemeContext';
import { Card } from './Card';
import { Text } from 'shared/ui/Text/Text';

const meta: Meta<typeof Card> = {
  title: 'shared/Card',
  component: Card,
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Primary: Story = {
  args: {
    children: <Text title="Title" text="Some text" />,
  },
};

export const PrimaryDark: Story = {
  args: {
    children: <Text title="Title" text="Some text" />,
  },
};

PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];
