import { useTheme } from 'app/providers/Theme';
import React, {
  FC, ReactNode, useCallback, useEffect,
} from 'react';
import { Transition } from 'react-transition-group';
import { classNames } from 'shared/lib/classNames/classNames';
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

  const closeHandler = useCallback(() => {
    if (onClose) {
      onClose();
    }
  }, [onClose]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeHandler();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', onKeyDown);
    }
    window.addEventListener('keydown', onKeyDown);

    return () => {
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [isOpen, closeHandler]);

  const onContentClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

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
              onClick={onContentClick}
            >
              {children}
            </div>
          </div>
        </Portal>
      )}
    </Transition>
  );
};
