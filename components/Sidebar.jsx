import React, { useState } from "react";
import { TbHexagonLetterO, TbBox } from "react-icons/tb";
import { PiLockKeyBold,PiStudent } from "react-icons/pi";
import { LuUserSquare2 } from "react-icons/lu";
import { MdOutlinePayments, MdLiveHelp } from "react-icons/md";
import { CiDiscount1 } from "react-icons/ci";
import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";

const Sidebar = ({ children }) => {
  const [isOpen, setOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const collaps = () => {
    setOpen(!isOpen);
  };

  const menuItems = [
    { id: 1, label: "Dashboard", icon: PiLockKeyBold, link: "/" },
    { id: 2, label: "Products", icon: TbBox, link: "/products" },
    { id: 3, label: "Customers", icon: LuUserSquare2, link: "/customers" },
    { id: 4, label: "Income", icon: MdOutlinePayments, link: "/income" },
    { id: 5, label: "Promote", icon: CiDiscount1, link: "/promote" },
    { id: 6, label: "Help", icon: MdLiveHelp, link: "/help" }
  ];

  const LinksTag = ({ item }) => {
    const router = useRouter();
    const isActive = router.pathname === item.link;

    return (
      <>
        <Link
          href={item.link}
          key={item.id}
          className={`flex my-2 items-center  hover:text-black hover:rounded-l-full hover:rounded-r-0 hover:border-r-0 gap-2 justify-between hover:bg-gray-100 ${
            isActive ? "bg-[#]" : ""
          }`}
        >
          <div className="flex items-center px-2 gap-4 ">
            <div className="py-1 my-2">{<item.icon fontSize="25"></item.icon>}</div>
            <h1 className="text-md md:block hidden">{item.label}</h1>
          </div>
        </Link>

       
      </>
    );
  };

  return (
    <>
      <div
        className={`flex overflow-hidden flex-col ml-2 ${
          !isOpen ? "w-20" : "w-56"
        } md:w-56 w:16 bg-[#3284ee]  text-white`}
      >
        <div className="flex items-center gap-2 py-2 px-3 my-2">
          {<PiStudent fontSize={44} />}
          <span className="text-xl font-semibold md:block hidden">easycampus</span>
        </div>
        <div className="flex-">
          {menuItems.map((item) => (
            <LinksTag key={item.id} item={item}></LinksTag>
          ))}
        </div>
        <div className="btmpart">
          <div className="flex my-2 items-center px-2 rounded-md gap-2 w-full  cursor-pointer justify-between bg-[#262e5a]">
            <div className="w-12 h-12 flex items-center gap-3  ">
              <img className="w-8 h-8  rounded-full" src="https://i.pravatar.cc/250"></img>
              <div className="flex flex-col items-start  w-full ">
                <h2 className="text-sm font-semibold">Manish</h2>
                <h4 className="text-xs overflow-hidden whitespace-nowrap ">Frontend Developer</h4>
              </div>
            </div>
            <div>
              <IoIosArrowDown></IoIosArrowDown>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
