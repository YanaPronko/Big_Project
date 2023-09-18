import { Meta, StoryObj } from '@storybook/react';
import { ProfileCard } from './ProfileCard';
import IMG from '../../../../shared/assets/test/avatar.png';

const meta: Meta<typeof ProfileCard> = {
  title: 'entities/ProfileCard',
  component: ProfileCard,
};

export default meta;
type Story = StoryObj<typeof ProfileCard>;

export const Primary: Story = {
  args: {
    data: {
      first: 'Yana',
      lastname: 'Prankonkjj,',
      age: 78,
      currency: 'USD',
      country: 'Kazakhstan',
      city: 'Minsk',
      username: 'adminbnm,',
      avatar: IMG,
    },
  },
};

export const WithError: Story = {
  args: {
    error: 'true',
  },
};

export const WithLoading: Story = {
  args: {
    isLoading: true,
  },
};
