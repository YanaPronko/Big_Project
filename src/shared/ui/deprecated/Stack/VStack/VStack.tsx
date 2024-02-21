import { Flex, FlexProps } from "../Flex/Flex";

type VStackProps = Omit<FlexProps, "direction">;

/**
 * @deprecated
 * this component deprecated, see in redesigned folder
 */

export const VStack = (props: VStackProps) => (
  <Flex {...props} direction="column" />
);
