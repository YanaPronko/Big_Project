import { Flex, FlexProps } from "../Flex/Flex";

type HRevStackProps = Omit<FlexProps, "direction">;

export const HRevStack = (props: HRevStackProps) => (
  <Flex {...props} direction="rowRev" />
);
