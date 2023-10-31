import { Meta, StoryObj } from '@storybook/react';
import ThemeDecorator from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/app/providers/Theme';
import { BtnSize, Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'shared/Button',
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: 'Text',
  },
};

export const Clear: Story = {
  args: {
    children: 'Text',
    theme: 'clear',
  },
};

export const ClearInverted: Story = {
  args: {
    children: 'Text',
    theme: 'clear_inverted',
  },
};

export const Outline: Story = {
  args: {
    children: 'Text',
    theme: 'outline',
  },
};

export const OutlineRed: Story = {
  args: {
    children: 'Text',
    theme: 'outline_red',
  },
};
export const OutlineRedDark: Story = {
  args: {
    children: 'Text',
    theme: 'outline_red',
  },
};
OutlineRedDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OutlineDark: Story = {
  args: {
    children: 'Text',
    theme: 'outline',
  },
  decorators: [
    ThemeDecorator(Theme.DARK),
    // (Story) => (
    //   <div className={`app ${Theme.DARK}`}>
    //     <Story />
    //   </div>
    // ),
  ],
};

export const OutlineSizeM: Story = {
  args: {
    children: 'Text',
    theme: 'outline',
    size: BtnSize.M,
  },
};

export const OutlineSizeL: Story = {
  args: {
    children: 'Text',
    theme: 'outline',
    size: BtnSize.L,
  },
};

export const OutlineSizeXL: Story = {
  args: {
    children: 'Text',
    theme: 'outline',
    size: BtnSize.XL,
  },
};

// OutlineDark.decorators = [ThemeDecorator(Theme.DARK)]

export const BackgroundTheme: Story = {
  args: {
    children: 'Text',
    theme: 'background',
  },
};

export const BackgroundInvertedTheme: Story = {
  args: {
    children: 'Text',
    theme: 'background_inverted',
  },
};

export const Disabled: Story = {
  args: {
    children: 'Text',
    theme: 'outline',
    disabled: true,
  },
};

export const DisabledDark: Story = {
  args: {
    children: 'Text',
    theme: 'outline',
    disabled: true,
  },
};

DisabledDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Square: Story = {
  args: {
    children: '<',
    theme: 'background_inverted',
    square: true,
  },
};

export const SquarL: Story = {
  args: {
    children: '<',
    theme: 'background_inverted',
    square: true,
    size: BtnSize.L,
  },
};

export const SquarXL: Story = {
  args: {
    children: '<',
    theme: 'background_inverted',
    square: true,
    size: BtnSize.XL,
  },
};

export const FullWidth: Story = {
  args: {
    children: '<',
    fullWidth: true,
  },
};
