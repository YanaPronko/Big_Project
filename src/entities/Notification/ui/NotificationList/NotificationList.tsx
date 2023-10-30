import { memo } from 'react';
import { nanoid } from '@reduxjs/toolkit';
import { classNames } from '@/shared/lib/classNames/classNames';
import { VStack } from '@/shared/ui/Stack';
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton';
import { useGetNotifications } from '../../api/notificationsApi';
import { NotificationItem } from '../NotificationItem/NotificationItem';

interface NotificationListProps {
  className?: string;
}

export const NotificationList = memo((props: NotificationListProps) => {
  const { className } = props;
  const { data: notifications, isLoading } = useGetNotifications(null, { pollingInterval: 500 });

  if (isLoading) {
    return (
      <VStack
        gap="16"
        max
        className={classNames('', {}, [className])}
      >
        <Skeleton width="100%" borderRadius="8px" height="80px" />
        <Skeleton width="100%" borderRadius="8px" height="80px" />
        <Skeleton width="100%" borderRadius="8px" height="80px" />
      </VStack>
    );
  }

  return (
    <VStack gap="16" max align="stretch" className={classNames('', {}, [className])}>
      {notifications?.map((notification) => (<NotificationItem key={nanoid()} item={notification} />))}
    </VStack>
  );
});
