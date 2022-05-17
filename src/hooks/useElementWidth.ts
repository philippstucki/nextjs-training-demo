import { RefObject, useCallback, useEffect, useRef, useState } from "react";

export const useElementWidth = <T extends Element>(): [
  RefObject<T>,
  number
] => {
  const observer = useRef<ResizeObserver>();
  const domElementRef = useRef<T>(null);

  const [width, setWidth] = useState<number>(0);

  const resizeCallback = useCallback(
    (entries: ResizeObserverEntry[]) =>
      setWidth(entries[0].contentRect.width | 0),
    []
  );

  useEffect(() => {
    observer.current = new ResizeObserver(resizeCallback);
    domElementRef.current && observer.current.observe(domElementRef.current);
  }, []);

  return [domElementRef, width];
};
