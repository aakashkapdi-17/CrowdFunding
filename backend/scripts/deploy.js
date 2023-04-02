const hre = require("hardhat");

async function main() {
  const Contract = await hre.ethers.getContractFactory("CrowdFunding");
  const contract = await Contract.deploy();

  await contract.deployed();

  console.log(`Contract Deployed at ${contract.address}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
