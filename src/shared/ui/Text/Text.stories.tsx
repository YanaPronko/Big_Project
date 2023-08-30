import { Meta, StoryObj } from '@storybook/react';
import ThemeDecorator from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/Theme/lib/ThemeContext';
import { Text } from './Text';

const meta: Meta<typeof Text> = {
  title: 'shared/Text',
  component: Text,
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Primary: Story = {
  args: {
    title: 'Title',
    text: 'Text text text text',
  },
};

export const PrimaryDark: Story = {
  args: {
    title: 'Title',
    text: 'Text text text text',
  },
};

PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const ErrorText: Story = {
  args: {
    title: 'Title',
    text: 'Text text text text',
    theme: 'error',
  },
};

export const ErrorTextDark: Story = {
  args: {
    title: 'Title',
    text: 'Text text text text',
    theme: 'error',
  },
};

ErrorText.decorators = [ThemeDecorator(Theme.DARK)];
