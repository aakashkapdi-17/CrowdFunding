import React from "react";
import { setGlobalState } from "../store";

const Hero = () => {
  return (
    <div className="px-6 py-24 text-center ">
      <h1 className="text-5xl font-bold tracking-tight md:text-6xl xl:text-7xl">
        <span className="capitalize">Bring Creative Project to life on </span>
        <br />
        <span className="text-green-600 uppercase">CrowdFunding</span>
      </h1>
      <div className="flex items-center justify-center mt-6 space-x-2">
        <button
          type="button"
          className="inline-block bg-green-600 px-6 py-2.5 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-green-700"
          onClick={() => setGlobalState("createModal", "scale-100")}
        >
          Add Project
        </button>
        <button
          type="button"
          className="inline-block bg-transparent  px-6 py-2.5 text-green-700 border border-green-600 font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-green-700 hover:text-white"
        >
          Back Projects
        </button>
      </div>
      <div className="flex items-center justify-center mt-10">
        <div className="flex flex-col items-center justify-center w-full h-20 border shadow-md">
          <span className="text-lg font-bold leading-5 text-green-900">
            {0}
          </span>
          <span className>Projects</span>
        </div>
        <div className="flex flex-col items-center justify-center w-full h-20 border shadow-md">
          <span className="text-lg font-bold leading-5 text-green-900">
            {0}
          </span>
          <span className>Backings</span>
        </div>
        <div className="flex flex-col items-center justify-center w-full h-20 border shadow-md">
          <span className="text-lg font-bold leading-5 text-green-900">
            {0} ETH
          </span>
          <span className>Donated</span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
