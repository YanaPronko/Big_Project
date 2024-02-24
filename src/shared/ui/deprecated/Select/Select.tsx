import { ChangeEvent, useMemo } from "react";

import { classNames } from "@/shared/lib/classNames/classNames";

import { typedMemo } from "../../../const/typedMemo";

import cls from "./Select.module.scss";
import { useTranslation } from "react-i18next";

export interface SelectOption<T extends string> {
  /**
   * @description The value of SelectOption
   */
  value: T;
  /**
   * @description SelectOption content
   */
  content: string;
}

interface SelectProps<T extends string> {
  /**
   * @description additional class.
   */
  className?: string;
  /**
   * @description List of items to render in Select
   */
  options: SelectOption<T>[];
  /**
   * @description Label for the Select
   */
  label?: string;
  /**
   * @description The value of items in Select
   */
  value?: T;
  /**
   * @description Flag to disable Select and to add readonly class
   */
  readonly?: boolean;
  /**
   * @description Callback to change value
   */
  onChange?: (value: T) => void;
}

/**
 * @deprecated
 * this component deprecated, see in redesigned folder
 */

export const Select = typedMemo(<T extends string>(props: SelectProps<T>) => {
  const {
    className,
    label,
    options,
    value,
    readonly,
    onChange,
    ...otherProps
  } = props;

  const { t } = useTranslation("article");

  const optionsList = useMemo(
    () =>
      options.map((opt) => (
        <option className={cls.option} value={opt.value} key={opt.value}>
          {opt.content}
        </option>
      )),
    [options],
  );

  const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    onChange?.(e.target.value as T);
  };

  const mods = {
    [cls.readonly]: readonly,
  };

  return (
    <div className={classNames(cls.wrapper, {}, [className])}>
      {label && (
        <label htmlFor="select" className={classNames("", mods, [])}>
          {`${label}>`}
        </label>
      )}
      <select
        id="select"
        className={cls.select}
        value={value}
        disabled={readonly}
        onChange={onChangeHandler}
        {...otherProps}
      >
        {optionsList}
      </select>
    </div>
  );
});
