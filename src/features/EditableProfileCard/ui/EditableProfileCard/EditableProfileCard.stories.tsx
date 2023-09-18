import { Meta, StoryObj } from '@storybook/react';
import StoreDecorator from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import ThemeDecorator from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/Theme/lib/ThemeContext';
import IMG from '../../../../shared/assets/test/avatar.png';
import { EditableProfileCard } from './EditableProfileCard';

const meta: Meta<typeof EditableProfileCard> = {
  title: 'features/EditableProfileCard',
  component: EditableProfileCard,
};

export default meta;
type Story = StoryObj<typeof EditableProfileCard>;

export const Primary: Story = {
  args: {},
};

Primary.decorators = [StoreDecorator({
  profile: {
    form: {
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
})];

export const PrimaryDark: Story = {
  args: {},
};

Primary.decorators = [
  StoreDecorator({
    profile: {
      form: {
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
  }),
  ThemeDecorator(Theme.DARK),
];
