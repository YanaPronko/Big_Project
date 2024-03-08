import { Meta, StoryObj } from "@storybook/react";

import { RedesignedThemeDecorator } from "@/shared/config/storybook/RedesignedThemeDecorator/RedesignedThemeDecorator";
import { TextRedesigned } from "@/shared/ui/redesigned/Text";

import { MainLayout } from "./MainLayout";

const mockElement = () => <TextRedesigned title="Content" align="center"/>;
const mockHeader = () => <TextRedesigned title="Header" />;
const mockSidebar = () => <TextRedesigned title="SideBar" />;
const mockToolbar = () => <TextRedesigned title="Toolbar" />;

const meta: Meta<typeof MainLayout> = {
  title: "shared/layouts/MainLayout",
  component: MainLayout,
  args: {
    content: mockElement(),
    header: mockHeader(),
    sidebar: mockSidebar(),
    toolbar: mockToolbar(),
  },
  decorators: [RedesignedThemeDecorator()],
};

export default meta;
type Story = StoryObj<typeof MainLayout>;

export const Normal: Story = {
  args: {},
};
