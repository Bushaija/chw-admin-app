"use client"
import UserCard from "@/components/UserCard";
import { useState, useEffect } from "react";
import axiosInstance from "@/utils/axiosInstance";
import axios from "axios";

const AdminPage = () => {
    const [dashboardData, setDashboardData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [sessionId, setSessionId] = useState(null)

    const getDashboardData = async () => {
        try {
            const session_id = localStorage.getItem("session_id");
            setSessionId(session_id)
            const response = await axios.get("/api/dashboard", {
                headers: {
                    "X-Session-ID": session_id
                }
            });
            console.log("Dashboard data:: ", response.data);
            return response.data;
        } catch(error) {
            console.error("Error fetching dashboard data", error);
            throw error;
        }
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getDashboardData();
                setDashboardData(data);
                setLoading(false)
            } catch(err) {
                setError(err.message);
                setLoading(false);
            }
        }
        fetchData();
    }, []);

    if(loading) return <div>Loadding...</div>;
    if(error) return <div>Error: {error}<br/> {sessionId}</div>;


    return (
        <section className="p-4 flex gap-4 flex-col md:flex-row">
            {/* LEFT  */}
            <div className="w-full lg:w-2/3 flex flex-col gap-8">
                {/* USER CARDS */}
                <div className="flex gap-4 justify-between flex-wrap">
                    <UserCard type="Total CHW" />
                    <UserCard type="Commodities" />
                    <UserCard type="Recent Orders" />
                </div>
            </div>
        </section>
    )
}

export default AdminPage;