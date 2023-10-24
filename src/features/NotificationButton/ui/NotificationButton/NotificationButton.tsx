import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Popover } from 'shared/ui/Popups';
import { Button } from 'shared/ui/Button/Button';
import { NotificationIcon } from 'shared/ui/Icons';
import { NotificationList } from 'entities/Notification';
import cls from './NotificationButton.module.scss';

interface NotificationButtonProps {
  className?: string;
}

export const NotificationButton = memo((props: NotificationButtonProps) => {
  const { className } = props;
  return (
    <Popover
      trigger={(
        <Button theme="clear">
          <NotificationIcon inverted />
        </Button>
      )}
      direction="bottomL"
      className={classNames('', {}, [className])}
    >
      <NotificationList className={cls.notifications} />
    </Popover>
  );
});
