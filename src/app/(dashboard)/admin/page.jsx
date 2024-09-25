"use client"
import UserCard from "@/components/UserCard";
import { useContext, useState, useEffect } from "react";
import { DashboardContext } from "@/contexts/DashboardProvider";

const AdminPage = () => {
    const { admin, advisors, stockLevels } = useContext(DashboardContext);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!admin || !advisors || !stockLevels) {
            setLoading(true);
            setError("Dashboard data is unavailable or not loaded yet.");
        } else {
            setLoading(false);
            setError(null);
        }
    }, [admin, advisors, stockLevels]);

    const uniqueStockItemCodes = new Set(stockLevels?.map(item => item.stock_item_code) || []);
    const dispensedItems = stockLevels?.filter(item => item.status === "Dispensed") || [];

    console.log("stockLevels-data:", stockLevels);

    if (loading) return <div>Loading...</div>;

    if (error) return <div>Error: {error}</div>;

    return (
        <section className="p-4 flex gap-4 flex-col md:flex-row">
            {/* LEFT */}
            <div className="w-full lg:w-2/3 flex flex-col gap-8">
                {/* USER CARDS */}
                <div className="flex gap-4 justify-between flex-wrap">
                    {/* Display admin details if available */}
                    <div>
                        {/* {admin ? <div>{admin.first_name}</div> : <div>Admin data unavailable</div>} */}
                    </div>
                    {/* Display UserCards based on context data */}
                    <UserCard type="Total CHW" count={advisors.length || 0} />
                    <UserCard type="Commodities" count={uniqueStockItemCodes.size || 0} />
                    <UserCard type="Recent Orders" count={dispensedItems.length || 0} />
                </div>
            </div>
        </section>
    );
}

export default AdminPage;
