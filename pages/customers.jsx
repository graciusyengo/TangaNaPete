import React from "react";
import SideBar from "@/components/sideBar";
import {  RxPerson } from "react-icons/rx";
import {BsThreeDotsVertical} from "react-icons/bs"
import data from "@/util/data";

export default function Customers() {
  
  return (
    <div>
      <SideBar />
      <div className="bg-gray-100 min-h-screen ml-20">
        <div className="flex  justify-between p-3">
          <h1>customer</h1>
          <h1>welcome back</h1>
        </div>
        <div className="p-4">
          <div className="w-full p-4 bg-white border rounded-lg m-auto overflow-y-auto">
            <div className=" my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 cursor-pointer  items-center justify-between">
              <span>Nom</span>
              <span className="sm:text-left text-right">Email</span>
              <span className="hidden md:grid"> Dernier Telechargement </span>
              <span className="hidden sm:grid">Type</span>
            </div>
            <ul>
              {data.usersInfoRecents.map((userInfoRecent) => {
                return (
                  <li
                    className="bg-gray-50 hover:bg-gray-100 my-3 p-2 grid md:grid-cols-4 cursor-pointer"
                    key={userInfoRecent.id}
                  >
                    <div className="flex items-center">
                        <div className="bg-purple-100 p-3 rounded-lg">
                        <RxPerson className="text-purple-800"/>
                        </div>
                        <p className="pl-3">{userInfoRecent.name + ' ' +  userInfoRecent.firstname}</p>
                      

                    </div>
                    <p className="text-gray-600 sm:text-left text-right">{userInfoRecent.email}</p>
                    <p className="hidden md:flex">{userInfoRecent.date}</p>
                    <div className="sm:flex hidden justify-between items-center">
                        <p>{userInfoRecent.type}</p>
                        <BsThreeDotsVertical/>

                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
