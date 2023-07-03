import React from "react";
import SideBar from "@/components/sideBar";

export default function addEpreuve() {
  return (
    <div>
      <SideBar />
      <div className=" bg-purple-100 min-h-screen ml-20  ">
        <form className="text-white dark:text-gray-200 min-h-screen   ">
          <div className="grid grid-cols-1 gap-6  sm:grid-cols-2 ">
            <div className="m-2.5">
              <label
                className="text-black dark:text-gray-200"
                htmlFor="username"
              >
                Nom du cours
              </label>
              <input
                id="username"
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border
                border-gray-300
                rounded-md dark:bg-gray-800 dark:text-gray-300 focus:border-purple-500 dark:focus:border-blue-500 focus:outline-none focus:ring "
              />
            </div>

            <div className="m-2.5">
              <label
                className="text-black dark:text-gray-200"
                htmlFor="emailAddress"
              >
                Années academique
              </label>
              <input
                id="emailAddress"
                type="email"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
            </div>

            <div className="m-2.5">
              <label
                className="text-black dark:text-gray-200"
                htmlFor="password"
              >
                Session
              </label>
              <input
                id="password"
                type="password"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-purple-300 dark:focus:border-purple-300 focus:outline-none focus:ring"
              />
            </div>

            <div className="m-2.5">
              <label
                className="text-black dark:text-gray-200"
                htmlFor="passwordConfirmation"
              >
              Promotion
              </label>
              <input
                id="passwordConfirmation"
                type="password"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
            </div>

            <div className="m-2.5">
              <label
                className="text-black dark:text-gray-200"
                htmlFor="passwordConfirmation"
              >
                Select
              </label>
              <select className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring">
                <option>Surabaya</option>
                <option>Jakarta</option>
                <option>Tangerang</option>
                <option>Bandung</option>
              </select>
            </div>
            <div className="m-1.5">
              <label className="block text-sm font-medium text-black">
                Image
              </label>
              <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                <div className="space-y-1 text-center">
                  <svg
                    className="mx-auto h-12 w-12 text-white"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 48 48"
                    aria-hidden="true"
                  >
                    <path
                      d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                      strokeWidth="2"
                      strokeLinecap="round"
                      stokeLinejoin="round"
                    />
                  </svg>
                  <div className="flex text-sm text-gray-600 m-2.5">
                    <label
                      htmlFor="file-upload"
                      className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                    >
                      <span className="">Upload a file</span>
                      <input
                        id="file-upload"
                        name="file-upload"
                        type="file"
                        className="sr-only"
                      />
                    </label>
                    <p className="pl-1 text-black">or drag and drop</p>
                  </div>
                  <p className="text-xs text-white">PNG, JPG, GIF up to 10MB</p>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
