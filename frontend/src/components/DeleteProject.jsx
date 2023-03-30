import React from "react";
import { FaTimes } from "react-icons/fa";
import { useGlobalState, setGlobalState } from "../store";

const DeleteProject = () => {
  const [deleteModal] = useGlobalState("deleteModal");
  return (
    <div
      className={`fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-black bg-opacity-50 transform transition-transform duration-300 ${deleteModal}`}
    >
      <div className="w-11/12 p-6 bg-white shadow-xl shadow-black rounded-xl md:w-2/5 h-7/12">
        <form className="flex flex-col">
          <div className="flex items-center justify-between">
            <p className="font-semibold text-black">Project Title </p>
            <button className="bg-transparent border-0 focus:outline-none">
              <FaTimes
                onClick={() => setGlobalState("deleteModal", "scale-0")}
              />
            </button>
          </div>
          <div className="flex items-center justify-center mt-5">
            <div className="w-20 overflow-hidden rounded-xl height-20">
              <img
                src="https://media.wired.com/photos/5926e641f3e2356fd800ad1d/master/w_2560%2Cc_limit/AnkiTA.jpg"
                alt="Project title"
                className="object-cover w-full h-full cursor-pointer rounded-xl"
              />
            </div>
          </div>
          <div className="flex flex-col items-center justify-center mt-4">
            <p>Are you sure? </p>
            <small className="text-red-700">This is irreversible</small>
          </div>

          <button
            type="submit"
            className="inline-block bg-red-600 px-6 py-2.5 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-red-700 mt-5  "
          >
            Delete Project
          </button>
        </form>
      </div>
    </div>
  );
};

export default DeleteProject;
