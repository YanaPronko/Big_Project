import { Meta, StoryObj } from "@storybook/react";

import { RedesignedThemeDecorator } from "@/shared/config/storybook/RedesignedThemeDecorator/RedesignedThemeDecorator";
import { Theme } from "@/shared/const/theme";

import { ProfileCardRedesigned } from "./ProfileCardRedesigned";
import IMG from "../../../../../shared/assets/icons/user-32-32.png";

const meta: Meta<typeof ProfileCardRedesigned> = {
  title: "entities/ProfileCardRedesigned",
  component: ProfileCardRedesigned,
  decorators: [RedesignedThemeDecorator()],
};

export default meta;
type Story = StoryObj<typeof ProfileCardRedesigned>;

export const Primary: Story = {
  args: {
    data: {
      first: "Yana",
      lastname: "Prankonkjj,",
      age: 78,
      currency: "USD",
      country: "Kazakhstan",
      city: "Minsk",
      username: "adminbnm,",
      avatar: IMG,
    },
  },
};

export const Dark: Story = {
  args: {
    data: {
      first: "Yana",
      lastname: "Prankonkjj,",
      age: 78,
      currency: "USD",
      country: "Kazakhstan",
      city: "Minsk",
      username: "adminbnm,",
      avatar: IMG,
    },
  },
};

Dark.decorators = [RedesignedThemeDecorator(Theme.DARK)];

export const WithError: Story = {
  args: {
    error: "true",
  },
};

export const WithLoading: Story = {
  args: {
    isLoading: true,
  },
};
