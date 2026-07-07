/* eslint-disable react-refresh/only-export-components */
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { Box, CircularProgress } from "@mui/material";

const LoadingContext = createContext(null);

const MIN_LOADING_TIME = 1800;

export function LoadingProvider({ children }) {
  const [isPageLoading, setIsPageLoading] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState("");

  const loadingStartTimeRef = useRef(null);
  const loadingTimeoutRef = useRef(null);

  const startLoading = useCallback((message = "Loading...") => {
    window.clearTimeout(loadingTimeoutRef.current);
    loadingStartTimeRef.current = Date.now();
    setLoadingMessage(message);
    setIsPageLoading(true);
  }, []);

  const stopLoading = useCallback(() => {
    const elapsedTime = loadingStartTimeRef.current
      ? Date.now() - loadingStartTimeRef.current
      : MIN_LOADING_TIME;

    const remainingTime = Math.max(
      MIN_LOADING_TIME - elapsedTime,
      0
    );

    window.clearTimeout(loadingTimeoutRef.current);

    loadingTimeoutRef.current = window.setTimeout(() => {
      setIsPageLoading(false);
      setLoadingMessage("");
      loadingStartTimeRef.current = null;
    }, remainingTime);
  }, []);

  useEffect(() => {
    return () => {
      window.clearTimeout(loadingTimeoutRef.current);
    };
  }, []);

  const value = useMemo(() => ({
    isPageLoading,
    loadingMessage,
    startLoading,
    stopLoading,
  }), [
    isPageLoading,
    loadingMessage,
    startLoading,
    stopLoading,
  ]);

  return (
    <LoadingContext.Provider value={value}>
      {children}

      {isPageLoading && (
        <Box
          sx={{
            position: "fixed",
            inset: 0,
            bgcolor: "rgba(255, 255, 255, 0.65)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1300,
          }}
        >
          <CircularProgress />

          {loadingMessage && (
            <Box sx={{ mt: 2 }}>
              {loadingMessage}
            </Box>
          )}
        </Box>
      )}
    </LoadingContext.Provider>
  );
}

export function useLoading() {
  return useContext(LoadingContext);
}
