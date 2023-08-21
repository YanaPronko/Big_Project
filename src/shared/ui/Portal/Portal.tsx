import { FC, ReactNode } from 'react';
import { createPortal } from 'react-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Portal.module.scss';

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
