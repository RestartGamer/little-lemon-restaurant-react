import { createContext, useContext, useEffect, useState } from "react";
import { useLoading } from "."

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const {
        isPageLoading,
        loadingMessage,
        startLoading,
        stopLoading
    } = useLoading();


    const isAuthenticated = user !== null;

    async function login(email, password) {
        const response = await fetch("http://localhost:5000/api/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
        });

        if (!response.ok) {
            const errorData = await response.json()
            throw new Error(errorData.message || "Login failed");
        }

        const data = await response.json();

        setUser(data.user);

        localStorage.setItem("token", data.token);

        return data.user;
    }

    function logout() {
        setUser(null);
        localStorage.removeItem("token");
    }

    async function register(email, password) {

        const response = await fetch("http://localhost:5000/api/auth/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
        });

        if (!response.ok) {
            const errorData = await response.json()
            throw new Error(errorData.message || "Register failed");
        }

        const data = await response.json();

        setUser(data.user);
        localStorage.setItem("token", data.token);

        return data.user;


    }

    async function checkAuth() {
        const token = localStorage.getItem("token");

        if (!token) {
            stopLoading();
            return;
        }

        try {
            const response = await fetch("http://localhost:5000/api/auth/me", {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            if (!response.ok) {
                logout();
                return;
            }

            const data = await response.json();

            setUser(data.user);
        } catch (error) {
            logout();
        } finally {
            stopLoading();
        }
    }

    useEffect(() => {
        checkAuth();
    }, []);

    const value = {
        user,
        setUser,
        isAuthenticated,
        loginUser: login,
        logoutUser: logout,
        checkAuth,
        registerUser: register,
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    return useContext(AuthContext);
}