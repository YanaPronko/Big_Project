import { ReactNode } from 'react';

import { Popover as HPopover } from '@headlessui/react';

import { classNames } from '@/shared/lib/classNames/classNames';

import { PopupsDirection } from '../../../../types/ui';
import popoverCls from '../../styles/popup.module.scss';

import cls from './Popover.module.scss';

interface PopoverProps {
  /**
   * @description additional class.
   */
  className?: string;
  /**
   * Popover content
   */
  children: ReactNode;
  /**
   * @description Direction of dropdown
   * @default 'bottomR'
   */
  direction?: PopupsDirection;
  /**
   * @description Children of trigger Button component
   */
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
      <HPopover.Button className={popoverCls.trigger} as="div">
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
