import { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import ThemeDecorator from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/app/providers/Theme';
import StoreDecorator from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import AddCommentForm from './AddCommentForm';

const meta: Meta<typeof AddCommentForm> = {
  title: 'features/addCommentForm',
  component: AddCommentForm,
};

export default meta;
type Story = StoryObj<typeof AddCommentForm>;

export const Primary: Story = {
  args: {
    onSendComment: action('onSendComment'),
  },
};

Primary.decorators = [StoreDecorator({})];

export const PrimaryDark: Story = {
  args: {
    onSendComment: action('onSendComment'),
  },
};

PrimaryDark.decorators = [StoreDecorator({}), ThemeDecorator(Theme.DARK)];
