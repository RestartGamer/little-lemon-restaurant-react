import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const isAuthenticated = user !== null;

    async function login(email, password) {
        const response = await fetch("http://localhost:5000/api/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
        });

        if (!response.ok) { //tells you whether a http  request was successfull
            throw new Error("Login failed");
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
            body: JSON.stringify({ name, email, password }),
        });
        
        if (!response.ok) {
            throw new Error("Register failed");
        }

        const data = await response.json();

        setUser(data.user);
        localStorage.setItem("token", data.token);

        return data.user;
        
        
    }

    async function checkAuth() {
        const token = localStorage.getItem("token");

        if (!token) {
            setLoading(false);
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
            setLoading(false);
        }
    }

    useEffect(() => {
        checkAuth();
    }, []);

    const value = {
        user,
        setUser,
        isAuthenticated,
        loading,
        login,
        logout,
        checkAuth,
        register,
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