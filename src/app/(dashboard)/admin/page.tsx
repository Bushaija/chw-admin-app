import UserCard from "@/components/UserCard";
import CountChart from "@/components/CountChart";
import AttendanceChart from "@/components/AttendanceChart"
import FinanceChart from "@/components/FinanceChart"
// import EventCalendar from "@/components/EventCalendar"
import Announcements from "@/components/Announcements"

const AdminPage = () => {
    return (
        <section className="p-4 flex gap-4 flex-col md:flex-row bg-[#C6C6C6]">
            {/* LEFT  */}
            <div className="w-full lg:w-2/3 flex flex-col gap-8">
                {/* USER CARDS */}
                <div className="flex gap-4 justify-between flex-wrap">
                    <UserCard type="Total CHW" />
                    <UserCard type="Commodities" />
                    <UserCard type="Recent Orders" />
                </div>
                <div className="flex gap-4 flex-col lg:flex-row">
                    {/* Count chart */}
                    <div className="w-full lg:w-1/3 h-[450px]">
                        {/* <CountChart /> */}
                    </div>
                    
                    {/* Attendance chart */}
                    <div className="w-full lg:w-2/3 h-[450px]">
                        {/* <AttendanceChart /> */}
                    </div>

                </div>
                {/* Attendance chart */}
                <div className="w-full h-[500px]">
                    {/* <FinanceChart /> */}
                </div>
            </div>


            {/* RIGHT */}
            <div className="w-full lg:w-1/3 flex flex-col gap-8">
                {/* <EventCalendar /> */}
                {/* <Announcements /> */}
            </div>
        </section>
    )
}

export default AdminPage;