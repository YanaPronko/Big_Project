import { memo, useCallback } from "react";

import { classNames } from "../../lib/classNames/classNames";
import { Button } from "../Button/Button";
import { CopyIcon } from "../Icons/ui/CopyIcon/CopyIcon";

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

export const Code = memo((props: CodeProps) => {
  const { className, text } = props;

  const onCopy = useCallback(() => {
    navigator.clipboard.writeText(text);
  }, [text]);

  return (
    <pre className={classNames(cls.code, {}, [className])}>
      <Button theme="outline" className={cls.copyBtn} onClick={onCopy}>
        <CopyIcon className={cls.copyIcon} />
      </Button>
      <code>{text}</code>
    </pre>
  );
});
