import { memo, useCallback } from "react";

import { classNames } from "../../../lib/classNames/classNames";
import { ButtonRedesigned } from "../Button/Button";
import { CopyIconRedesigned } from "../Icons/ui/CopyIcon/CopyIcon";

import cls from "./Code.module.scss";

interface CodeProps {
  /**
   * @description additional class.
   */
  className?: string;
  /**
   * @description Code content
   */
  text: string;
}

export const CodeRedesigned = memo((props: CodeProps) => {
  const { className, text } = props;

  const onCopy = useCallback(() => {
    navigator.clipboard.writeText(text);
  }, [text]);

  return (
    <pre className={classNames(cls.code, {}, [className])}>
      <ButtonRedesigned variant="clear" className={cls.copyBtn} onClick={onCopy}>
        <CopyIconRedesigned className={cls.copyIcon} />
      </ButtonRedesigned>
      <code>{text}</code>
    </pre>
  );
});
