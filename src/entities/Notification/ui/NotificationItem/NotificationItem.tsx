import { memo } from "react";

import { classNames } from "@/shared/lib/classNames/classNames";
import { Card } from "@/shared/ui/deprecated/Card";
import { Text } from "@/shared/ui/deprecated/Text";

import { Notification } from "../../model/types/notification";
import { ToggleFeatures } from "@/shared/lib/featureFlags";
import { CardRedesigned } from "@/shared/ui/redesigned/Card";
import { TextRedesigned } from "@/shared/ui/redesigned/Text";

interface NotificationItemProps {
  className?: string;
  item: Notification;
}

export const NotificationItem = memo((props: NotificationItemProps) => {
  const { className, item } = props;

  const content = (
    <ToggleFeatures
      feature="isAppRedesigned"
      on={
        <CardRedesigned className={classNames("", {}, [className])} variant="outlined">
          <TextRedesigned title={item.title} text={item.description} />
        </CardRedesigned>
      }
      off={
        <Card className={classNames("", {}, [className])} theme="outlined">
          <Text title={item.title} text={item.description} />
        </Card>
      }
    />
  );

  if (item.href) {
    return (
      <a href={item.href} target="_blank" rel="noreferrer">
        {content}
      </a>
    );
  }

  return content;
});
