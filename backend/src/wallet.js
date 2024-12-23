const { ethers } = require("ethers");

// Replace with your own RPC URL and private key
const RPC_URL = process.env.RPC_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;

// Create a provider
const provider = new ethers.JsonRpcProvider(RPC_URL);

// Create a wallet instance
const wallet = new ethers.Wallet(PRIVATE_KEY, provider);

// Log the wallet address
console.log("Wallet address:", wallet.address);

// Example ERC-20 token contract address and ABI (basic)
const ERC20_ABI = [
  // Some ERC-20 methods
  "function balanceOf(address owner) view returns (uint256)",
];

// Replace with the contract address of the ERC-20 token you want to interact with
const TOKEN_CONTRACT_ADDRESS = "0xYourTokenContractAddress";

// Create a contract instance
const tokenContract = new ethers.Contract(
  TOKEN_CONTRACT_ADDRESS,
  ERC20_ABI,
  wallet
);

// Function to get the balance of the wallet address
async function getBalance() {
  try {
    const balance = await tokenContract.balanceOf(wallet.address);
    console.log("Token balance:", ethers.formatEther(balance));
  } catch (error) {
    console.error("Error fetching balance:", error);
  }
}

// Execute the function
getBalance();
