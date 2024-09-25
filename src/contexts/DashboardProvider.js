"use client"
import { createContext, useState, useEffect } from "react";
import axiosInstance from "@/utils/axiosInstance";

// Create the context
export const DashboardContext = createContext();

// Context Provider component
export const DashboardProvider = ({ children }) => {
    const [admin, setAdmin] = useState(null);
    const [advisors, setAdvisors] = useState([]);
    const [stockLevels, setStockLevels] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Function to fetch dashboard data
    const getDashboardData = async () => {
        try {
            const response = await axiosInstance.get("/dashboard");
            const { admin, advisors, stock_levels } = response.data;
            setAdmin(admin);
            setAdvisors(advisors);
            setStockLevels(stock_levels);
            setLoading(false);
        } catch (err) {
            setError(err.message);
            setLoading(false);
        }
    };

    useEffect(() => {
        getDashboardData();
    }, []);

    // Provide the context value to the children components
    return (
        <DashboardContext.Provider value={{ admin, advisors, stockLevels, loading, error }}>
            {children}
        </DashboardContext.Provider>
    );
};
