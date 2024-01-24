import { ReactNode, memo, Fragment } from "react";

import { Menu } from "@headlessui/react";
import { nanoid } from "@reduxjs/toolkit";

import { classNames } from "@/shared/lib/classNames/classNames";

import { PopupsDirection } from "../../../../types/ui";
import { AppLink } from "../../../AppLink/AppLink";
import popoverCls from "../../styles/popup.module.scss";

import cls from "./Dropdown.module.scss";

export type DropdownItem = {
  /**
   * @description DropdownItem content
   */
  content?: ReactNode;
  /**
   * @description Flag to disable DropdownItem
   */
  disabled?: boolean;
  /**
   * @description href for link if DropdownItem is a link
   */
  href?: string;
  /**
   * @description Callback to onClick attribute if DropdownItem is a button
   */
  onClick?: () => void;
};

interface DropdownProps {
  /**
   * @description additional class.
   */
  className?: string;
  /**
   * @description List of items to render in dropdown
   */
  items: DropdownItem[];
  /**
   * @description Direction of dropdown
   * @default 'bottomR'
   */
  direction?: PopupsDirection;
  /**
   * @description Children of trigger Button component
   */
  trigger?: ReactNode;
}

export const Dropdown = memo((props: DropdownProps) => {
  const { className, items, direction = "bottomR", trigger } = props;

  return (
    <Menu
      as="div"
      className={classNames("", {}, [className, popoverCls.popup])}
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
              className={classNames(cls.item, { [cls.active]: active }, [])}
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
