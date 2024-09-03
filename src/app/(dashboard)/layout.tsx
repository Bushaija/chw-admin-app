import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <section className="h-screen flex">
        {/* LEFT */}
        <div className="w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%] p-4 bg-[#E9EBED]">
          <Link href="/" className="flex items-center justify-center lg:justify-start gap-2">
            <span className="lg:block font-bold w-full p-[.5rem] text-[#2DAC4D] rounded-md border-b-[1px] border-green-400 flex justify-center items-center text-center shadow-md">CHW</span>
          </Link>
          <Menu />
        </div>

        {/* RIGHT */}
        <div className="w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] bg-[#F7F8FA]  overflow-scroll">
          <Navbar />
          {children}
        </div>
      </section>
  );
}
