import { Flex, FlexProps } from "../Flex/Flex";

type VRevStackProps = Omit<FlexProps, "direction">;

/**
 * @deprecated
 * this component deprecated, see in redesigned folder
 */

export const VRevStack = (props: VRevStackProps) => (
  <Flex {...props} direction="columnRev" />
);
