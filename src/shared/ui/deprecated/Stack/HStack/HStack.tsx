import { Flex, FlexProps } from "../Flex/Flex";

type HStackProps = Omit<FlexProps, "direction">;

/**
 * @deprecated
 * this component deprecated, see in redesigned folder
 */

export const HStack = (props: HStackProps) => (
  <Flex {...props} direction="row" />
);
