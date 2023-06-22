import React from "react";
import { getSession } from "next-auth/react";
import ContentDashBoard from "@/components/contentDashboard";
import Link from "next/link";
import {RxSketchLogo} from "react-icons/rx"


export default function admin() {
  return (
    <div className="flex ">
      <div className="fixed h-screen w-20  bg-white border-r-[1px] flex flex-col justify-between items-center " >
        <Link href="#"><div className="bg-purple-800 text-white p-3 rounded-lg "><RxSketchLogo size={30}/></div></Link>
        <span className="border-b-[1px] border-gray-200 w-full "></span>
        <Link href="#">b</Link>
        <span className="border-b-[1px] border-gray-200 w-full "></span>
        <Link href="#">c</Link>
        <span className="border-b-[1px] border-gray-200 w-full p-2 "></span>
        <Link href="#">c</Link>
        <span className="border-b-[1px] border-gray-200 w-full p-2 "></span>
      </div>
      <div className=" ml-20 w-full bg-gray-100 min-h-screen">
        <ContentDashBoard />
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
