import { Meta, StoryObj } from '@storybook/react';
import ThemeDecorator from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import StoreDecorator from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { Theme } from 'app/providers/Theme/lib/ThemeContext';
import { NavBar } from './NavBar';

const meta: Meta<typeof NavBar> = {
  title: 'widgets/NavBar',
  component: NavBar,
};

export default meta;
type Story = StoryObj<typeof NavBar>;

export const Normal: Story = {
  args: {},
};

Normal.decorators = [StoreDecorator({})];

export const Dark: Story = {
  args: {},
};

Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})];

export const NormalAuth: Story = {
  args: {},
};

NormalAuth.decorators = [
  StoreDecorator({
    user: {
      authData: {
        avatar: 'https://avatars.githubusercontent.com/u/11681863311111111',
        id: '1',
        username: 'LEV',
      },
    },
  }),
];

export const DarkAuth: Story = {
  args: {},
};

DarkAuth.decorators = [
  ThemeDecorator(Theme.DARK),
  StoreDecorator({
    user: {
      authData: {
        avatar: 'https://avatars.githubusercontent.com/u/11681863311111111',
        id: '1',
        username: 'LEV',
      },
    },
  }),
];

export const AdminAuth: Story = {
  args: {},
};

AdminAuth.decorators = [
  StoreDecorator({
    user: {
      authData: {
        avatar: 'https://avatars.githubusercontent.com/u/11681863311111111',
        id: '1',
        username: 'LEV',
        roles: ['ADMIN'],
      },
    },
  }),
];
