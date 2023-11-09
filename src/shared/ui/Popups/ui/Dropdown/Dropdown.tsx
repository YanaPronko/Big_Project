import { ReactNode, memo, Fragment } from 'react';
import { nanoid } from '@reduxjs/toolkit';
import { Menu } from '@headlessui/react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { PopupsDirection } from '../../../../types/ui';
import { AppLink } from '../../../AppLink/AppLink';
import cls from './Dropdown.module.scss';
import popoverCls from '../../styles/popup.module.scss';

export type DropdownItem = {
  content?: ReactNode;
  disabled?: boolean;
  href?: string;
  onClick?: () => void;
}

interface DropdownProps {
  className?: string;
  items: DropdownItem[];
  direction?: PopupsDirection;
  trigger?: ReactNode;
}

export const Dropdown = memo((props: DropdownProps) => {
  const {
    className, items, direction = 'bottomR', trigger,
  } = props;

  return (
    <Menu
      as="div"
      className={classNames('', {}, [className, popoverCls.popup])}
    >
      <Menu.Button className={popoverCls.trigger} as="div">
        {trigger}
      </Menu.Button>
      <Menu.Items className={classNames(cls.menu, {}, [popoverCls[direction]])}>
        {items.map((item) => {
          const content = ({ active }: { active: boolean }) => (
            <button
              type="button"
              disabled={item.disabled}
              onClick={item.onClick}
              className={classNames(
                cls.item,
                { [cls.active]: active },
                [],
              )}
            >
              {item.content}
            </button>
          );
          if (item.href) {
            return (
              <Menu.Item
                as={AppLink}
                to={item.href}
                disabled={item.disabled}
                key={nanoid()}
              >
                {content}
              </Menu.Item>
            );
          }
          return (
            <Menu.Item as={Fragment} disabled={item.disabled} key={nanoid()}>
              {content}
            </Menu.Item>
          );
        })}
      </Menu.Items>
    </Menu>
  );
});