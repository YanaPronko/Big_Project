import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Overlay.module.scss';

interface OverlayProps {
  className?: string;
  onClose?: () => void;
}

export const Overlay = memo((props: OverlayProps) => {
  const { className, onClose } = props;

  return (
    <div className={classNames(cls.overlay, {}, [className])} onClick={onClose} />
  );
});
