import { useLayoutEffect, EffectCallback, DependencyList } from 'react';
declare const useUpdateEffect: typeof useLayoutEffect;
export default useUpdateEffect;
export declare const useBatchUpdateEffect: (...args: [EffectCallback, DependencyList?][]) => void;
