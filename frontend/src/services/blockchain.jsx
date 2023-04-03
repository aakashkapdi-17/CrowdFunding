import abi from "./CrowdFunding.json";
import { GetGlobalSate, getGlobalState, setGlobalState } from "../store";

import { ethers } from "ethers";

const contractAddress = process.env.REACT_APP_CONTRACT_ADDRESS;
const contractABI = abi.abi;

const connectWallet = async () => {
  let provider;
  try {
    if (window.ethereum == null) {
      console.log("MetaMask not installed; using read-only defaults");
      provider = ethers.getDefaultProvider();
    } else {
      provider = new ethers.BrowserProvider(window.ethereum);
      provider.getSigner().then((signer) => {
        setGlobalState("connectedAccount", signer.address);
      });
    }
  } catch (e) {
    console.log(`Error connecting to wallet :${e}`);
  }
};

const isWalletConnected = async () => {
  try {
    if (!window.ethereum) return alert("Please Install Metamask");
    window.ethereum.on("chainChanged", () => {
      window.location.reload();
    });
    window.ethereum.on("accountsChanged", async () => {
      connectWallet();
    });
  } catch (error) {
    console.log(error);
  }
};

const getEtheriumContract = async () => {
  const connectedAccount = getGlobalState("connectedAccount");

  if (connectedAccount) {
    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(contractAddress, contractABI, signer);

    return contract;
  } else {
    return getGlobalState("contract");
  }
};

const createProject = async (params) => {
  const contract = await getEtheriumContract();
  console.log(contract);
  await contract.createProject(
    params.title,
    params.description,
    params.imageURL,
    ethers.parseEther(params.cost),
    params.expiresAt
  );
};

export { connectWallet, isWalletConnected, createProject };
