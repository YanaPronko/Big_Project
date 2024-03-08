import { Meta, StoryObj } from "@storybook/react";

import { RedesignedThemeDecorator } from "@/shared/config/storybook/RedesignedThemeDecorator/RedesignedThemeDecorator";
import ThemeDecorator from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "@/shared/const/theme";

import { Modal } from "./Modal";

const meta: Meta<typeof Modal> = {
  title: "shared/Modal",
  component: Modal,
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Normal: Story = {
  args: {
    isOpen: true,
    children: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, quibusdam. Ipsam a magni autem, facere ducimus rerum, rem architecto quasi nemo voluptate necessitatibus, sapiente beatae repudiandae amet dolorum animi. Recusandae.
    Repellat quis quaerat accusamus pariatur unde nulla nemo dignissimos, dicta reprehenderit facilis corporis officia expedita iste laboriosam temporibus maxime fugiat delectus ducimus ea. Fuga animi ipsum, reiciendis iure porro voluptates.
    Harum labore sed animi eos aliquam minus pariatur odio aspernatur. Esse voluptates laborum dolores, ratione dolorum nemo aspernatur doloribus nobis voluptate, aliquid illum sapiente beatae pariatur veniam atque earum. Repudiandae?
    Voluptatem temporibus, ad fuga iusto deserunt dolore illo itaque, atque, rem dolor quasi. Ea nihil, rerum amet ex laudantium sequi sunt iusto aspernatur est nostrum quas architecto dicta eos officia!
    Beatae molestias doloremque voluptatem consequatur rerum excepturi aliquid est quisquam nesciunt quos commodi deleniti quae tempora praesentium, odit aspernatur nostrum ipsum qui, in quia. Reprehenderit, nemo? Repellat ipsam quae adipisci?`,
  },
};

export const NormalRedesigned: Story = {
  args: {
    isOpen: true,
    children: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, quibusdam. Ipsam a magni autem, facere ducimus rerum, rem architecto quasi nemo voluptate necessitatibus, sapiente beatae repudiandae amet dolorum animi. Recusandae.
    Repellat quis quaerat accusamus pariatur unde nulla nemo dignissimos, dicta reprehenderit facilis corporis officia expedita iste laboriosam temporibus maxime fugiat delectus ducimus ea. Fuga animi ipsum, reiciendis iure porro voluptates.
    Harum labore sed animi eos aliquam minus pariatur odio aspernatur. Esse voluptates laborum dolores, ratione dolorum nemo aspernatur doloribus nobis voluptate, aliquid illum sapiente beatae pariatur veniam atque earum. Repudiandae?
    Voluptatem temporibus, ad fuga iusto deserunt dolore illo itaque, atque, rem dolor quasi. Ea nihil, rerum amet ex laudantium sequi sunt iusto aspernatur est nostrum quas architecto dicta eos officia!
    Beatae molestias doloremque voluptatem consequatur rerum excepturi aliquid est quisquam nesciunt quos commodi deleniti quae tempora praesentium, odit aspernatur nostrum ipsum qui, in quia. Reprehenderit, nemo? Repellat ipsam quae adipisci?`,
  },
};

NormalRedesigned.decorators = [RedesignedThemeDecorator()];

export const Dark: Story = {
  args: {
    isOpen: true,
    children: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, quibusdam. Ipsam a magni autem, facere ducimus rerum, rem architecto quasi nemo voluptate necessitatibus, sapiente beatae repudiandae amet dolorum animi. Recusandae.
    Repellat quis quaerat accusamus pariatur unde nulla nemo dignissimos, dicta reprehenderit facilis corporis officia expedita iste laboriosam temporibus maxime fugiat delectus ducimus ea. Fuga animi ipsum, reiciendis iure porro voluptates.
    Harum labore sed animi eos aliquam minus pariatur odio aspernatur. Esse voluptates laborum dolores, ratione dolorum nemo aspernatur doloribus nobis voluptate, aliquid illum sapiente beatae pariatur veniam atque earum. Repudiandae?
    Voluptatem temporibus, ad fuga iusto deserunt dolore illo itaque, atque, rem dolor quasi. Ea nihil, rerum amet ex laudantium sequi sunt iusto aspernatur est nostrum quas architecto dicta eos officia!
    Beatae molestias doloremque voluptatem consequatur rerum excepturi aliquid est quisquam nesciunt quos commodi deleniti quae tempora praesentium, odit aspernatur nostrum ipsum qui, in quia. Reprehenderit, nemo? Repellat ipsam quae adipisci?`,
  },
};

Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const DarkRedesigned: Story = {
  args: {
    isOpen: true,
    children: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, quibusdam. Ipsam a magni autem, facere ducimus rerum, rem architecto quasi nemo voluptate necessitatibus, sapiente beatae repudiandae amet dolorum animi. Recusandae.
    Repellat quis quaerat accusamus pariatur unde nulla nemo dignissimos, dicta reprehenderit facilis corporis officia expedita iste laboriosam temporibus maxime fugiat delectus ducimus ea. Fuga animi ipsum, reiciendis iure porro voluptates.
    Harum labore sed animi eos aliquam minus pariatur odio aspernatur. Esse voluptates laborum dolores, ratione dolorum nemo aspernatur doloribus nobis voluptate, aliquid illum sapiente beatae pariatur veniam atque earum. Repudiandae?
    Voluptatem temporibus, ad fuga iusto deserunt dolore illo itaque, atque, rem dolor quasi. Ea nihil, rerum amet ex laudantium sequi sunt iusto aspernatur est nostrum quas architecto dicta eos officia!
    Beatae molestias doloremque voluptatem consequatur rerum excepturi aliquid est quisquam nesciunt quos commodi deleniti quae tempora praesentium, odit aspernatur nostrum ipsum qui, in quia. Reprehenderit, nemo? Repellat ipsam quae adipisci?`,
  },
};

DarkRedesigned.decorators = [
  RedesignedThemeDecorator(Theme.DARK),
];

export const Orange: Story = {
  args: {
    isOpen: true,
    children: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, quibusdam. Ipsam a magni autem, facere ducimus rerum, rem architecto quasi nemo voluptate necessitatibus, sapiente beatae repudiandae amet dolorum animi. Recusandae.
    Repellat quis quaerat accusamus pariatur unde nulla nemo dignissimos, dicta reprehenderit facilis corporis officia expedita iste laboriosam temporibus maxime fugiat delectus ducimus ea. Fuga animi ipsum, reiciendis iure porro voluptates.
    Harum labore sed animi eos aliquam minus pariatur odio aspernatur. Esse voluptates laborum dolores, ratione dolorum nemo aspernatur doloribus nobis voluptate, aliquid illum sapiente beatae pariatur veniam atque earum. Repudiandae?
    Voluptatem temporibus, ad fuga iusto deserunt dolore illo itaque, atque, rem dolor quasi. Ea nihil, rerum amet ex laudantium sequi sunt iusto aspernatur est nostrum quas architecto dicta eos officia!
    Beatae molestias doloremque voluptatem consequatur rerum excepturi aliquid est quisquam nesciunt quos commodi deleniti quae tempora praesentium, odit aspernatur nostrum ipsum qui, in quia. Reprehenderit, nemo? Repellat ipsam quae adipisci?`,
  },
};
Orange.decorators = [ThemeDecorator(Theme.ORANGE)];

export const OrangeRedesigned: Story = {
  args: {
    isOpen: true,
    children: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, quibusdam. Ipsam a magni autem, facere ducimus rerum, rem architecto quasi nemo voluptate necessitatibus, sapiente beatae repudiandae amet dolorum animi. Recusandae.
    Repellat quis quaerat accusamus pariatur unde nulla nemo dignissimos, dicta reprehenderit facilis corporis officia expedita iste laboriosam temporibus maxime fugiat delectus ducimus ea. Fuga animi ipsum, reiciendis iure porro voluptates.
    Harum labore sed animi eos aliquam minus pariatur odio aspernatur. Esse voluptates laborum dolores, ratione dolorum nemo aspernatur doloribus nobis voluptate, aliquid illum sapiente beatae pariatur veniam atque earum. Repudiandae?
    Voluptatem temporibus, ad fuga iusto deserunt dolore illo itaque, atque, rem dolor quasi. Ea nihil, rerum amet ex laudantium sequi sunt iusto aspernatur est nostrum quas architecto dicta eos officia!
    Beatae molestias doloremque voluptatem consequatur rerum excepturi aliquid est quisquam nesciunt quos commodi deleniti quae tempora praesentium, odit aspernatur nostrum ipsum qui, in quia. Reprehenderit, nemo? Repellat ipsam quae adipisci?`,
  },
};
Orange.decorators = [RedesignedThemeDecorator(Theme.ORANGE)];
