import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@nomicfoundation/hardhat-chai-matchers";
import "@nomicfoundation/hardhat-ethers";
import '@openzeppelin/hardhat-upgrades';
import "@nomicfoundation/hardhat-verify";
import { owner_private_key, infura_api_key, bscscan_api_key, etherscan_api_key } from "./config";

if (owner_private_key?.length !== 64) {
  throw new Error("Invalid PRIVATE_KEY length. Expected 32 bytes.");
}

const config: HardhatUserConfig = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
    },
    bnb: {
      url: `https://bsc-testnet.infura.io/v3/${infura_api_key}`,
      chainId: 97,
      accounts: [owner_private_key],
      timeout: 20000
    },
    sepolia: {
      url: `https://sepolia.infura.io/v3/${infura_api_key}`,
      chainId: 11155111,
      accounts: [owner_private_key],
      timeout: 20000
    }
  },
  etherscan: {
    apiKey: {
      bscTestnet:`${bscscan_api_key}`,
      sepolia: `${etherscan_api_key}`
    }
  },
  sourcify: {
    // Disabled by default
    // Doesn't need an API key
    enabled: true
  },
  solidity: {
   compilers: [
    {
      version: "0.5.16", 
      settings: {
        optimizer: { enabled: true, runs: 200 }, 
      },
    },
    // {
    //   version: "0.6.0", 
    //   settings: {
    //     optimizer: { enabled: true, runs: 200 }, 
    //   },
    // },
    // {
    //   version: "0.6.6", 
    //   settings: {
    //     optimizer: { enabled: true, runs: 100 }, 
    //   },
    //  },
    //   {
    //     version: "0.8.28", // A default version
    //     settings: {
    //       optimizer: { enabled: true, runs: 200 },
    //     },
    //   }, 
    ],
    overrides: {
      "contracts/SaitaRouter.sol": {  // Specific file override
        version: "0.6.6",
      },
      "contracts/SaitaFactory.sol": { // Another specific file
        version: "0.5.16",
      },
      "contracts/SaitaSwapERC20.sol": { // Directory override (all files within)
        version: "0.5.16",
      },
       "contracts/SaitaSwapPair.sol": { // Directory override (all files within)
        version: "0.5.16",
      },
      // Add more overrides for other files or directories
    }
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts"
  },
  mocha: {
    timeout: 40000
  }
};

export default config;


