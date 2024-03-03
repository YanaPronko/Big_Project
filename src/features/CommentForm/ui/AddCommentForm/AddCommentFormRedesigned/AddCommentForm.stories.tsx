import { action } from "@storybook/addon-actions";
import { Meta, StoryObj } from "@storybook/react";

import StoreDecorator from "@/shared/config/storybook/StoreDecorator/StoreDecorator";
import ThemeDecorator from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "@/shared/const/theme";

import AddCommentFormRedesigned from "./AddCommentForm";

const meta: Meta<typeof AddCommentFormRedesigned> = {
  title: "features/AddCommentFormRedesigned",
  component: AddCommentFormRedesigned,
};

export default meta;
type Story = StoryObj<typeof AddCommentFormRedesigned>;

export const Primary: Story = {
  args: {
    onSendComment: action("onSendComment"),
  },
};

Primary.decorators = [StoreDecorator({})];

export const PrimaryDark: Story = {
  args: {
    onSendComment: action("onSendComment"),
  },
};

PrimaryDark.decorators = [StoreDecorator({}), ThemeDecorator(Theme.DARK)];
