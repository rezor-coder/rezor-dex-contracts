import { resolve } from "path";
import { config as dotenvConfig } from "dotenv";
import { ZeroAddress } from "ethers";
dotenvConfig({ path: resolve(__dirname, "./.env") });

export const infura_api_key = process.env.INFURA_API_KEY;
export const owner_private_key = process.env.OWNER_PRIVATE_KEY;
export const bscscan_api_key = process.env.BSCSCAN_API_KEY;
export const etherscan_api_key = process.env.ETHERSCAN_API_KEY;
export const feeToSetter = process.env.FEE_TO_SETTER? process.env.FEE_TO_SETTER :ZeroAddress;