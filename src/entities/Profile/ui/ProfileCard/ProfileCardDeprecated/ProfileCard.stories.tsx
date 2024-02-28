import { Meta, StoryObj } from "@storybook/react";

import { ProfileCardDeprecated } from "./ProfileCardDeprecated";
import IMG from "../../../../shared/assets/test/avatar.png";

const meta: Meta<typeof ProfileCardDeprecated> = {
  title: "entities/ProfileCard",
  component: ProfileCardDeprecated,
};

export default meta;
type Story = StoryObj<typeof ProfileCardDeprecated>;

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
