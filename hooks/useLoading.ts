import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const useLoading = () => {
  const router = useRouter();
  const [pageLoading, setPageLoading] = useState<boolean | undefined | null>(false);
  useEffect(() => {
    const handleStart = () => {
      setPageLoading(true);
    };
    const handleComplete = () => {
      setPageLoading(false);
    };

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);
  }, [router]);

  return pageLoading;
};

export default useLoading;
