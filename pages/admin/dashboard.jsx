import React from "react";
import { getSession } from "next-auth/react";
import ContentDashBoard from "@/components/contentDashboard";
import BarChart from "@/components/barChart";
import RecentDoawload from "@/components/recentDoawload";
import TopBar from "@/components/topBar";
import Link from "next/link";
import { RxSketchLogo, RxDashboard, RxPerson } from "react-icons/rx";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { AiTwotoneSetting } from "react-icons/ai";
import { useRouter } from "next/router";
export default function admin() {
  const router = useRouter();
  console.log(router);

 
  return (
    <div className="flex ">
      <div className="fixed h-screen w-20  bg-white border-r-[1px] flex flex-col justify-between items-center ">
        <Link href="#">
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
        <Link href="#">
          <div className="border-solid border-2 border-purple-300    bg-[#fff] hover:bg-purple-300 hover:text-white   p-3 rounded-lg">
            <RxPerson size={25} />
          </div>
        </Link>
        <span className="border-b-[1px] border-gray-200 w-full p-2 "></span>
        <Link href="#">
          <div className="border-solid border-2 border-purple-300    bg-[#fff] hover:bg-purple-300   hover:text-white   p-3 rounded-lg mb-7">
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
      <div className=" ml-20 w-full bg-gray-100 min-h-screen">
        <ContentDashBoard />
        <TopBar />
    
          <RecentDoawload />
    
      </div>
    </div>
  );
}
export async function getServerSideProps(context) {
  const session = await getSession({ req: context.req });
  if (!session) {
    return {
      redirect: {
        destination: "/student/login",
        permanent: false,
      },
    };
  }
  return {
    props: { session },
  };
}
