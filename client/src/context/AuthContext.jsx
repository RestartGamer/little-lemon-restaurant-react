/* eslint-disable react-refresh/only-export-components */
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { useLoading } from ".";
import { API_BASE_URL, getAuthHeaders } from "../config/api";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const { stopLoading } = useLoading();

  const isAuthenticated = user !== null;

  const login = useCallback(async (email, password) => {
    const response = await fetch(`${API_BASE_URL}/api/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Login failed");
    }

    const data = await response.json();

    setUser(data.user);
    localStorage.setItem("token", data.token);

    return data.user;
  }, []);

  const logout = useCallback(() => {
    setUser(null);
    localStorage.removeItem("token");
  }, []);

  const register = useCallback(async (
    name,
    email,
    password
  ) => {
    const response = await fetch(`${API_BASE_URL}/api/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Register failed");
    }

    const data = await response.json();

    setUser(data.user);
    localStorage.setItem("token", data.token);

    return data.user;
  }, []);

  const checkAuth = useCallback(async () => {
    const token = localStorage.getItem("token");

    if (!token) {
      stopLoading();
      return;
    }

    try {
      const response = await fetch(`${API_BASE_URL}/api/auth/me`, {
        headers: getAuthHeaders(),
      });

      if (!response.ok) {
        logout();
        return;
      }

      const data = await response.json();
      setUser(data.user);
    } catch {
      logout();
    } finally {
      stopLoading();
    }
  }, [logout, stopLoading]);

  useEffect(() => {
    const authCheckTimeout = window.setTimeout(() => {
      checkAuth();
    }, 0);

    return () => {
      window.clearTimeout(authCheckTimeout);
    };
  }, [checkAuth]);

  const value = useMemo(() => ({
    user,
    setUser,
    isAuthenticated,
    loginUser: login,
    logoutUser: logout,
    checkAuth,
    registerUser: register,
  }), [
    user,
    isAuthenticated,
    login,
    logout,
    checkAuth,
    register,
  ]);

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
