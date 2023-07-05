import React from "react";
import SideBar from "@/components/sideBar";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import baseUrl from "@/util/baseUrl"



export default function addEpreuve() {
  const [media, setMedia] = useState("");
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const submitHandler = async ({ name, academicYear, session, promote,img }) => {
    try {
      const img = await imageUpload();
    
     const res=await fetch(`${baseUrl}/api/epreuves`,{
        method:"POST",
        headers:{
          'Content-Type':'application/json'

        },
        body:JSON.stringify({
          name,
          academicYear,
          session,
          promote,
          img:img
        })
      })
       const res2 = await res.json()
       console.log(res2.error)
      if(res2?.error){
        toast.error(res2.error)
      }else{
      toast.success(res2.success)
      }
    } catch (err) {

    }
  };
  const imageUpload = async () => {
    const data = new FormData();
    console.log(data);
    data.append("file", media);
    data.append("upload_preset", "mystore");
    data.append("cloud_name", "dalaydhsp");

    const res = await fetch(
      "https://api.cloudinary.com/v1_1/dalaydhsp/image/upload",
      {
        method: "POST",
        body: data,
      }
    );

    const res2 = await res.json();
    
    return res2.url;
    
  };
  return (
    <div>
      <SideBar />
      <div className=" bg-purple-100 min-h-screen ml-20  ">
        <form
          className="flex flex-col justify-between"
          onSubmit={handleSubmit(submitHandler)}
        >
          <div className="grid grid-cols-1 gap-6  sm:grid-cols-2 ">
            <div className="m-2.5">
              <label className="text-black dark:text-gray-200" htmlFor="name">
                Nom du cours
              </label>
              <input
                id="name"
                type="text"
                {...register("name", {
                  required: "désolé veuillez entrer le nom de l'epreuve",
                  maxLength: {
                    value: 18,
                    message: "Veuillez entrer un nom de moins de 19 caractères",
                  },
                })}
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border
                border-gray-300
                rounded-md dark:bg-gray-800 dark:text-gray-300 focus:border-purple-500 dark:focus:border-blue-500 focus:outline-none focus:ring "
              />
              {errors.name && (
                <div className="text-red-500">{errors.name.message}</div>
              )}
            </div>

            <div className="m-2.5">
              <label
                className="text-black dark:text-gray-200"
                htmlFor="academicYear"
              >
                Années academique
              </label>
              <input
                id="academicYear"
                type="text"
                {...register("academicYear", {
                  required: "désolé veuillez entrer l'années academique",
                  maxLength: {
                    value: 15,
                    message: "Veuillez entrer un nom de moins de 16 caractères",
                  },
                })}
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
              {errors.academicYear && (
                <div className="text-red-500">
                  {errors.academicYear.message}
                </div>
              )}
            </div>

            <div className="m-2.5">
              <label
                className="text-black dark:text-gray-200"
                htmlFor="session"
              >
                Session
              </label>
              <input
                id="session"
                type="text"
                {...register("session", {
                  required: "désolé veuillez spécifier la session",
                  maxLength: {
                    value: 9,
                    message: "Veuillez entrer un nom de moins de 10 caractères",
                  },
                })}
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-purple-300 dark:focus:border-purple-300 focus:outline-none focus:ring"
              />
              {errors.session && (
                <div className="text-red-500">{errors.session.message}</div>
              )}
            </div>

            <div className="m-2.5">
              <label
                className="text-black dark:text-gray-200"
                htmlFor="promote"
              >
                Promotion
              </label>
              <input
                id="promote"
                type="text"
                {...register("promote", {
                  required: "désolé veuillez entrer la promotion",
                  maxLength: {
                    value: 15,
                    message: "Veuillez entrer un nom de moins de 16 caractères",
                  },
                })}
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
              {errors.promote && (
                <div className="text-red-500">{errors.promote.message}</div>
              )}
            </div>

            <div className="m-2.5">
              <label
                className="text-black dark:text-gray-200"
                htmlFor="passwordConfirmation"
              >
                Categorie
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
                      stokelinejoin="round"
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
                        accept="image/*"
                        onChange={(e) => setMedia(e.target.files[0])}
                        className="sr-only"
                      />
                    </label>
                    <p className="pl-1 text-black">or drag and drop</p>
                  </div>
                  <p className="text-xs text-white">PNG, JPG, GIF up to 10MB</p>
                </div>
              </div>
              <img
                className="responsive-img"
                src={media ? URL.createObjectURL(media) : ""}
              />
            </div>
          </div>
          <button className="font-semibold text-xl border-solid border-2 border-purple-300  p-3 rounded-lg hover:bg-purple-300 hover:text-white mt-16 mb-16">
            Ajouter une epreuve
          </button>
        </form>
      </div>
      <ToastContainer position="bottom-center" limit={1} />
    </div>
  );
}
