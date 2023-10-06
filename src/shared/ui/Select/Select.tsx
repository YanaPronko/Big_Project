import { ChangeEvent, useMemo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Select.module.scss';

export interface SelectOption<T extends string> {
  value: T;
  content: string;
}

interface SelectProps<T extends string>{
  className?: string;
  options: SelectOption<T>[];
  label?: string;
  value?: T;
  readonly?: boolean;
  onChange?: (value: T) => void;
}

export const Select = <T extends string>(props: SelectProps<T>) => {
  const {
    className, label, options, value, readonly, onChange, ...otherProps
  } = props;

  const optionsList = useMemo(
    () => options.map((opt) => (
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
        <label
          htmlFor="select"
          className={classNames('', mods, [])}
        >
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
};
