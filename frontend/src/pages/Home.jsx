import React from "react";
import AddButton from "../components/AddButton";
import CreateProject from "../components/CreateProject";

import Hero from "../components/Hero";
import Projects from "../components/Projects";

const Home = () => {
  return (
    <>
      <Hero />
      <Projects />
      <div className="flex items-center justify-center m-5">
        <button
          type="button"
          className="inline-block bg-green-600 px-6 py-2.5 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-green-700 "
        >
          Connect Wallet
        </button>
      </div>
      <CreateProject />
      <AddButton />
    </>
  );
};

export default Home;
