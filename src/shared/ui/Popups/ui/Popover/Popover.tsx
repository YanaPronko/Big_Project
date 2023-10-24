import { ReactNode } from 'react';
import { Popover as HPopover } from '@headlessui/react';
import { classNames } from 'shared/lib/classNames/classNames';
import { PopupsDirection } from '../../../../types/ui';
import cls from './Popover.module.scss';
import popoverCls from '../../styles/popup.module.scss';

interface PopoverProps {
  className?: string;
  children: ReactNode;
  direction?: PopupsDirection;
  trigger: ReactNode;
}

export const Popover = (props: PopoverProps) => {
  const {
    className, children, direction = 'bottomR', trigger,
  } = props;

  return (
    <HPopover
      className={classNames(cls.popover, {}, [className, popoverCls.popup])}
    >
      <HPopover.Button className={popoverCls.trigger}>
        {trigger}
      </HPopover.Button>
      <HPopover.Panel
        className={classNames(cls.panel, {}, [popoverCls[direction]])}
      >
        {children}
      </HPopover.Panel>
    </HPopover>
  );
};
