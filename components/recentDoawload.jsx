import React from "react";
import { HiOutlineShoppingBag } from "react-icons/hi";

export default function RecentDoawload() {
  const data = {
    usersDoawloadRecently: [
      {
        id: "1",
        name: "yengo",
        email: "yengo@gmail@gmail.com",
        date: "23/10/2022",
      },
      {
        id: "2",
        name: "mika",
        email: "mika@gmail@gmail.com",
        date: "09/10/2022",
      },
      {
        id: "3",
        name: "momo",
        email: "momo@gmail@gmail.com",
        date: "23/10/2022",
      },
      {
        id: "4",
        name: "mbalaka",
        email: "mbalaka@gmail@gmail.com",
        date: "23/10/2000",
      },
      {
        id: "5",
        name: "bukanga",
        email: "bukanga@gmail@gmail.com",
        date: "23/10/2022",
      },
      {
        id: "5",
        name: "bukanga",
        email: "bukanga@gmail@gmail.com",
        date: "23/10/2022",
      },
      {
        id: "5",
        name: "bukanga",
        email: "bukanga@gmail@gmail.com",
        date: "23/10/2022",
      },
      {
        id: "5",
        name: "bukanga",
        email: "bukanga@gmail@gmail.com",
        date: "23/10/2022",
      },
      {
        id: "5",
        name: "bukanga",
        email: "bukanga@gmail@gmail.com",
        date: "23/10/2022",
      },
      {
        id: "5",
        name: "bukanga",
        email: "bukanga@gmail@gmail.com",
        date: "23/10/2022",
      },
      {
        id: "5",
        name: "bukanga",
        email: "bukanga@gmail@gmail.com",
        date: "23/10/2022",
      },
    ],
  };
  console.log(data.usersDoawloadRecently);
  return (
    <div className='className="flex justify-center  ml-5 mr-5 h-auto bg-white lg:h-[70vh] h:[50vh] p-4 overflow-scroll rounded-lg  "'>
      <h1 className="text-center">RECENTLY DOawload </h1>

      <ul>
        {data.usersDoawloadRecently.map((userRecentlyDoawload) => {
          return <li key={userRecentlyDoawload.id}className="bg-gray-50 hover:bg-gray-100 cursor-pointer my-3 p-2" >
            <div className="bg-purple-100 rounded-lg p-3">
           <HiOutlineShoppingBag className="bg-green-50" size={20}/>
            </div>
          
          </li>;
        })}
      </ul>
    </div>
  );
}
