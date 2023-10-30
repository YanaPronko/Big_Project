import {
  ReactNode, memo, useCallback, useEffect,
} from 'react';
import { useTheme } from 'app/providers/Theme';
import { classNames } from '../../lib/classNames/classNames';
import { useKeyDown } from '../../lib/hooks/useKeyDown/useKeyDown';
import { Portal } from '../Portal/Portal';
import cls from './Drawer.module.scss';
import { Overlay } from '../Overlay/Overlay';
import { AnimationProvider, useAnimationLibs } from '../../lib/ui/AnimationProvider';

interface DrawerProps {
  className?: string;
  children?: ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
}

const height = window.innerHeight - 100;

const DrawerContent = memo((props: DrawerProps) => {
  const { Spring, Gesture } = useAnimationLibs();
  const [{ y }, api] = Spring.useSpring(() => ({ y: height }));
  const transition = Spring.useTransition(Overlay, {
    from: {
      y: '100%',
    },
    enter: {
      y: 0,
    },
    leave: {
      y: '100%',
    },
  });

  const {
    className, children, isOpen, onClose,
  } = props;
  const { theme } = useTheme();

  useKeyDown(isOpen, onClose);

  const openDrawer = useCallback(() => {
    api.start({ y: 0, immediate: false });
  }, [api]);

  const onCloseDrawer = (velocity = 0) => {
    api.start({
      y: height,
      immediate: false,
      config: { ...Spring.config.stiff, velocity },
      onResolve: onClose,
    });
  };

  useEffect(() => {
    if (isOpen) {
      openDrawer();
    }
  }, [openDrawer, isOpen]);

  const bind = Gesture.useDrag(
    ({
      last, velocity: [, vy], direction: [, dy], movement: [, my], cancel,
    }) => {
      if (my < -70) cancel();

      if (last) {
        if (my > height * 0.5 || (vy > 0.5 && dy > 0)) {
          onCloseDrawer();
        } else {
          openDrawer();
        }
      } else {
        api.start({ y: my, immediate: true });
      }
    },
    {
      from: () => [0, y.get()],
      filterTaps: true,
      bounds: { top: 0 },
      rubberband: true,
    },
  );

  if (!isOpen) {
    return null;
  }

  const visibility = y.to((py) => (py < height ? 'visible' : 'hidden'));

  const AnimatedOverlay = Spring.animated(Overlay);
  return (
    <Portal>
      <div
        className={classNames(cls.drawer, { }, [className, theme])}
      >
        {transition((style) => (
          <AnimatedOverlay
            onClose={onClose}
            style={style}
          />
        ))}
        <Spring.a.div
          className={classNames(cls.content)}
          style={{ visibility, bottom: `calc(-100vh + ${height - 100}px)`, y }}
          {...bind()}
        >
          {children}
        </Spring.a.div>
      </div>
    </Portal>
  );
});

const DrawerAsync = (props: DrawerProps) => {
  const { isLoaded } = useAnimationLibs();

  if (!isLoaded) {
    return null;
  }

  return <DrawerContent {...props} />;
};

export const Drawer = (props: DrawerProps) => (
  <AnimationProvider>
    <DrawerAsync {...props} />
  </AnimationProvider>
);
