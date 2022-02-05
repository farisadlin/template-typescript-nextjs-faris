import useWindowSize from "hooks/useWindowSize";
import { createContext, useContext, useRef, useState } from "react";
import { Styling } from "./styling";

const AppContext = createContext(null);

export function AppWrapper({ children }: any) {
  // * setting up current page limit by 10
  const pageLimit = 10;

  const windowSize = useWindowSize();
  const currPage = useRef<any>(0);

  const [pageOffset, setPageOffset] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [isError, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const sharedState = {
    currWindowsWidth: windowSize.width,
    currWindowsHeight: windowSize.height,
    styling: Styling,
    pageOffset,
    setPageOffset,
    pageLimit,
    currPage,
    isLoading,
    setLoading,
    isError,
    setError,
    errorMsg,
    setErrorMsg,
  };

  return <AppContext.Provider value={sharedState}>{children}</AppContext.Provider>;
}

export function useAppContext() {
  return useContext(AppContext);
}
