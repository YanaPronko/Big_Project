import { Fragment, memo } from 'react';
import { nanoid } from '@reduxjs/toolkit';
import { Listbox as HListBox } from '@headlessui/react';
import { classNames } from 'shared/lib/classNames/classNames';
import { HStack } from '../Stack';
import cls from './ListBox.module.scss';

type ListBoxItem = {
  value: string,
  content: string;
  disabled?: boolean;
}

type DropdownDirection = 'top' | 'bottom';

interface ListBoxProps {
  className?: string;
  items?: ListBoxItem[];
  label?: string;
  selectedVal?: string;
  defaultVal?: string;
  readonly?: boolean;
  direction?: DropdownDirection;
  onChange: (value: string) => void;
}

export const ListBox = memo((props: ListBoxProps) => {
  const {
    className, items, label, selectedVal, defaultVal, readonly, direction = 'bottom', onChange,
  } = props;

  return (
    <HStack>
      {label && <label htmlFor="box" className={cls.label}>{label}</label>}
      <HListBox
        id="box"
        as="div"
        className={classNames(cls.listBox, {}, [className])}
        value={selectedVal}
        onChange={onChange}
        disabled={readonly}
      >
        <HListBox.Button className={cls.trigger}>
          {selectedVal ?? defaultVal}
        </HListBox.Button>
        <HListBox.Options
          className={classNames(cls.options, {}, [cls[direction]])}
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
                  {selected && '!'}
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
