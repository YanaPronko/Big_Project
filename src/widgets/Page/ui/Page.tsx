import {
  MutableRefObject, ReactNode, UIEvent, memo, useRef,
} from 'react';

import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import { StateSchema } from '@/app/providers/StoreProvider';
import { UIActions, getUIScrollPosition } from '@/features/UI';
import { TestProps } from '@/shared/const/testProps';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInfiniteScroll } from '@/shared/lib/hooks/useInfiniteScroll/useInfiniteScroll';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useTrottle } from '@/shared/lib/hooks/useTrottle/useTrottle';

import cls from './Page.module.scss';

interface PageProps extends TestProps {
  className?: string;
  children: ReactNode;
  isLoading?: boolean;
  onScrollEnd?: () => void;
}

export const Page = memo((props: PageProps) => {
  const {
    className, children, onScrollEnd, isLoading,
  } = props;
  const wrapperRef = useRef() as MutableRefObject<HTMLElement>;
  const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;

  const dispatch = useAppDispatch();
  const { pathname } = useLocation();

  const scrollPosition = useSelector((state: StateSchema) => getUIScrollPosition(state, pathname));

  useInfiniteScroll({
    wrapperRef,
    triggerRef,
    callback: onScrollEnd,
  });

  useInitialEffect(() => {
    wrapperRef.current.scrollTop = scrollPosition;
  });

  const onScroll = useTrottle((e: UIEvent<HTMLDivElement>) => {
    dispatch(UIActions.setScrollPosition({ path: pathname, pos: e.currentTarget.scrollTop }));
  }, 500);

  return (
    <main
      ref={wrapperRef}
      className={classNames(cls.page, {}, [className])}
      onScroll={onScroll}
      data-testid={props['data-testid'] ?? 'Page'}
    >
      {children}
      {onScrollEnd && !isLoading ? <div ref={triggerRef} className={cls.trigger} /> : null}
    </main>
  );
});
