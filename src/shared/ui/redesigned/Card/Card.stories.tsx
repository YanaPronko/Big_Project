import { Meta, StoryObj } from "@storybook/react";

import { RedesignedThemeDecorator } from "@/shared/config/storybook/RedesignedThemeDecorator/RedesignedThemeDecorator";
import { Theme } from "@/shared/const/theme";

import { CardRedesigned } from "./Card";
import { TextRedesigned } from "../Text/Text";

const meta: Meta<typeof CardRedesigned> = {
  title: "shared/CardRedesigned",
  component: CardRedesigned,
  decorators: [RedesignedThemeDecorator()],
};

export default meta;
type Story = StoryObj<typeof CardRedesigned>;

export const Primary: Story = {
  args: {
    children: <TextRedesigned title="Title" text="Some text" />,
    variant: "normal",
  },
};

export const PrimaryDark: Story = {
  args: {
    children: <TextRedesigned title="Title" text="Some text" />,
    variant: "normal",
  },
};

PrimaryDark.decorators = [RedesignedThemeDecorator(Theme.DARK)];

export const Outlined: Story = {
  args: {
    children: <TextRedesigned title="Title" text="Some text" />,
    variant: "outlined",
  },
};

export const OutlinedDark: Story = {
  args: {
    children: <TextRedesigned title="Title" text="Some text" />,
    variant: "outlined",
  },
};

OutlinedDark.decorators = [RedesignedThemeDecorator(Theme.DARK)];
