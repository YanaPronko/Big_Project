import { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import ThemeDecorator from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/Theme';
import { ListBox } from './ListBox';

const meta: Meta<typeof ListBox> = {
  title: 'shared/ListBox',
  component: ListBox,
  args: {
    items: [
      { value: '1', content: 'BYN' },
      { value: '2', content: 'UAN' },
      { value: '3', content: 'RUB' },
    ],
    label: 'Choose currency>',
    onChange: action('onChange'),
  },
};

export default meta;
type Story = StoryObj<typeof ListBox>;

export const Primary: Story = {
  args: {
    defaultVal: 'BYN',
  },
};

export const PrimaryDark: Story = {
  args: {
    defaultVal: 'BYN',
  },
};

PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Selected: Story = {
  args: {
    defaultVal: 'BYN',
    selectedVal: 'UAN',
  },
};

export const Readonly: Story = {
  args: {
    defaultVal: 'BYN',
    selectedVal: 'UAN',
    readonly: true,
  },
};

export const TopDirection: Story = {
  args: {
    defaultVal: 'BYN',
    selectedVal: 'UAN',
    direction: 'topR',
  },
  decorators: [
    (Story) => (
      <div style={{ padding: '12rem' }}>
        {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
        <Story />
      </div>
    ),
  ],
};
