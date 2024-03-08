import { Meta, StoryObj } from "@storybook/react";

import { RedesignedThemeDecorator } from "@/shared/config/storybook/RedesignedThemeDecorator/RedesignedThemeDecorator";
import StoreDecorator from "@/shared/config/storybook/StoreDecorator/StoreDecorator";
import ThemeDecorator from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "@/shared/const/theme";

import ProfileRating from "./ProfileRating";

const meta: Meta<typeof ProfileRating> = {
  title: "features/ProfileRating",
  component: ProfileRating,
  args: {
    profileId: "1",
  },
  decorators: [StoreDecorator({})],
};

export default meta;
type Story = StoryObj<typeof ProfileRating>;

export const Primary: Story = {
  args: {},
  parameters: {
    mockData: [
      {
        url: `${__API__}/profile-ratings?userId=1&profileId=1`,
        method: "GET",
        status: 200,
        response: [{ rate: 3 }],
      },
    ],
  },
};

export const PrimaryRedesigned: Story = {
  args: {},
  parameters: {
    mockData: [
      {
        url: `${__API__}/profile-ratings?userId=1&profileId=1`,
        method: "GET",
        status: 200,
        response: [{ rate: 3 }],
      },
    ],
  },
};

PrimaryRedesigned.decorators = [RedesignedThemeDecorator()];

export const PrimaryDark: Story = {
  args: {},
  parameters: {
    mockData: [
      {
        url: `${__API__}/profile-ratings?userId=1&profileId=1`,
        method: "GET",
        status: 200,
        response: [{ rate: 3 }],
      },
    ],
  },
};

PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const PrimaryDarkRedesigned: Story = {
  args: {},
  parameters: {
    mockData: [
      {
        url: `${__API__}/profile-ratings?userId=1&profileId=1`,
        method: "GET",
        status: 200,
        response: [{ rate: 3 }],
      },
    ],
  },
};

PrimaryDarkRedesigned.decorators = [
  RedesignedThemeDecorator(Theme.DARK),
];

export const WithoutRateDark: Story = {
  args: {},
  parameters: {
    mockData: [
      {
        url: `${__API__}/profile-ratings?userId=1&profileId=1`,
        method: "GET",
        status: 200,
        response: [],
      },
    ],
  },
};

PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const WithoutRateDarkRedesigned: Story = {
  args: {},
  parameters: {
    mockData: [
      {
        url: `${__API__}/profile-ratings?userId=1&profileId=1`,
        method: "GET",
        status: 200,
        response: [],
      },
    ],
  },
};

WithoutRateDarkRedesigned.decorators = [
  RedesignedThemeDecorator(Theme.DARK),
];
