import { Meta, StoryObj } from '@storybook/react';
import ThemeDecorator from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/app/providers/Theme';
import StoreDecorator from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { Page } from './Page';

const meta: Meta<typeof Page> = {
  title: 'shared/Page',
  component: Page,
  decorators: [StoreDecorator({})],
};

export default meta;
type Story = StoryObj<typeof Page>;

export const Primary: Story = {
  args: {},
};

export const PrimaryDark: Story = {
  args: {},
};

PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];
