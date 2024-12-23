import React, { useState } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { ownSoundContractABI, ownSoundContractAddress } from "@/utils/contract";
import { usePrivy, useWallets } from "@privy-io/react-auth";
import { Contract } from "ethers";
import { motion } from "framer-motion";
import { Input } from "../ui/input";
import { toast } from "sonner";

export function RentAlert({ metadata, songId, isowner }) {
  const [tokenId, setTokenId] = useState(songId);
  const [rentPrice, setRentPrice] = useState("");
  const [rentDuration, setRentDuration] = useState("");
  const { authenticated, ready } = usePrivy();
  const { wallets } = useWallets();
  const w0 = wallets[0];

  const handleSetRent = async () => {
    try {
      const provider = await w0?.getEthersProvider();
      if (!provider) {
        throw new Error("Provider is not available");
      }

      const signer = await provider.getSigner();
      if (!signer) {
        throw new Error("Signer is not available");
      }
      const contract = new Contract(
        ownSoundContractAddress,
        ownSoundContractABI,
        signer
      );

      const res = await contract.setRentInfo(tokenId, rentPrice, rentDuration, {
        gasLimit: 700000,
      });
      await res.wait();
      console.log("Rent set successfully:", res);
      toast.success("Rent set successfully!");
    } catch (error) {
      toast.error("Failed to set rent. Please try again.");
      console.error("Error setting rent:", error);
    }
  };

  const handleRent = async () => {
    try {
      const provider = await w0?.getEthersProvider();
      if (!provider) {
        throw new Error("Provider is not available");
      }

      const signer = await provider.getSigner();
      if (!signer) {
        throw new Error("Signer is not available");
      }
      const contract = new Contract(
        ownSoundContractAddress,
        ownSoundContractABI,
        signer
      );

      if (isowner) {
        // Assuming there's a rentNFT function in the contract
        const res = await contract.rentNFT(tokenId, {
          value: rentPrice,
          gasLimit: 700000,
        });
        await res.wait();
        console.log("NFT rentInfo updated successfully:", res);
        toast.success("NFT rentInfo updated successfully!");
      } else {
        // Assuming there's a rentNFT function in the contract
        const res = await contract.rentNFT(tokenId, {
          //   value: metadata.rentPrice,
          gasLimit: 700000,
        });
        await res.wait();
        console.log("NFT rented successfully:", res);
        toast.success("NFT rented successfully!");
      }
    } catch (error) {
      toast.error("Failed to rent NFT. Please try again.");
      console.error("Error renting NFT:", error);
    }
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-6 border dark:text-white text-black font-semibold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-xl"
        >
          {isowner ? "Set Rent" : "Rent"}
        </motion.button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            {isowner
              ? `Set Rent for ${metadata.name}`
              : `Rent ${metadata.name}`}
          </AlertDialogTitle>
          <AlertDialogDescription>
            {isowner
              ? "Set the rental parameters for your NFT. This action can be modified later."
              : "Rent this NFT for the specified duration."}
          </AlertDialogDescription>
          <div className="space-y-4 mt-4">
            <div>
              <label
                htmlFor="tokenId"
                className="block text-sm font-medium text-gray-700"
              >
                Token ID
              </label>
              <Input
                id="tokenId"
                value={tokenId}
                onChange={(e) => setTokenId(e.target.value)}
                placeholder="Token ID"
                className="mt-1"
                readOnly
              />
            </div>
            {isowner ? (
              <>
                <div>
                  <label
                    htmlFor="rentPrice"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Rent Price (in wei)
                  </label>
                  <Input
                    id="rentPrice"
                    value={rentPrice}
                    onChange={(e) => setRentPrice(e.target.value)}
                    placeholder="Rent Price"
                    className="mt-1"
                  />
                </div>
                <div>
                  <label
                    htmlFor="rentDuration"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Rent Duration (in seconds)
                  </label>
                  <Input
                    id="rentDuration"
                    value={rentDuration}
                    onChange={(e) => setRentDuration(e.target.value)}
                    placeholder="Rent Duration"
                    className="mt-1"
                  />
                </div>
              </>
            ) : (
              <>
                <div>
                  <label
                    htmlFor="rentPrice"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Rent Price
                  </label>
                  <Input
                    id="rentPrice"
                    value={metadata.rentPrice || "Not set"}
                    className="mt-1"
                    readOnly
                  />
                </div>
                <div>
                  <label
                    htmlFor="rentDuration"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Rent Duration
                  </label>
                  <Input
                    id="rentDuration"
                    value={metadata.rentDuration || "Not set"}
                    className="mt-1"
                    readOnly
                  />
                </div>
              </>
            )}
          </div>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={isowner ? handleSetRent : handleRent}>
            {isowner ? "Set Rent" : "Rent Now"}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
