import {
  ChangeEvent,
  InputHTMLAttributes,
  ReactNode,
  memo,
  useEffect,
  useRef,
} from "react";

import { classNames } from "@/shared/lib/classNames/classNames";

import { HStack } from '../Stack';

import cls from "./Input.module.scss";

type HTMLInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "value" | "onChange" | "readonly"
>;

interface InputProps extends HTMLInputProps {
  /**
   * @description additional class.
   */
  className?: string;
  /**
   * @description type of input.
   * @default type="text"
   */
  type?: string;
  /**
   * @description label for input.
   */
  label?: string;
  /**
   * @description Flag to make input with/without autofocus.
   */
  autofocus?: boolean;
  /**
   * @description placeholder for input.
   */
  placeholder?: string;
  /**
   * @description The value in Input
   */
  value?: string | number;
  /**
   * @description Flag to make parent element opened/closed.
   */
  isOpen?: boolean;
  /**
   * @description Flag to disable Input and to add readonly class
   */
  readonly?: boolean;

  /**
   * @description element(icon) in left side
   */
  addonLeft?: ReactNode;
  /**
   * @description element(icon) in right side
   */
  addonRight?: ReactNode;
  /**
   * @description Callback to change value in input
   * @param {string} value
   */
  onChange?: (value: string) => void;
}

export const InputRedesigned = memo((props: InputProps) => {
  const {
    className,
    type = "text",
    value,
    onChange,
    autofocus,
    name,
    label,
    readonly,
    placeholder,
    addonLeft,
    addonRight,
    ...otherProps
  } = props;

  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (autofocus) {
      ref.current?.focus();
    }
  }, [autofocus]);

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  };

  const mods = {
    [cls.readonly]: readonly,
    [cls.withAddonRight]: Boolean(addonRight),
    [cls.withAddonLeft]: Boolean(addonLeft)
  };

  return (
    <HStack gap="8" max>
      {label && (
        <label className={cls.label} htmlFor={name}>
          {label}
        </label>
      )}
      <div className={classNames(cls.input_wrapper, mods, [className])}>
        {addonLeft && <div className={cls.addonLeft}>{addonLeft}</div>}
        <input
          className={cls.input}
          id={name}
          name={name}
          type={type}
          value={value}
          readOnly={readonly}
          placeholder={placeholder}
          onChange={changeHandler}
          ref={ref}
          {...otherProps}
        />
      {addonRight && <div className={cls.addonRight}>{addonRight}</div>}
      </div>
    </HStack>
    );
});
