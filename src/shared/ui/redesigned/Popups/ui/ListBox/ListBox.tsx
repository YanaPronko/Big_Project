import { Fragment, useMemo } from "react";

import { Listbox as HListBox } from "@headlessui/react";
import { nanoid } from "@reduxjs/toolkit";

import { typedMemo } from "@/shared/const/typedMemo";
import { classNames } from "@/shared/lib/classNames/classNames";

import { PopupsDirection } from "../../../../../types/ui";
import { ButtonRedesigned } from "../../../Button";
import { ArrowDownIconRedesigned } from "../../../Icons";
import { HStack } from "../../../Stack";
import popoverCls from "../../styles/popup.module.scss";

import cls from "./ListBox.module.scss";

type ListBoxItem<T extends string> = {
  /**
   * @description The value of ListBoxItem
   */
  value: T;
  /**
   * @description ListBoxItem content
   */
  content: string;
  /**
   * @description Flag to disable ListBoxItem
   */
  disabled?: boolean;
};

interface ListBoxProps<T extends string> {
  /**
   * @description additional class.
   */
  className?: string;
  /**
   * @description List of items to render in ListBox
   */
  items?: ListBoxItem<T>[];
  /**
   * @description label for wrapper of ListBox.
   */
  label?: string;
  /**
   * @description Flag to selected option.
   */
  selectedVal?: T;
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
  onChange: (value: T) => void;
}

export const ListBoxRedesigned = typedMemo(
  <T extends string>(props: ListBoxProps<T>) => {
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

    const selectedItem = useMemo(
      () => items?.find((item) => item.value === selectedVal),
      [items, selectedVal],
    );

    return (
      <HStack gap="4" max>
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
          <HListBox.Button as="div">
            <ButtonRedesigned
              className={cls.optionText} variant="filled"
              disabled={readonly}
              addonRight={<ArrowDownIconRedesigned />}
            >
              {selectedItem?.content ?? defaultVal}
            </ButtonRedesigned>
          </HListBox.Button>
          <HListBox.Options
            className={classNames(cls.options, {}, [popoverCls[direction], popoverCls.menu])}
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
                      {
                        [popoverCls.active]: active,
                        [popoverCls.disabled]: item.disabled,
                        [cls.selected]: selected,
                      },
                      [],
                    )}
                  >
                    {selected}
                    {item.content}
                  </li>
                )}
              </HListBox.Option>
            ))}
          </HListBox.Options>
        </HListBox>
      </HStack>
    );
  },
);
