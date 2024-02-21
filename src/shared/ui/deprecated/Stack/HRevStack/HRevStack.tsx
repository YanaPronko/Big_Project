import { Flex, FlexProps } from "../Flex/Flex";

type HRevStackProps = Omit<FlexProps, "direction">;

/**
 * @deprecated
 * this component deprecated, see in redesigned folder
 */

export const HRevStack = (props: HRevStackProps) => (
  <Flex {...props} direction="rowRev" />
);
