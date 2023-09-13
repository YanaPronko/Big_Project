import {
  ChangeEvent, InputHTMLAttributes, memo, useEffect, useRef,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface InputProps extends HTMLInputProps{
  className?: string;
  type?: string;
  label?: string;
  autofocus?: boolean;
  placeolder?: string;
  value?: string;
  isOpen?: boolean;
  onChange?: (value: string) => void;
}

export const Input = memo((props: InputProps) => {
  const {
    className,
    type = 'text',
    value,
    onChange,
    autofocus,
    name,
    label,
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

  return (
    <div className={classNames(cls.input_wapper, {}, [className])} {...otherProps}>
      {label && (
        <label
          className={cls.label}
          htmlFor={name}
        >
          {label}
        </label>
      )}

      <input
        className={cls.input}
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={changeHandler}
        ref={ref}
      />
    </div>
  );
});
