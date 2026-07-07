/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState, useRef } from "react";
import { Box, CircularProgress } from "@mui/material";

const LoadingContext = createContext(null);

const MIN_LOADING_TIME = 1800;

export function LoadingProvider({ children }) {
    const [isPageLoading, setIsPageLoading] = useState(false);
    const [loadingMessage, setLoadingMessage] = useState("");

    const loadingStartTimeRef = useRef(null);

    function startLoading(message = "Loading...") {
        loadingStartTimeRef.current = Date.now()
        setLoadingMessage(message);
        setIsPageLoading(true);
    }

    function stopLoading() {
        const now = Date.now();
        const elapsedTime = now - loadingStartTimeRef.current;
        const remainingTime = Math.max(MIN_LOADING_TIME - elapsedTime, 0)
        setTimeout(() => {
            setIsPageLoading(false);
            setLoadingMessage("");
            loadingStartTimeRef.current = null;
        }, remainingTime)

    }

    return (
        <LoadingContext.Provider
            value={{
                isPageLoading,
                loadingMessage,
                startLoading,
                stopLoading,
            }}
        >
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
                        zIndex: 3,
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