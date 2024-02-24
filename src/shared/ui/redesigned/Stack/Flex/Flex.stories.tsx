import { Meta, StoryObj } from "@storybook/react";

import { Flex } from "./Flex";

const meta: Meta<typeof Flex> = {
  title: "shared/Flex",
  component: Flex,
  args: {
    children: (
      <>
        <div>first</div>
        <div>first</div>
        <div>first</div>
        <div>first</div>
      </>
    ),
  },
};

export default meta;
type Story = StoryObj<typeof Flex>;

export const JustifyStart: Story = {
  args: {
    justify: "start",
    gap: "8",
  },
};

export const JustifyEnd: Story = {
  args: {
    justify: "end",
    gap: "8",
  },
};

export const JustifyCenter: Story = {
  args: {
    justify: "center",
    gap: "8",
  },
};

export const JustifyBetween: Story = {
  args: {
    justify: "between",
    gap: "8",
  },
};

export const AlignStart: Story = {
  args: {
    align: "start",
    gap: "8",
  },
};

export const AlignEnd: Story = {
  args: {
    align: "end",
    gap: "8",
  },
};

export const AlignCenter: Story = {
  args: {
    align: "center",
    gap: "8",
  },
};

export const AlignStretch: Story = {
  args: {
    align: "stretch",
    gap: "8",
  },
};

export const DirectionRow: Story = {
  args: {
    direction: "row",
    gap: "8",
  },
};

export const DirectionColumn: Story = {
  args: {
    direction: "column",
    gap: "8",
  },
};

export const GapRow4: Story = {
  args: {
    align: "start",
    gap: "4",
  },
};

export const GapRow8: Story = {
  args: {
    align: "start",
    gap: "8",
  },
};

export const GapRow16: Story = {
  args: {
    align: "start",
    gap: "16",
  },
};

export const GapRow32: Story = {
  args: {
    align: "start",
    gap: "32",
  },
};

export const GapColumn4: Story = {
  args: {
    align: "start",
    gap: "4",
    direction: "column",
  },
};

export const GapColumn8: Story = {
  args: {
    align: "start",
    gap: "8",
    direction: "column",
  },
};

export const GapColumn16: Story = {
  args: {
    align: "start",
    gap: "16",
    direction: "column",
  },
};

export const GapColumn32: Story = {
  args: {
    align: "start",
    gap: "32",
    direction: "column",
  },
};
