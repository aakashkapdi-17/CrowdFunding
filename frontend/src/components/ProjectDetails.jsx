import React from "react";
// import Identicons from "react-identicons";
import { FaEthereum } from "react-icons/fa";
import { setGlobalState } from "../store";

const ProjectDetails = () => {
  return (
    <div className="px-8 py-24">
      <div>
        <div className="flex flex-wrap items-start justify-start sm:space-x-4">
          <img
            src="https://media.wired.com/photos/5926e641f3e2356fd800ad1d/master/w_2560%2Cc_limit/AnkiTA.jpg"
            alt="Project title"
            className="object-cover w-full h-64 sm:w-1/3 rounded-xl"
          />
          <div className="flex-1 py-4 sm:padding-bottom-0">
            <div className="flex flex-col flex-wrap just">
              <h5 className="mb-2 text-sm font-medium text-gray-900">
                Creating a Household Robot
              </h5>
              <small className="text-green-500">{3} days left</small>
            </div>

            <div className="flex items-center justify-between w-full">
              <div className="flex justify-start pt-1 space-x-2">
                {/* <Identicons
                  className="rounded-full shadow-md"
                  string="8x15.........lea2"
                  size={15}
                /> */}
                <small className="text-gray-700">0x9......1234</small>
                <small className="font-bold text-gray-500">{16} backing</small>
              </div>
              <div className="font-bold ">
                <small className="text-gray-500">Open</small>
              </div>
            </div>
          </div>
        </div>
        <p className="text-sm font-light">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel magni
          rerum, nesciunt deleniti recusandae illo, autem sequi reprehenderit,
          dicta ipsum sunt odit voluptatum saepe hic tempore exercitationem et
          mollitia fugiat.
        </p>
      </div>
      <div>
        <div
          className="bg-green-600 text-xs font-medium text-green-100 text-center p-0.5 leading-none rounded-l-full mt-4"
          style={{ width: "50%" }}
        ></div>
      </div>
      <div className="flex items-center justify-between mt-2 font-bold">
        <small>{3}ETH Raised</small>
        <small className="flex items-start justify-start">
          <FaEthereum />
          <span>{10}ETH</span>
        </small>
      </div>
      <div className="flex items-center justify-start mt-6 space-x-2">
        <button
          type="button"
          className="inline-block bg-green-600 mt-2 px-6 py-2.5 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-green-700 "
          onClick={() => setGlobalState("backModal", "scale-100")}
        >
          Back Project
        </button>
        <button
          type="button"
          className="inline-block bg-gray-600 mt-2 px-6 py-2.5 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-gray-700 "
          onClick={() => setGlobalState("updateModal", "scale-100")}
        >
          Edit
        </button>
        <button
          type="button"
          className="inline-block bg-red-600 mt-2 px-6 py-2.5 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-red-700 "
          onClick={() => setGlobalState("deleteModal", "scale-100")}
        >
          Delete
        </button>
        <button
          type="button"
          className="inline-block bg-orange-600 mt-2 px-6 py-2.5 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-orange-700 "
        >
          Payout
        </button>
      </div>
    </div>
  );
};

export default ProjectDetails;
