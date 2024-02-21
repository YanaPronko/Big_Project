import { memo, useCallback, useState } from "react";

import { NotificationList } from "@/entities/Notification";
import { classNames } from "@/shared/lib/classNames/classNames";
import { useDeviceDetect } from "@/shared/lib/hooks/useDeviceDetect/useDeviceDetect";
import { Button } from "@/shared/ui/deprecated/Button";
import { Drawer } from "@/shared/ui/deprecated/Drawer";
import { NotificationIcon } from "@/shared/ui/deprecated/Icons";
import { Popover } from "@/shared/ui/deprecated/Popups";

import cls from "./NotificationButton.module.scss";

interface NotificationButtonProps {
  className?: string;
}

export const NotificationButton = memo((props: NotificationButtonProps) => {
  const { className } = props;
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useDeviceDetect();

  const onOpenDrawer = useCallback(() => {
    setIsOpen(true);
  }, []);

  const onCloseDrawer = useCallback(() => {
    setIsOpen(false);
  }, []);

  const trigger = (
    <Button theme="clear" onClick={isMobile ? onOpenDrawer : undefined}>
      <NotificationIcon inverted />
    </Button>
  );

  if (isMobile) {
    return (
      <>
        {trigger}
        <Drawer isOpen={isOpen} onClose={onCloseDrawer}>
          <NotificationList />
        </Drawer>
      </>
    );
  }

  return (
    <Popover
      trigger={trigger}
      direction="bottomL"
      className={classNames("", {}, [className])}
    >
      <NotificationList className={cls.notifications} />
    </Popover>
  );
});
