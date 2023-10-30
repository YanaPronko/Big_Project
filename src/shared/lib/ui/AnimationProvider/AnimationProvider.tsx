import {
  createContext, ReactNode, useContext, useEffect, useMemo, useRef, useState,
} from 'react';

type SpringType = typeof import('@react-spring/web');
type GestureType = typeof import('@use-gesture/react');

interface AnimationContextPayload {
  Gesture?: GestureType;
  Spring?: SpringType;
  isLoaded?: boolean;
}

const AnimationContext = createContext<AnimationContextPayload>({});

const getAsyncAnimationModules = () => Promise.all([
  import('@react-spring/web'),
  import('@use-gesture/react'),
]);

// as Required<AnimationContextPayload> для того, чтобы не проверять потом наличие библы, тк она у нас необязятельный пропс
export const useAnimationLibs = () => useContext(AnimationContext) as Required<AnimationContextPayload>;

export const AnimationProvider = ({ children }: { children: ReactNode }) => {
  const gestureRef = useRef<GestureType>();
  const springRef = useRef<SpringType>();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    getAsyncAnimationModules().then(([Spring, Gesture]) => {
      springRef.current = Spring;
      gestureRef.current = Gesture;
      setIsLoaded(true);
    });
  }, []);

  const defaultValue = useMemo(() => ({
    Gesture: gestureRef.current,
    Spring: springRef.current,
    isLoaded,
  }), [isLoaded]);

  return (
    <AnimationContext.Provider value={defaultValue}>
      {children}
    </AnimationContext.Provider>
  );
};
