import UserCard from "@/components/UserCard";
import CountChart from "@/components/CountChart";
import AttendanceChart from "@/components/AttendanceChart"
import FinanceChart from "@/components/FinanceChart"
// import EventCalendar from "@/components/EventCalendar"
import Announcements from "@/components/Announcements"

const AdminPage = () => {
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