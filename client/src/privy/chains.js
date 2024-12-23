import { toast } from "sonner";

export const chainsName = { amoy: "Amoy" };

export const polygonAmoy = {
  id: 80002,
  network: "Polygon Amoy Testnet",
  name: "Amoy",
  nativeCurrency: {
    name: "MATIC",
    symbol: "MATIC",
    decimals: 18,
  },
  rpcUrls: {
    default: {
      http: ["https://rpc.ankr.com/polygon_amoy"],
    },
    public: {
      http: ["https://rpc.ankr.com/polygon_amoy"],
    },
  },
  blockExplorers: {
    default: {
      name: "Explorer",
      url: "https://amoy.polygonscan.com/",
    },
  },
};

export async function switchToPolygonAmoy(w0, setter) {
  try {
    const provider = await w0?.getEthersProvider();
    const res = await provider?.send("wallet_addEthereumChain", [
      {
        chainId: "80002",
        chainName: "Polygon Amoy Testnet",
        nativeCurrency: {
          name: "MATIC",
          symbol: "MATIC",
          decimals: 18,
        },
        rpcUrls: ["https://rpc.ankr.com/polygon_amoy"],
        blockExplorerUrls: ["https://amoy.polygonscan.com/"],
      },
    ]);

    const network = await provider.detectNetwork();
    if (network.chainId === 80002) {
      setter(chainsName.amoy);
    }
  } catch (error) {
    console.log(error?.message);
    toast(error?.message);
  }
}
