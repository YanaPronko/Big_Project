import { FC, ReactNode, useCallback } from "react";

import { Transition } from "react-transition-group";

import { classNames } from "@/shared/lib/classNames/classNames";
import { useKeyDown } from "@/shared/lib/hooks/useKeyDown/useKeyDown";
import { useTheme } from "@/shared/lib/hooks/useTheme/useTheme";

import { Overlay } from "../Overlay";
import { Portal } from "../Portal";

import cls from "./Modal.module.scss";
import { toggleFeatures } from "@/shared/lib/featureFlags";

interface ModalProps {
  /**
   * @description Moadal content
   */
  children?: ReactNode;
  /**
   * @description additional class.
   */
  className?: string;
  /**
   * @description Flag to show/hide modal
   */
  isOpen?: boolean;
  /**
   * @description Callback to close modal
   */
  onClose?: () => void;
}

export const Modal: FC<ModalProps> = (props) => {
  const { children, className, isOpen, onClose } = props;

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
          <div
            className={classNames(cls.popup, { [cls[state]]: true }, [
              className,
              theme,
              toggleFeatures({
                name: "isAppRedesigned",
                on: () => cls.popupRedesigned,
                off: ()=> cls.popupDeprecated,
              })
            ])}
          >
            <Overlay onClose={closeHandler} />
            <div className={classNames(cls.content)}>{children}</div>
          </div>
        </Portal>
      )}
    </Transition>
  );
};
