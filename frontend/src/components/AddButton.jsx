import React from "react";
import { setGlobalState } from "../store";
import { BsPlusLg } from "react-icons/bs";

const AddButton = () => {
  return (
    <div className="fixed flex justify-center space-x-2 right-10 bottom-10">
      <button
        type="button"
        className="flex items-center justify-center font-medium leading-tight text-white uppercase bg-green-600 rounded-full shadow-md items-centertext-xs w-9 h-9 hover:bg-green-700"
        onClick={() => setGlobalState("createModal", "scale-100")}
      >
        <BsPlusLg className="font-bold" size={20} />
      </button>
    </div>
  );
};

export default AddButton;
