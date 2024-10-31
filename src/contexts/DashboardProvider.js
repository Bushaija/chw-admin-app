"use client";
import { createContext, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useCookies } from "react-cookie";
import axiosInstance from "@/utils/axiosInstance";
import { getSession } from "@/utils/lib";

// Create the context
export const DashboardContext = createContext();

// Context Provider component
export const DashboardProvider = ({ children }) => {
    const [cookies, setCookies, removeCookie] = useCookies(['session_id'])
    const [admin, setAdmin] = useState(null);
    const [advisors, setAdvisors] = useState([]);
    const [stockLevels, setStockLevels] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const router = useRouter();

    const checkSession = async () => {
        const session = await getSession()
        if (!session) {
            setError("Please log in.");
            router.push("/auth/login");
            return false;
        }
        return true;
    };

    // Function to fetch dashboard data
    const fetchDashboardData = async () => {
        try {
            setLoading(true);  // Reset loading state on data fetch
            const response = await axiosInstance.get("/dashboard");
            const { admin, advisors, stock_levels } = response.data;
            setAdmin(admin);
            setAdvisors(advisors);
            setStockLevels(stock_levels);
        } catch (err) {
            setError("Failed to load dashboard data. Please try again later.");
        } finally {
            setLoading(false);  // Ensure loading is false after fetch attempt
        }
    };

    // Effect to check session and fetch data
    useEffect(() => {
        if (checkSession()) {
            fetchDashboardData();
        } else {
            setLoading(false);  // Set loading false if redirected
        }
    }, []);

    // Provide the context value to the children components
    return (
        <DashboardContext.Provider value={{ admin, advisors, stockLevels, loading, error }}>
            {children}
        </DashboardContext.Provider>
    );
};
