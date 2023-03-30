import abi from "./CrowdFunding.json";
import { GetGlobalSate, setGlobalState } from "../store";

import { ethers } from "ethers";

const contractAddress = process.env.REACT_APP_CONTRACT_ADDRESS;
const contractABI = abi.abi;

const connectWallet = async () => {
  let signer = null;
  let provider;
  try {
    if (window.ethereum == null) {
      console.log("MetaMask not installed; using read-only defaults");
      provider = ethers.getDefaultProvider();
    } else {
      provider = new ethers.BrowserProvider(window.ethereum);
      signer = await provider.getSigner();
    }
    console.log(provider);
    console.log(signer);
  } catch (e) {
    console.log(`Error connecting to wallet :${e}`);
  }
};

export { connectWallet };
