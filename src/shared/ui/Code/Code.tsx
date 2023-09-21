import { memo } from 'react';
import { CopyIcon } from 'shared/ui/CopyIcon/CopyIcon';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import cls from './Code.module.scss';

interface CodeProps {
  className?: string;
  text: string;

}

export const Code = memo((props: CodeProps) => {
  const { className, text } = props;

  return (
    <pre className={classNames(cls.code, {}, [className])}>
      <Button theme="outline" className={cls.copyBtn}>
        <CopyIcon className={cls.copyIcon} />
      </Button>
      <code>
        {text}
      </code>
    </pre>
  );
});
