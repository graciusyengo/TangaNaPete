import React from "react";
import { HiOutlineShoppingBag } from "react-icons/hi";

export default function RecentDoawload() {
  const data = {
    usersDoawloadRecently: [
      {
        id: "1",
        name: "yengo",
        number: "3",
        total: "$12",
        email: "yengo@gmail@gmail.com",
        date: "23/10/2022",
      },
      {
        id: "2",
        name: "mika",
        number: "3",
        total: "$12",
        email: "mika@gmail@gmail.com",
        date: "09/10/2022",
      },
      {
        id: "3",
        name: "momo",
        number: "3",
        total: "$122",
        email: "momo@gmail@gmail.com",
        date: "23/10/2022",
      },
      {
        id: "4",
        name: "mbalaka",
        number: "3",
        total: "$12",
        email: "mbalaka@gmail@gmail.com",
        date: "23/10/2000",
      },
      {
        id: "5",
        name: "bukanga",
        number: "3",
        total: "$1",
        email: "bukanga@gmail@gmail.com",
        date: "23/10/2022",
      },
      {
        id: "5",
        name: "mbalia",
        number: "3",
        total: "$10",
        email: "bukanga@gmail@gmail.com",
        date: "29/10/2022",
      },
      {
        id: "5",
        name: "bukanga",
        number: "3",
        total: "$12.343",
        email: "bukanga@gmail@gmail.com",
        date: "23/10/2022",
      },
      {
        id: "5",
        name: "bukanga",
        number: "3",
        total: "$12",
        email: "bukanga@gmail@gmail.com",
        date: "23/10/2022",
      },
      {
        id: "5",
        name: "buk",
        number: "3",
        total: "$12",
        email: "buk@gmail@gmail.com",
        date: "23/10/2022",
      },
      {
        id: "5",
        name: "bukanga",
        number: "3",
        total: "$12",
        email: "bukanga@gmail@gmail.com",
        date: "23/10/2022",
      },
      {
        id: "5",
        name: "bukanga",
        number: "3",
        total: "$12",
        email: "bukanga@gmail@gmail.com",
        date: "23/10/2022",
      },
    ],
  };
  console.log(data.usersDoawloadRecently);
  return (
    <div className="relative  ml-96 mr-96 h-auto bg-white lg:h-[70vh] h:[50vh] p-4 overflow-scroll rounded-lg">
      <h1 className="text-center ">Telechargement recents </h1>

      <ul className="">
        {data.usersDoawloadRecently.map((userRecentlyDoawload) => {
          return (
            <li
              key={userRecentlyDoawload.id}
              className="bg-gray-50 hover:bg-gray-100 cursor-pointer my-3 p-2 rounded-lg flex items-center"
            >
              <div className="bg-purple-100 p-3 rounded-lg">
                <HiOutlineShoppingBag className="text-purple-800" size={20} />
              </div>
              <div className="pl-4">
                
                <p className="text-gray-800 font-bold">{userRecentlyDoawload.total}</p>
                <p className="text-gray-400 text-sm">{userRecentlyDoawload.name}</p>
              </div>

              <p className=" lg:flex absolute right-6 text-sm">{userRecentlyDoawload.date}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
