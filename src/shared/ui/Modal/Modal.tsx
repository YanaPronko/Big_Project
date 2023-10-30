import {
  FC, ReactNode, useCallback,
} from 'react';
import { Transition } from 'react-transition-group';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useTheme } from '@/app/providers/Theme';
import { useKeyDown } from '@/shared/lib/hooks/useKeyDown/useKeyDown';
import { Overlay } from '../Overlay/Overlay';
import { Portal } from '../Portal/Portal';
import cls from './Modal.module.scss';

interface ModalProps {
  children?: ReactNode;
  className?: string;
  isOpen?: boolean;
  onClose?: ()=> void
}

export const Modal: FC<ModalProps> = (props) => {
  const {
    children,
    className,
    isOpen,
    onClose,
  } = props;

  const { theme } = useTheme();

  useKeyDown(isOpen, onClose);

  const closeHandler = useCallback(() => {
    if (onClose) {
      onClose();
    }
  }, [onClose]);

  return (
    <Transition
      appear={isOpen}
      in={isOpen}
      timeout={300}
      mountOnEnter
      unmountOnExit
    >
      {(state) => (
        <Portal>
          <div className={classNames(cls.popup, { [cls[state]]: true }, [className, theme])}>
            <Overlay onClose={closeHandler} />
            <div
              className={classNames(cls.content)}
            >
              {children}
            </div>
          </div>
        </Portal>
      )}
    </Transition>
  );
};
