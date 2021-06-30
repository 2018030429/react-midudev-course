import { useEffect, useRef, useState } from "react";

const useNearScreen = (distance = '100px') => {
  const elementRef = useRef<HTMLDivElement>(null);
  const [isNearScreen, setShow] = useState(false);

  useEffect(() => {
    const onChange = (entries:IntersectionObserverEntry[], observer:IntersectionObserver) => {
      const element = entries[0];
      if (element.isIntersecting) {
        setShow(true); 
        observer.disconnect();
      }
    }

    const observer = new IntersectionObserver(onChange, { rootMargin: distance });
    observer.observe(elementRef.current!);
    return () => observer.disconnect();
  });

  return { isNearScreen, elementRef };
}

export { useNearScreen };
