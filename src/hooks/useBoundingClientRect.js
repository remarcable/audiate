import { useEffect, useState } from "react";
import debounce from "just-debounce-it";

export const useBoundingClientRect = (ref) => {
  const [boundingClientRect, setBoundingClientRect] = useState(null);

  useEffect(() => {
    if (!ref.current) return;

    const resizeObserver = new ResizeObserver(
      debounce(() => {
        setBoundingClientRect(ref.current.getBoundingClientRect());
      }, 500)
    );

    resizeObserver.observe(document.body);

    return () => {
      resizeObserver.unobserve(document.body);
    };
  }, [ref, setBoundingClientRect]);

  return boundingClientRect;
};
