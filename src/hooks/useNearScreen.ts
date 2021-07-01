import React, { useEffect, useRef, useState } from "react";

interface HookArgs<T> {
  distance?: string,
  externalRef?: React.RefObject<T> | null,
  once?: boolean
}

const useNearScreen = <T extends Element>({ distance = '100px', externalRef, once = true }:HookArgs<T>) => {
  const [isNearScreen, setShow] = useState(false);
  const fromRef = useRef<T>(null);

  useEffect(() => {
    let observer: IntersectionObserver;
    const element = externalRef ? externalRef.current : fromRef.current;

    const onChange = (entries:IntersectionObserverEntry[], observer:IntersectionObserver) => {
      const el = entries[0];
      if (el.isIntersecting) {
        setShow(true); 
        once && observer.disconnect();
      } else {
        !once && setShow(false);
      }
    }

    Promise.resolve(
      typeof IntersectionObserver != 'undefined'
        ? IntersectionObserver
        : import('intersection-observer'!)
    ).then(() => {
      observer = new IntersectionObserver(onChange, { 
        rootMargin: distance 
      });

      if (element) observer.observe(element);
    });

    return () => observer && observer.disconnect();
  });

  return { isNearScreen, fromRef };
}

export { useNearScreen };
