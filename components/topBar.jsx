import React from "react";
export default function TopBar() {
  return (
    <div className="grid lg:grid-cols-5 gap-4 p-4">
      <div className=" lg:col-span-2 col-span-1 flex justify-between border w-full p-4 bg-white rounded-lg">
        <div className="flex flex-col w-full pb-4">
          <p className=" text-2xl font-bold">$12,000,22</p>
          <p className="text-gray-600">Customer</p>
        </div>
        <p className="bg-green-200 flex justify-center items-center cursor-pointer p-2 rounded-lg">
            <span className="text-green-700 ">
             +18
            </span>
        </p>
      </div>
      <div className=" lg:col-span-2 col-span-1 flex justify-between border w-full p-4 bg-white rounded-lg">
        <div className="flex flex-col w-full pb-4">
          <p className=" text-2xl font-bold">$12</p>
          <p className="text-gray-600">Daily Revenue</p>
        </div>
        <p className="bg-green-200 flex justify-center items-center cursor-pointer p-2 rounded-lg">
            <span className="text-green-700 ">
             +18
            </span>
        </p>
        
      </div>
      <div className=" flex justify-between w-full border p-4 bg-white rounded-lg">
        <div className="flex flex-col w-full pb-4">
          <p className=" text-2xl font-bold">$12</p>
          <p className="text-gray-600"> YTD revenue</p>
        </div>
        <p className="bg-green-200 flex justify-center items-center cursor-pointer p-2 rounded-lg">
            <span className="text-green-700 ">
             +11
            </span>
        </p>
      </div>
    </div>
  );
}
