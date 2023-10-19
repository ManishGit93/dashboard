import React from "react";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { TbFileInvoice, TbShoppingBag } from "react-icons/tb";
import { LuWallet } from "react-icons/lu";
import { BsArrowDownShort, BsArrowUpShort } from "react-icons/bs";
import { HiOutlineOfficeBuilding } from "react-icons/hi";
import { IoIosArrowDown } from "react-icons/io";

const Cards = () => {
  return (
    <>
      <div className="flex items-start justify-between gap-4 ">
        <div className="overflow-auto w-3/4 scrollbar-hide">
          <div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-4 mt-6 min-w-max"
            style={{ gridAutoFlow: "column" }}
          >
            <div className="bg-white p-2 flex flex-col items-start justify-between w-full gap-2 rounded-lg py-4">
              <div className="flex items-center w-full justify-between text-white">
                <HiOutlineOfficeBuilding className="text-blue-800" size={25}></HiOutlineOfficeBuilding>
                <div className="bg-red-600 px-2 flex items-center rounded-full">
                  <h2 className="text-xs">2%</h2>
                  <IoIosArrowDown size={12}></IoIosArrowDown>
                </div>
              </div>
              <div className="flex flex-col gap-2 p-2">
                <h2 className="text-lg font-semibold">4</h2>
                <h3 className="text-sm text-gray-400">Total Registered Campus</h3>
              </div>
            </div>

            <div className="bg-white p-2 flex flex-col items-start justify-between w-full gap-2 rounded-lg py-4">
              <div className="flex items-center w-full justify-between text-white">
                <HiOutlineOfficeBuilding className="text-blue-800" size={25}></HiOutlineOfficeBuilding>
                <div className="bg-red-600 px-2 flex items-center rounded-full">
                  <h2 className="text-xs">2%</h2>
                  <IoIosArrowDown size={12}></IoIosArrowDown>
                </div>
              </div>
              <div className="flex flex-col gap-2 p-2">
                <h2 className="text-lg font-semibold">4</h2>
                <h3 className="text-sm text-gray-400">Total Registered Campus</h3>
              </div>
            </div>

            <div className="bg-white p-2 flex flex-col items-start justify-between w-full gap-2 rounded-lg py-4  ">
              <div className="flex items-center w-full justify-between text-white">
                <HiOutlineOfficeBuilding className="text-blue-800" size={25}></HiOutlineOfficeBuilding>
                <div className="bg-red-600 px-2 flex items-center rounded-full">
                  <h2 className="text-xs">2%</h2>
                  <IoIosArrowDown size={12}></IoIosArrowDown>
                </div>
              </div>
              <div className="flex flex-col gap-2 p-2">
                <h2 className="text-lg font-semibold">4</h2>
                <h3 className="text-sm text-gray-400">Total Registered Campus</h3>
              </div>
            </div>

            <div className="bg-white p-2 flex flex-col items-start justify-between w-full gap-2 rounded-lg py-4  ">
              <div className="flex items-center w-full justify-between text-white">
                <HiOutlineOfficeBuilding className="text-blue-800" size={25}></HiOutlineOfficeBuilding>
                <div className="bg-red-600 px-2 flex items-center rounded-full">
                  <h2 className="text-xs">2%</h2>
                  <IoIosArrowDown size={12}></IoIosArrowDown>
                </div>
              </div>
              <div className="flex flex-col gap-2 p-2">
                <h2 className="text-lg font-semibold">4</h2>
                <h3 className="text-sm text-gray-400">Total Registered Campus</h3>
              </div>
            </div>
            <div className="bg-white p-2 flex flex-col items-start justify-between w-full gap-2 rounded-lg py-4  ">
              <div className="flex items-center w-full justify-between text-white">
                <HiOutlineOfficeBuilding className="text-blue-800" size={25}></HiOutlineOfficeBuilding>
                <div className="bg-red-600 px-2 flex items-center rounded-full">
                  <h2 className="text-xs">2%</h2>
                  <IoIosArrowDown size={12}></IoIosArrowDown>
                </div>
              </div>
              <div className="flex flex-col gap-2 p-2">
                <h2 className="text-lg font-semibold">4</h2>
                <h3 className="text-sm text-gray-400">Total Registered Campus</h3>
              </div>
            </div>

            <div className="bg-white p-2 flex flex-col items-start justify-between w-full gap-2 rounded-lg py-4  ">
              <div className="flex items-center w-full justify-between text-white">
                <HiOutlineOfficeBuilding className="text-blue-800" size={25}></HiOutlineOfficeBuilding>
                <div className="bg-red-600 px-2 flex items-center rounded-full">
                  <h2 className="text-xs">2%</h2>
                  <IoIosArrowDown size={12}></IoIosArrowDown>
                </div>
              </div>
              <div className="flex flex-col gap-2 p-2">
                <h2 className="text-lg font-semibold">4</h2>
                <h3 className="text-sm text-gray-400">Total Registered Campus</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 gap-4 mt-2 ">
          <h2 className="text-lg font-semibold">Latest Updates</h2>
          <h2 className="text-center text-xs text-gray-500">12 Oct 2023</h2>
          <div className="overflow-y-auto h-[110px] scrollbar-hide">
            <div className="bg-white flex items-center justify-center w-full gap-4 p-2 my-2 rounded-md ">
              <div className="image">
                <img className="w-7 h-7  rounded-full" src="https://i.pravatar.cc/250"></img>
              </div>
              <div className="flex flex-col">
                <h3 className="text-sm font-semibold">Tom Cruise</h3>
                <h3 className="text-xs">Lorem ipsum dolor sit.</h3>
                <div className="flex gap-2 mt-2">
                  <img className="w-5 h-5  rounded-full" src="https://i.pravatar.cc/250"></img>
                  <img className="w-5 h-5  rounded-full" src="https://i.pravatar.cc/250"></img>
                  <img className="w-5 h-5  rounded-full" src="https://i.pravatar.cc/250"></img>
                </div>
              </div>
              <div className="text-md text-green-500">View</div>
            </div>

            <div className="bg-white flex items-center justify-center w-full gap-4 p-2 my-2  rounded-md ">
              <div className="image">
                <img className="w-7 h-7  rounded-full" src="https://i.pravatar.cc/250"></img>
              </div>
              <div className="flex flex-col">
                <h3 className="text-sm font-semibold">Tom Cruise</h3>
                <h3 className="text-xs">Lorem ipsum dolor sit.</h3>
                <div className="flex gap-2 mt-2">
                  <img className="w-5 h-5  rounded-full" src="https://i.pravatar.cc/250"></img>
                  <img className="w-5 h-5  rounded-full" src="https://i.pravatar.cc/250"></img>
                  <img className="w-5 h-5  rounded-full" src="https://i.pravatar.cc/250"></img>
                </div>
              </div>
              <div className="text-md text-green-500">View</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
