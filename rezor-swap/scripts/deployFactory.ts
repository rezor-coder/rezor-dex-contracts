import { ethers } from "hardhat";
import { feeToSetter } from "../config";
import { ZeroAddress } from "ethers";

async function main() {

    const [deployer] = await ethers.getSigners();
    console.log("Deploying contracts with the account:", deployer.address);
    const SaitaSwapFactory = await ethers.getContractFactory("SaitaSwapFactory");
    if (!deployer.address) {
        throw new Error("deployer address is not defined");
    }
    if (feeToSetter == ZeroAddress) {
        throw new Error("feeToSetter is ZeroAddress");
    }
    const factory = await SaitaSwapFactory.deploy(feeToSetter);

    // Step 4: Wait for the contract to be deployed
    await factory.waitForDeployment();

    // Step 5: Log the deployed contract's address
    console.log("SaitaSwapFactory deployed to:", await factory.getAddress());
}

// Execute the main function and handle errors
main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });