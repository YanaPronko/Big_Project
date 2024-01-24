import { useCallback, useEffect } from "react";

export const useKeyDown = (
  isOpen: boolean | undefined,
  onClose: (() => void) | undefined,
) => {
  const closeHandler = useCallback(() => {
    if (onClose) {
      onClose();
    }
  }, [onClose]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeHandler();
      }
    };
    if (isOpen) {
      window.addEventListener("keydown", onKeyDown);
    }

    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen, closeHandler]);
};
