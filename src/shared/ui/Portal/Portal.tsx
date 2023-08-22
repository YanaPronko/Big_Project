import { FC, ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
  children: ReactNode;
  elem?: HTMLElement;
}

export const Portal: FC<PortalProps> = (props) => {
  const {
    children,
    elem = document.body,
  } = props;

  return createPortal(children, elem);
};
