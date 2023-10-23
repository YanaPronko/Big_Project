import { Meta, StoryObj } from '@storybook/react';
import ThemeDecorator from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/Theme';
import StoreDecorator from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import ProfilePage from './ProfilePage';
import IMG from '../../../shared/assets/test/avatar.png';

const meta: Meta<typeof ProfilePage> = {
  title: 'pages/ProfilePage',
  component: ProfilePage,
};

export default meta;
type Story = StoryObj<typeof ProfilePage>;

export const Normal: Story = {
  args: {},
};
Normal.decorators = [
  StoreDecorator({
    profile: {
      form: {
        id: '1',
        first: 'Yana',
        lastname: 'Prankonkjj,',
        age: 78,
        currency: 'USD',
        country: 'Kazakhstan',
        city: 'Minsk',
        username: 'adminbnm,',
        avatar: IMG,
      },
      readonly: true,
    },
  }),
];

export const Dark: Story = {
  args: {},
};

Dark.decorators = [
  ThemeDecorator(Theme.DARK),
  StoreDecorator({
    profile: {
      form: {
        id: '1',
        first: 'Yana',
        lastname: 'Prankonkjj,',
        age: 78,
        currency: 'USD',
        country: 'Kazakhstan',
        city: 'Minsk',
        username: 'adminbnm,',
        avatar: IMG,
      },
      readonly: true,
    },
  }),
];
