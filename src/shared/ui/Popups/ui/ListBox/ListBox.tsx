import { Fragment, memo } from "react";

import { Listbox as HListBox } from "@headlessui/react";
import { nanoid } from "@reduxjs/toolkit";

import { classNames } from "@/shared/lib/classNames/classNames";

import { PopupsDirection } from "../../../../types/ui";
import { HStack } from "../../../Stack";
import popoverCls from "../../styles/popup.module.scss";

import cls from "./ListBox.module.scss";

type ListBoxItem = {
  /**
   * @description The value of ListBoxItem
   */
  value: string;
  /**
   * @description ListBoxItem content
   */
  content: string;
  /**
   * @description Flag to disable ListBoxItem
   */
  disabled?: boolean;
};

interface ListBoxProps {
  /**
   * @description additional class.
   */
  className?: string;
  /**
   * @description List of items to render in ListBox
   */
  items?: ListBoxItem[];
  /**
   * @description label for wrapper of ListBox.
   */
  label?: string;
  /**
   * @description Flag to selected option.
   */
  selectedVal?: string;
  /**
   * @description The selected value by default in ListBox
   */
  defaultVal?: string;
  /**
   * @description Flag to disable listbox.
   */
  readonly?: boolean;
  /**
   * @description Direction of dropdown
   * @default 'bottomR'
   */
  direction?: PopupsDirection;
  /**
   * @description Callback to change value
   * @param {string} value
   */
  onChange: (value: string) => void;
}

export const ListBox = memo((props: ListBoxProps) => {
  const {
    className,
    items,
    label,
    selectedVal,
    defaultVal,
    readonly,
    direction = "bottomR",
    onChange,
  } = props;

  return (
    <HStack>
      {label && (
        <label htmlFor="box" className={cls.label}>
          {label}
        </label>
      )}
      <HListBox
        id="box"
        as="div"
        className={classNames(cls.listBox, {}, [className, popoverCls.popup])}
        value={selectedVal}
        onChange={onChange}
        disabled={readonly}
      >
        <HListBox.Button className={cls.btn} as="div">
          {selectedVal ?? defaultVal}
        </HListBox.Button>
        <HListBox.Options
          className={classNames(cls.options, {}, [popoverCls[direction]])}
        >
          {items?.map((item) => (
            <HListBox.Option
              key={nanoid()}
              value={item.value}
              disabled={item.disabled}
              as={Fragment}
            >
              {({ active, selected }) => (
                <li
                  className={classNames(
                    cls.item,
                    { [cls.active]: active, [cls.disabled]: item.disabled },
                    [],
                  )}
                >
                  {selected && "!"}
                  {item.content}
                </li>
              )}
            </HListBox.Option>
          ))}
        </HListBox.Options>
      </HListBox>
    </HStack>
  );
});
