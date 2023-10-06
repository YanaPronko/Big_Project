import { Meta, StoryObj } from '@storybook/react';
import ThemeDecorator from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/Theme/lib/ThemeContext';
import { action } from '@storybook/addon-actions';
import { Tabs } from './Tabs';

const meta: Meta<typeof Tabs> = {
  title: 'shared/Tabs',
  component: Tabs,
};

export default meta;
type Story = StoryObj<typeof Tabs>;

const tabs = [
  { value: 'tab1', content: 'tab1' },
  { value: 'tab2', content: 'tab2' },
  { value: 'tab3', content: 'tab3' },
];

export const Primary: Story = {
  args: {
    tabs,
    selectedValue: 'tab2',
    onTabClick: action('onTabClick'),
  },
};

export const PrimaryDark: Story = {
  args: {
    tabs,
    selectedValue: 'tab2',
    onTabClick: action('onTabClick'),
  },
};

PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];
