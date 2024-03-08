import { Meta, StoryObj } from "@storybook/react";

import { RedesignedThemeDecorator } from "@/shared/config/storybook/RedesignedThemeDecorator/RedesignedThemeDecorator";
import StoreDecorator from "@/shared/config/storybook/StoreDecorator/StoreDecorator";
import ThemeDecorator from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "@/shared/const/theme";

import ProfilePage from "./ProfilePage";
import IMG from "../../../shared/assets/icons/user-32-32.png";

const meta: Meta<typeof ProfilePage> = {
  title: "pages/ProfilePage",
  component: ProfilePage,
};

export default meta;
type Story = StoryObj<typeof ProfilePage>;

export const Normal: Story = {
  args: {},
};
Normal.decorators = [
  StoreDecorator({
    profile: {
      form: {
        id: "1",
        first: "Yana",
        lastname: "Prankonkjj,",
        age: 78,
        currency: "USD",
        country: "Kazakhstan",
        city: "Minsk",
        username: "adminbnm,",
        avatar: IMG,
      },
      readonly: true,
    },
  }),
];

export const NormalRedesigned: Story = {
  args: {},
};
NormalRedesigned.decorators = [
  StoreDecorator({
    profile: {
      form: {
        id: "1",
        first: "Yana",
        lastname: "Prankonkjj,",
        age: 78,
        currency: "USD",
        country: "Kazakhstan",
        city: "Minsk",
        username: "adminbnm,",
        avatar: IMG,
      },
      readonly: true,
    },
  }),
  RedesignedThemeDecorator(),
];

export const Dark: Story = {
  args: {},
};

Dark.decorators = [
  ThemeDecorator(Theme.DARK),
  StoreDecorator({
    profile: {
      form: {
        id: "1",
        first: "Yana",
        lastname: "Prankonkjj,",
        age: 78,
        currency: "USD",
        country: "Kazakhstan",
        city: "Minsk",
        username: "adminbnm,",
        avatar: IMG,
      },
      readonly: true,
    },
  }),
];

export const DarkRedesigned: Story = {
  args: {},
};

DarkRedesigned.decorators = [
  ThemeDecorator(Theme.DARK),
  StoreDecorator({
    profile: {
      form: {
        id: "1",
        first: "Yana",
        lastname: "Prankonkjj,",
        age: 78,
        currency: "USD",
        country: "Kazakhstan",
        city: "Minsk",
        username: "adminbnm,",
        avatar: IMG,
      },
      readonly: true,
    },
  }),
  RedesignedThemeDecorator(Theme.DARK),
];
