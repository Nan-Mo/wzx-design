import { useLayoutEffect, useRef, EffectCallback, DependencyList } from 'react';

const useUpdateEffect: typeof useLayoutEffect = (effect, deps) => {
  const mounted = useRef(false);

  useLayoutEffect(() => {
    if (mounted.current) return effect();

    mounted.current = true;
  }, deps);
};

export default useUpdateEffect;

export const useBatchUpdateEffect = (...args: [EffectCallback, DependencyList?][]) => {
  const mounted = useRef(false);

  for (const [effect, deps] of args) {
    useLayoutEffect(() => {
      if (mounted.current) return effect();
    }, deps);
  }

  useLayoutEffect(() => {
    mounted.current = true;
  }, []);
};
