import { Meta, StoryObj } from '@storybook/react';
import ThemeDecorator from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/Theme';
import { Overlay } from './Overlay';

const meta: Meta<typeof Overlay> = {
  title: 'shared/Overlay',
  component: Overlay,
};

export default meta;
type Story = StoryObj<typeof Overlay>;

export const Primary: Story = {
  args: {},
};

export const PrimaryDark: Story = {
  args: {},
};

PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];
