import { ReactNode, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Transition } from 'react-transition-group';
import { useTheme } from 'app/providers/Theme';
import { Portal } from '../Portal/Portal';
import cls from './Drawer.module.scss';
import { Overlay } from '../Overlay/Overlay';

interface DrawerProps {
  className?: string;
  children?: ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
}

export const Drawer = memo((props: DrawerProps) => {
  const {
    className, children, isOpen, onClose,
  } = props;
  const { theme } = useTheme();

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
          <div
            className={classNames(cls.drawer, { [cls[state]]: true }, [className, theme])}
          >
            <Overlay onClose={onClose} />
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
});
