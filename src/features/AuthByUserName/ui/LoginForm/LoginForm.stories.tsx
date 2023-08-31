import { Meta, StoryObj } from '@storybook/react';
import StoreDecorator from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { LoginForm } from './LoginForm';

const meta: Meta<typeof LoginForm> = {
  title: 'features/LoginForm',
  component: LoginForm,
};

export default meta;
type Story = StoryObj<typeof LoginForm>;

export const Normal: Story = {
  args: {},
};

Normal.decorators = [StoreDecorator({ loginForm: {} })];

export const WithError: Story = {
  args: {},
};

WithError.decorators = [
  StoreDecorator({ loginForm: { error: 'Invalid password or login' } }),
];

export const Loading: Story = {
  args: {},
};

Loading.decorators = [
  StoreDecorator({ loginForm: { isLoading: true } }),
];
