import Link from "next/link";
import Image from "next/image";
import { role } from "@/lib/data";

const menuItems = [
  {
    title: "MENU",
    items: [
      {
        icon: "/home.png",
        label: "Dashboard",
        href: "/admin",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: "/lesson.png",
        label: "Inventory Level",
        href: "/inventory",
        visible: ["admin", "teacher"],
      },
      {
        icon: "/exam.png",
        label: "Stock Level",
        href: "/stock",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: "/logout.png",
        label: "Prediction",
        href: "/predictions",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: "/message.png",
        label: "Requests",
        href: "/request",
        visible: ["admin", "teacher", "student", "parent"],
      }
    ],
  },
  // {
  //   title: "OTHER",
  //   items: [
  //     {
  //       icon: "/profile.png",
  //       label: "Profile",
  //       href: "/profile",
  //       visible: ["admin", "teacher", "student", "parent"],
  //     },
  //     {
  //       icon: "/setting.png",
  //       label: "Settings",
  //       href: "/settings",
  //       visible: ["admin", "teacher", "student", "parent"],
  //     },
  //     {
  //       icon: "/logout.png",
  //       label: "Logout",
  //       href: "/auth/login",
  //       visible: ["admin", "teacher", "student", "parent"],
  //     },
  //   ],
  // },
];

const Menu = () => {
  return (
    <div className="mt-4 text-sm">
      {
        menuItems.map((i) => (
          <div className="flex flex-col gap-2" key={i.title}>
            <span className="hidden lg:block text-gray-400 font-light my-4">
              {i.title}
            </span>
            {
              i.items.map((item) => {
                if(item.visible.includes(role)) {
                  return (
                    <Link
                      href={item.href}
                      key={item.label}
                      className="flex items-center justify-center lg:justify-start gap-4 text-gray-500 py-2 px-2 rounded-md hover:bg-lamaSkyLight"
                    >
                      <Image src={item.icon} alt="" width={20} height={20}/>
                      <span className="">{item.label}</span>
                    </Link>
                  )
                }
              })
            }
          </div>
        ))
      }
    </div>
  )
}

export default Menu;