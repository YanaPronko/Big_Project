import { Meta, StoryObj } from '@storybook/react';
import ThemeDecorator from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/app/providers/Theme';
import { [FTName] } from './[FTName]';

const meta: Meta<typeof [FTName]> = {
  title: 'shared/[FTName]',
  component: [FTName],
};

export default meta;
type Story = StoryObj<typeof [FTName]>;

export const Primary: Story = {
  args: {},
};

export const PrimaryDark: Story = {
  args: {},
};

PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];
