import React from "react";
import { getSession } from "next-auth/react";
import ContentDashBoard from "@/components/contentDashboard";
import BarChart from "@/components/barChart";
import RecentDoawload from "@/components/recentDoawload";
import TopBar from "@/components/topBar";
import SideBar from "@/components/sideBar";
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
      <SideBar />

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
