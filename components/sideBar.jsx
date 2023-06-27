import React from 'react'
import Link from 'next/link'
import { RxSketchLogo, RxDashboard, RxPerson } from "react-icons/rx";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { AiTwotoneSetting } from "react-icons/ai";

export default function SideBar() {
  return (
    <div className="fixed h-screen w-20  bg-white border-r-[1px] flex flex-col justify-between items-center ">
    <Link href="/admin/dashboard">
      <div className="border-solid border-2 border-purple-300  bg-[#fff] hover:bg-purple-300 hover:text-white p-3 rounded-lg ">
        <RxSketchLogo size={25} />
      </div>
    </Link>
    <span className="border-b-[1px] border-gray-200 w-full "></span>
    <Link href="#">
      <div className="border-solid border-2 border-purple-300    bg-[#fff] hover:bg-purple-300 hover:text-white   p-3 rounded-lg ">
        <RxDashboard size={25} />
      </div>
    </Link>
    <span className="border-b-[1px] border-gray-200 w-full "></span>
    <Link href="/customers">
      <div className="border-solid border-2 border-purple-300 bg-[#fff] hover:bg-purple-300 hover:text-white   p-3 rounded-lg">
        <RxPerson size={25} />
      </div>
    </Link>
    <span className="border-b-[1px] border-gray-200 w-full p-2 "></span>
    <Link href="#">
      <div className="border-solid border-2 border-purple-300  bg-[#fff] hover:bg-purple-300 hover:text-white   p-3 rounded-lg mb-7">
        {" "}
        <HiOutlineShoppingBag size={25} />
      </div>
    </Link>
    <span className="border-b-[1px] border-gray-200 w-full p-2 "></span>
    <Link href="#">
      <div className="border-solid border-2 border-purple-300    bg-[#fff] hover:bg-purple-300 hover:text-white p-3 rounded-lg mb-16">
        {" "}
        <AiTwotoneSetting size={25} />
      </div>
    </Link>
    <span className="border-b-[1px] border-gray-200 w-full p-2 "></span>
  </div>
  )
}
