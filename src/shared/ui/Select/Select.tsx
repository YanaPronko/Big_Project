import { ChangeEvent, memo, useMemo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Select.module.scss';

interface SelectOption {
  value: string;
  content: string;
}

interface SelectProps {
  className?: string;
  options: SelectOption[];
  label?: string;
  value?: string;
  readonly?: boolean;
  onChange?: (value: string) => void;
}

export const Select = memo((props: SelectProps) => {
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
    onChange?.(e.target.value);
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
});
