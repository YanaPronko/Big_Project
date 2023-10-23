import { Meta, StoryObj } from '@storybook/react';
import ThemeDecorator from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/Theme';
import StoreDecorator from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { ArticlesTypesTabs } from './ArticlesTypesTabs';

const meta: Meta<typeof ArticlesTypesTabs> = {
  title: 'features/ArticlesTypesTabs',
  component: ArticlesTypesTabs,
};

export default meta;
type Story = StoryObj<typeof ArticlesTypesTabs>;

export const Primary: Story = {
  args: {},
};

Primary.decorators = [StoreDecorator({})];

export const PrimaryDark: Story = {
  args: {},
};

PrimaryDark.decorators = [StoreDecorator({}), ThemeDecorator(Theme.DARK)];
