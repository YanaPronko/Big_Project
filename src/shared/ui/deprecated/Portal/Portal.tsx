import { FC, ReactNode } from "react";

import { createPortal } from "react-dom";

interface PortalProps {
  /**
   * @description Portal content
   */
  children: ReactNode;
  /**
   * @description The element where the portal is rendered
   */
  elem?: HTMLElement;
}
/**
 * @deprecated
 * this component deprecated, see in redesigned folder
 */

export const Portal: FC<PortalProps> = (props) => {
  const { children, elem = document.body } = props;
  return createPortal(children, elem);
};
