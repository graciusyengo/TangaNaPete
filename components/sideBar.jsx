import React from 'react'
import Link from 'next/link'
import { RxSketchLogo, RxDashboard, RxPerson } from "react-icons/rx";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { AiTwotoneSetting } from "react-icons/ai";
import { useRouter } from "next/router";



export default function SideBar() {
  const router = useRouter();
console.log(router);
  return (
    <div className="fixed h-screen w-20  bg-white border-r-[1px] flex flex-col justify-between items-center ">
    <Link href="/admin/dashboard">

      
      <div   className={router.pathname == "/admin/dashboard" ? "bg-red-500 p-3 rounded-lg text-white" : "border-solid border-2 border-red-300  p-3 rounded-lg hover:bg-red-500 hover:text-white"} >
        <RxSketchLogo size={25}  />
      </div>
    </Link>
    <span className="border-b-[1px] border-gray-200 w-full "></span>
    <Link href="/addepreuve">
      <div className={router.pathname == "/addepreuve" ? "bg-red-500 p-3 rounded-lg text-white" : "border-solid border-2 border-red-300  p-3 rounded-lg hover:bg-red-500 hover:text-white"} >
        <RxDashboard size={25} />
      </div>
    </Link>
    <span className="border-b-[1px] border-gray-200 w-full "></span>
    <Link href="/customers">
      <div className={router.pathname == "/customers" ? "bg-red-500 p-3 rounded-lg text-white" : "border-solid border-2 border-red-300  p-3 rounded-lg hover:bg-red-500 hover:text-white"} >
        <RxPerson size={25} />
      </div>
    </Link>
    <span className="border-b-[1px] border-gray-200 w-full p-2 "></span>
    <Link href="#">
      <div className="border-solid border-2 border-red-300  bg-[#fff] hover:bg-red-500 hover:text-white   p-3 rounded-lg mb-7">
        {" "}
        <HiOutlineShoppingBag size={25} />
      </div>
    </Link>
    <span className="border-b-[1px] border-gray-200 w-full p-2 "></span>
    <Link href="#">
      <div className="border-solid border-2 border-red-300    bg-[#fff] hover:bg-red-500 hover:text-white p-3 rounded-lg mb-16">
        {" "}
        <AiTwotoneSetting size={25} />
      </div>
    </Link>
    <span className="border-b-[1px] border-gray-200 w-full p-2 "></span>
  </div>
  )
}
