import { Flex, FlexProps } from "../Flex/Flex";

type VRevStackProps = Omit<FlexProps, "direction">;

export const VRevStack = (props: VRevStackProps) => (
  <Flex {...props} direction="columnRev" />
);
