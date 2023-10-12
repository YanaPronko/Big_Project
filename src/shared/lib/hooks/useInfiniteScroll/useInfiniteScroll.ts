import { MutableRefObject, useEffect } from 'react';

interface useInfiniteScrollOptions {
  callback?: () => void;
  wrapperRef: MutableRefObject<HTMLElement>;
  triggerRef: MutableRefObject<HTMLDivElement>;
}

export const useInfiniteScroll = ({
  callback,
  triggerRef,
  wrapperRef,
}: useInfiniteScrollOptions) => {
  useEffect(() => {
    let observer: IntersectionObserver | null;

    const wrappElem = wrapperRef.current;
    const triggerElem = triggerRef.current;
    if (callback) {
      const options = {
        root: wrappElem,
        rootMargin: '0px',
        threshold: 1.0,
      };

      observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          callback();
        }
      }, options);

      observer.observe(triggerElem);
    }

    return () => {
      if (observer && triggerElem) {
        observer.unobserve(triggerElem);
      }
    };
  }, [callback, triggerRef, wrapperRef]);
};
