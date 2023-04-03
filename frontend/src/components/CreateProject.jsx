import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { useGlobalState, setGlobalState } from "../store";

const CreateProject = () => {
  const [createModal] = useGlobalState("createModal");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [imageURL, setImageURL] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !amount || !description || !imageURL || !date) return;
    const params = {
      title,
      amount,
      description,
      imageURL,
      date,
    };
    console.log(params);
  };
  return (
    <div
      className={`fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-black bg-opacity-50 transform transition-transform duration-300 ${createModal}`}
    >
      <div className="w-11/12 p-6 bg-white shadow-xl shadow-black rounded-xl md:w-2/5 h-7/12">
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <div className="flex items-center justify-between">
            <p className="font-semibold text-black">Add Project Title</p>
            <button className="bg-transparent border-0 focus:outline-none">
              <FaTimes
                onClick={() => setGlobalState("createModal", "scale-0")}
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
          <div className="flex items-center justify-between mt-5 bg-gray-300 rounded-xl">
            <input
              className="block w-full text-sm bg-transparent border-0 text-slate-500 focus:outline-none focus:ring-0"
              type="text"
              stop={0.01}
              min={0.01}
              name="title"
              placeholder="Title"
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div className="flex items-center justify-between mt-5 bg-gray-300 rounded-xl">
            <input
              className="block w-full text-sm bg-transparent border-0 text-slate-500 focus:outline-none focus:ring-0"
              type="number"
              name="amount"
              placeholder="Amount      {ETH}"
              onChange={(e) => setAmount(e.target.value)}
              required
            />
          </div>
          <div className="flex items-center justify-between mt-5 bg-gray-300 rounded-xl">
            <input
              className="block w-full text-sm bg-transparent border-0 text-slate-500 focus:outline-none focus:ring-0"
              type="date"
              name="date"
              placeholder="Expires"
              onChange={(e) => setDate(e.target.value)}
              required
            />
          </div>
          <div className="flex items-center justify-between mt-5 bg-gray-300 rounded-xl">
            <input
              className="block w-full text-sm bg-transparent border-0 text-slate-500 focus:outline-none focus:ring-0"
              type="url"
              name="imageURL"
              placeholder="Image URL"
              onChange={(e) => setImageURL(e.target.value)}
              required
            />
          </div>
          <div className="flex items-center justify-between mt-5 bg-gray-300 rounded-xl">
            <textarea
              className="block w-full text-sm bg-transparent border-0 text-slate-500 focus:outline-none focus:ring-0"
              type="text"
              name="description"
              placeholder="Description"
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="inline-block bg-green-600 px-6 py-2.5 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-green-700 mt-5  "
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateProject;
