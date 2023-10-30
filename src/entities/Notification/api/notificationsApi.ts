import { rtkApi } from '@/shared/api/rtk';
import { Notification } from '../model/types/notification';

const notificationsApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getNotifications: build.query<Notification[], null>({
      query: () => ({
        url: '/notifications',
      }),
    }),
  }),
});

export const useGetNotifications = notificationsApi.useGetNotificationsQuery;
