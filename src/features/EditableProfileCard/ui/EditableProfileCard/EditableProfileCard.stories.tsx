import { Meta, StoryObj } from "@storybook/react";

import { RedesignedThemeDecorator } from "@/shared/config/storybook/RedesignedThemeDecorator/RedesignedThemeDecorator";
import StoreDecorator from "@/shared/config/storybook/StoreDecorator/StoreDecorator";
import ThemeDecorator from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "@/shared/const/theme";

import { EditableProfileCard } from "./EditableProfileCard";
import IMG from "../../../../shared/assets/test/avatar.png";

const meta: Meta<typeof EditableProfileCard> = {
  title: "features/EditableProfileCard",
  component: EditableProfileCard,
};

export default meta;
type Story = StoryObj<typeof EditableProfileCard>;

export const Primary: Story = {
  args: {},
};

Primary.decorators = [
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

export const PrimaryRedesigned: Story = {
  args: {},
};

PrimaryRedesigned.decorators = [
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

export const PrimaryDark: Story = {
  args: {},
};

PrimaryDark.decorators = [
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
  ThemeDecorator(Theme.DARK),
];

export const PrimaryDarkRedesigned: Story = {
  args: {},
};

PrimaryDarkRedesigned.decorators = [
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

export const Edit: Story = {
  args: {},
};

Edit.decorators = [
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
      readonly: false,
    },
  }),
];

export const EditDark: Story = {
  args: {},
};

EditDark.decorators = [
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
      readonly: false,
    },
  }),
  ThemeDecorator(Theme.DARK),
];

export const EditRedesigned: Story = {
  args: {},
};

EditRedesigned.decorators = [
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
      readonly: false,
    },
  }),
  RedesignedThemeDecorator(),
];

export const EditDarkRedesigned: Story = {
  args: {},
};

EditDarkRedesigned.decorators = [
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
      readonly: false,
    },
  }),
  RedesignedThemeDecorator(Theme.DARK),
];
