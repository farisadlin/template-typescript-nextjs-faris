import { useEffect, useState } from "react";

const useWindowSize = () => {
  // * setting up current window size so we can use conditionally depends on current window size width and height
  const [windowSize, setWindowSize] = useState<any | object | number | string | undefined | null>({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      };

      window.addEventListener("resize", handleResize);

      handleResize();
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  return windowSize;
};

export default useWindowSize;
