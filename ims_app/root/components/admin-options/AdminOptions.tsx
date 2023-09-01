import React from "react";
import Link from "next/link";

interface MenuItem {
  text: string;
  link: string;
}

const menuItems: MenuItem[] = [
  { text: "Home", link: "/private/admin" },
  { text: "Register Users", link: "/private/admin/register-users" },
  { text: "Edit Users", link: "/private/admin/edit-users" },
  { text: "Register Routes", link: "/private/admin/register-routes" },
  { text: "Edit Routes", link: "/private/admin/edit-routes" },
  { text: "Register Buses", link: "/private/admin/register-buses" },
];

export default function AdminOption  ()  {
  return (
    <div className="md:h-[570px] h-auto background-image w-full flex justify-center items-center">
      <div className="m-10 grid grid-cols-1 md:grid-cols-3 gap-5 sm:grid-cols-2">
        {menuItems.map((menuItem, index) => (
          <div key={index} className="flex items-center justify-center">
            <button className="shadow-drop-bottom-right hover:bg-blue-50 flex flex-col justify-center items-center border-4 border-gray p-6 md:p-3 lg:px-8 rounded-lg bg-white">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-purple-100 text-blue-500 mb-4 border-2 border-blue-500"></div>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-2 text-center">
                {menuItem.text}
              </h2>
              <div className="flex justify-center mt-4">
                <Link href={menuItem.link} className="w-52 text-center hover:bg-gradient-to-br hover:from-cyan-500 hover:to-blue-500 hover:text-white border-2 border-blue-400 text-blue-500 font-bold py-2 px-4 rounded">
                    Go
                </Link>
              </div>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

