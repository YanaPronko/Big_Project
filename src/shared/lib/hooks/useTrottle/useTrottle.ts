import { useCallback, useEffect, useRef } from 'react';

export function useTrottle(callback: (...args: any[]) => void, delay: number) {
  const trottleRef = useRef(false);
  const timer = useRef<ReturnType<typeof setTimeout>>();
  useEffect(() => () => timer.current && clearTimeout(timer.current), []);

  return useCallback((...args: any[]) => {
    if (!trottleRef.current) {
      callback(...args);
      trottleRef.current = true;

      timer.current = setTimeout(() => {
        trottleRef.current = false;
      }, delay);
    }
  }, [callback, delay]);
}
