import { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import ThemeDecorator from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/app/providers/Theme';
import { StarRating } from './StarRating';

const meta: Meta<typeof StarRating> = {
  title: 'shared/StarRating',
  component: StarRating,
  args: {
    size: 50,
    onSelect: action('OnSelect'),
  },
};

export default meta;
type Story = StoryObj<typeof StarRating>;

export const Primary: Story = {
  args: {},
};

export const PrimaryDark: Story = {
  args: {},
};

PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Selected: Story = {
  args: {
    selectedStars: 3,
  },
};
