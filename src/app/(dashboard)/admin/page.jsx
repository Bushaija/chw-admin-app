"use client"
import UserCard from "@/components/UserCard";
import { useContext, useState, useEffect } from "react";
import { DashboardContext } from "@/contexts/DashboardProvider";

const AdminPage = () => {
    const { admin, advisors, stockLevels } = useContext(DashboardContext);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!admin && !advisors && !stockLevels) {
            setError("Dashboard data is unavailable or not loaded yet.");
            setLoading(true);
        } else {
            setLoading(false);
            setError(null);
        }
    }, [admin, advisors, stockLevels]);

    if (loading) return <div>Loading...</div>;

    if (error) return <div>Error: {error}</div>;

    return (
        <section className="p-4 flex gap-4 flex-col md:flex-row">
            {/* LEFT */}
            <div className="w-full lg:w-2/3 flex flex-col gap-8">
                <div className="flex gap-4 justify-between flex-wrap">
                    <div>
                        {/* Display admin details */}
                        {admin ? <div>{admin.first_name}</div> : <div>Admin data unavailable</div>}
                    </div>
                    <UserCard type="Total CHW" count={advisors.length || 0} />
                    <UserCard type="Commodities" count={new Set(stockLevels.map(item => item.stock_item_code)).size || 0} />
                    <UserCard type="Recent Orders" count={stockLevels.filter(item => item.status === "Dispensed").length || 0} />
                </div>
            </div>
        </section>
    );
};

export default AdminPage;
