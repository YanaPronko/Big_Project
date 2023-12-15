import { Meta, StoryObj } from '@storybook/react';

import { Input } from './Input';

const meta: Meta<typeof Input> = {
  title: 'shared/Input',
  component: Input,
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Primary: Story = {
  args: {
    children: 'Text',
    type: 'text',
    autoFocus: true,
    label: 'Введите что-то',
    value: 'SSSS',
    name: 'input',
  },
};

export const PrimaryAutofocus: Story = {
  args: {
    children: 'Text',
    type: 'text',
    autoFocus: true,
    label: 'Введите что-то',
    value: 'SSSS',
    name: 'input',
    autofocus: true,
  },
};
