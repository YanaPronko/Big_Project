import { ReactNode, useCallback, useEffect } from "react";

import { useTheme } from "@/shared/lib/hooks/useTheme/useTheme";

import { classNames } from "../../lib/classNames/classNames";
import { useKeyDown } from "../../lib/hooks/useKeyDown/useKeyDown";
import {
  AnimationProvider,
  useAnimationLibs,
} from "../../lib/ui/AnimationProvider";
import { Overlay } from "../Overlay/Overlay";
import { Portal } from "../Portal/Portal";

import cls from "./Drawer.module.scss";

interface DrawerProps {
  /**
   * @description additional class.
   */
  className?: string;
  /**
   * @description Drawer content
   */
  children: ReactNode;
  /**
   * @description Flag to make drawer open (appeared).
   */
  isOpen?: boolean;
  /**
   * @description Callback to close drawer
   */
  onClose?: () => void;
}

const height = window.innerHeight - 100;

const DrawerContent = (props: DrawerProps) => {
  const { Spring, Gesture } = useAnimationLibs();
  const [{ y }, api] = Spring.useSpring(() => ({ y: height }));

  const { className, children, isOpen, onClose } = props;
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
      last,
      velocity: [, vy],
      direction: [, dy],
      movement: [, my],
      cancel,
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

  const display = y.to((py) => (py < height ? "block" : "none"));

  return (
    <Portal>
      <div className={classNames(cls.drawer, {}, [className, theme])}>
        <Overlay onClose={onClose} />
        <Spring.a.div
          className={classNames(cls.content)}
          style={{ display, bottom: `calc(-100vh + ${height - 100}px)`, y }}
          {...bind()}
        >
          {children}
        </Spring.a.div>
      </div>
    </Portal>
  );
};

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
