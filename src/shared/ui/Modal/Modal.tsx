import React, {
  FC, ReactNode, useCallback, useEffect,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Portal } from 'shared/ui/Portal/Portal';
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

  const mods: Record<string, boolean> = {
    [cls.opened]: isOpen,
  };

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
    <Portal>
      <div className={classNames(cls.modal, mods, [className])}>
        <div className={classNames(cls.overlay, {})} onClick={closeHandler}>
          <div
            className={classNames(cls.content)}
            onClick={onContentClick}
          >
            {children}
          </div>
        </div>
      </div>
    </Portal>
  );
};
