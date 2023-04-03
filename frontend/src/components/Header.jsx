import React from "react";
import { TbBusinessplan } from "react-icons/tb";
import { Link } from "react-router-dom";
import { connectWallet } from "../services/blockchain";
import { truncate, useGlobalState } from "../store";

const Header = () => {
  const [connectedAccount] = useGlobalState("connectedAccount");

  return (
    <div className=" flex justify-between items-center p-5 shadow-lg fixed top-0 lef-0 right-0 w-full">
      <Link
        to="/"
        className="flex justify-start items-center text-xl text-black space-x-1"
      >
        <span>CrowdFunding</span>
        <TbBusinessplan />
      </Link>
      <div className="flex space-x-2 justify-center">
        {connectedAccount ? (
          <button
            type="button"
            className="inline-block bg-green-600 px-6 py-2.5 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-green-700"
            disabled={true}
          >
            {truncate(connectedAccount, 4, 4, 11)}
          </button>
        ) : (
          <button
            type="button"
            className="inline-block bg-green-600 px-6 py-2.5 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-green-700"
            onClick={connectWallet}
          >
            Connect Wallet
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;
