import { Meta, StoryObj } from '@storybook/react';
import { ProfileRating } from '@/features/ProfileRating';
import ThemeDecorator from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/app/providers/Theme';
import StoreDecorator from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

const meta: Meta<typeof ProfileRating> = {
  title: 'features/ProfileRating',
  component: ProfileRating,
  args: {
    profileId: '1',
  },
  decorators: [StoreDecorator({})],
};

export default meta;
type Story = StoryObj<typeof ProfileRating>;

export const Primary: Story = {
  args: {},
};

export const PrimaryDark: Story = {
  args: {},
};

PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];
