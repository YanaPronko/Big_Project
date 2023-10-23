import { Meta, StoryObj } from '@storybook/react';
import ThemeDecorator from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/Theme';
import { Select } from './Select';

const meta: Meta<typeof Select> = {
  title: 'shared/Select',
  component: Select,
};

export default meta;
type Story = StoryObj<typeof Select>;

export const Primary: Story = {
  args: {
    label: 'Выберите валюту',
    options: [{ value: '1', content: 'EUR' }, { value: '2', content: 'USD' }],
  },
};

export const PrimaryDark: Story = {
  args: {
    label: 'Выберите валюту',
    options: [
      { value: '1', content: 'EUR' },
      { value: '2', content: 'USD' },
    ],
  },
};

PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];
