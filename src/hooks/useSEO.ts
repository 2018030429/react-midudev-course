import { useEffect, useRef } from "react";

interface HookArgs {
  title:string,
  description: string
}

const useSEO = ({ description, title }:HookArgs) => {
  const prevTitle = useRef(document.title);
  const prevDescription = useRef(document.querySelector('meta[name="description"]')?.getAttribute('content'))

  useEffect(() => {
    const previousTitle = prevTitle.current;
    if (title) {
      document.title = `${title} | Giffy`;
    }
    return () => {document.title = previousTitle};
  }, [title]);

  useEffect(() => {
    const previousDescription = prevDescription.current;
    const metaDescription = document.querySelector('meta[name="description"]');
    if (description) {
      metaDescription?.setAttribute('content', description);
    }
    return () => metaDescription?.setAttribute('content', previousDescription!)
  }, [description]);

}

export default useSEO;
