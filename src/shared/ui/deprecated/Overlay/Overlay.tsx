import { memo } from "react";

import { classNames } from "@/shared/lib/classNames/classNames";

import cls from "./Overlay.module.scss";

interface OverlayProps {
  /**
   * @description additional class.
   */
  className?: string;
  /**
   * @description Callback to close overlay and parent element
   */
  onClose?: () => void;
}

/**
 * @deprecated
 * this component deprecated, see in redesigned folder
 */

export const Overlay = memo((props: OverlayProps) => {
  const { className, onClose } = props;

  return (
    <div
      className={classNames(cls.overlay, {}, [className])}
      onClick={onClose}
    />
  );
});
