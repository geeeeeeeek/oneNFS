import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { IoIosArrowUp } from "react-icons/io";
import { usePrivy, useWallets } from "@privy-io/react-auth";
import { Contract, ethers } from "ethers";
import { toast } from "sonner";
import {
  musicXContractABI,
  musicXContractAddress,
  ownSoundContractABI,
  ownSoundContractAddress,
} from "@/utils/contract";
import { RentAlert } from "./rent";
import Loader from "../loader";

const Song = ({ selectedLayout, setSelectedLayout, getMusicXTokenBalance }) => {
  const { authenticated, ready } = usePrivy();
  const { wallets } = useWallets();
  const [songDetailsLoading, setSongDetailsLoading] = useState(true);
  const [approvalLoading, setApprovalLoading] = useState(false);
  const [purchaseLoading, setPurchaseLoading] = useState(false);
  const [isPurchased, setIsPurchased] = useState(false);
  const w0 = wallets[0];
  const [songDetails, setSongDetails] = useState(null);

  const songId = selectedLayout.split("view-song/")[1];

  const getSongDetails = async (id) => {
    try {
      setSongDetailsLoading(true);
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

      const res = await contract.getNFTMetadata(id);
      console.log(res);

      // Parse the response
      const parsedDetails = {
        id: res[0].toNumber(),
        isListed: res[1],
        price: res[0].toNumber(),
        name: res[3],
        description: res[4],
        imageUrl: res[5],
        audioUrl: res[6],
        isRentable: res[7],
        rentPrice: res[8].toNumber(),
        royaltyPercentage: res[9].toNumber(),
        creator: res[10],
        totalRents: res[11].toNumber(),
        createdAt: new Date().toLocaleDateString(), //current date,
      };

      console.log(parsedDetails);

      const rentTime = await contract.getRentableTokens();
      if (rentTime.length === 0) {
        console.log("No rentable tokens");
        setSongDetails({ ...parsedDetails, rentPrice: 0 });
        return;
      }
      console.log(rentTime);
      const s = rentTime[0][1];
      const rentDetails = {
        songName: s[3],
        songSymbol: s[4],
        imageUrl: s[5],
        isRentable: s[8],
        rentPrice: s[9].toString(),
        rentDuration: s[10],
        ownerAddress: s[11],
        rentStartTime: s[13],
      };
      console.log(rentDetails);
      const parsedPrice = ethers.utils.parseEther(
        parsedDetails.price.toString()
      );
      console.log(parsedPrice.toString());

      setSongDetails({ ...parsedDetails, rentPrice: rentDetails.rentPrice });
    } catch (error) {
      console.error("Error fetching song details:", error);
      toast.error("Failed to fetch song details");
    } finally {
      setSongDetailsLoading(false);
    }
  };

  const getOwnershipInfo = async (id) => {
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

      const res = await contract.ownershipInfo(id, w0.address);
      console.log(res);

      // Check if the user has already purchased the song
      setIsPurchased(res[0]);
    } catch (error) {
      console.error("Error fetching ownership info:", error);
      toast.error("Failed to fetch ownership information");
    }
  };
  console.log(songId);
  useEffect(() => {
    if (ready && authenticated && w0?.address !== undefined) {
      getOwnershipInfo(songId);
      getSongDetails(songId);
    }
  }, [songId, ready, authenticated, w0?.address]);

  const buyNFT = async (id) => {
    try {
      setPurchaseLoading(true);
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

      const contract1 = new Contract(
        musicXContractAddress,
        musicXContractABI,
        signer
      );

      // Check if the user has approved the contract to spend their tokens
      const allowance = await contract1.allowance(
        await signer.getAddress(),
        ownSoundContractAddress
      );

      if (allowance.lt(ethers.utils.parseEther(songDetails.price.toString()))) {
        // If the allowance is not enough, prompt the user to approve the contract
        setApprovalLoading(true);
        const approveTx = await contract1.approve(
          ownSoundContractAddress,
          ethers.utils.parseEther(songDetails.price.toString()),
          { gasLimit: 300000 }
        );
        await approveTx.wait(1);
        setApprovalLoading(false);
      }

      // After approval, buy the NFT
      const txn = await contract.buyNFT(id, { gasLimit: 300000 });
      await txn.wait(1);

      // Refresh the song details after the purchase
      await getSongDetails(id);
      // await getMusicXTokenBalance();
      toast.success("NFT purchased successfully!");
    } catch (error) {
      console.error("Error buying NFT:", error);
      if (
        error.message.includes("ERC20: insufficient allowance") ||
        error.message.includes("user denied transaction signature")
      ) {
        toast.error(
          "You need to approve the contract to spend your tokens. Click the 'Approve' button to continue."
        );
      } else {
        toast.error("Failed to purchase NFT. Please try again later.");
      }
    } finally {
      setPurchaseLoading(false);
    }
  };

  if (songDetailsLoading) {
    return (
      <div className="text-center mt-80 w-full grid place-items-center">
        <Loader />
      </div>
    );
  }

  if (!songDetails) {
    return <div className="text-center mt-8">No song details available.</div>;
  }

  return (
    <div className="w-full flex flex-col gap-6 pb-32 h-[85vh] overflow-y-auto scrollbar-hide">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="scroll-m-20 border-b pb-4 pt-2 text-3xl font-semibold tracking-tight sticky top-0 z-[50] bg-background w-full flex items-center gap-4"
      >
        <div
          className="hover:bg-muted text-foreground p-1.5 cursor-pointer rounded-full"
          onClick={() => setSelectedLayout("explore")}
        >
          <IoIosArrowUp size={24} className="-rotate-90" />
        </div>
        Song Details
      </motion.div>

      <div className="flex flex-col md:flex-row gap-8 px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-full md:w-1/3"
        >
          <img
            src={songDetails.imageUrl}
            alt={songDetails.name}
            className="w-full h-auto rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="w-full md:w-2/3 space-y-4"
        >
          <h2 className="text-4xl font-bold text-primary">
            {songDetails.name}
          </h2>
          <p className="text-xl text-muted-foreground">
            Creator: {songDetails.creator}
          </p>
          <p className="text-muted-foreground">{songDetails.description}</p>

          <div className="grid grid-cols-2 gap-4 mt-6">
            <div className="border dark:border-none dark:bg-gray-800 bg-muted p-4 rounded-lg">
              <p className="text-foreground dark:text-gray-400">Price</p>
              <p className="text-2xl font-semibold text-green-400">
                {songDetails.price} MSX
              </p>
            </div>
            <div className="border dark:border-none dark:bg-gray-800 bg-muted p-4 rounded-lg">
              <p className="text-foreground dark:text-gray-400">Royalty</p>
              <p className="text-2xl font-semibold text-yellow-400">
                {songDetails.royaltyPercentage}%
              </p>
            </div>
            <div className="border dark:border-none dark:bg-gray-800 bg-muted p-4 rounded-lg">
              <p className="text-foreground dark:text-gray-400">Rentable</p>
              <p className="text-xl font-semibold text-blue-400">
                {songDetails.isRentable ? "Yes" : "No"}
              </p>
            </div>
            <div className="border dark:border-none dark:bg-gray-800 bg-muted p-4 rounded-lg">
              <p className="text-foreground dark:text-gray-400">Rent Price</p>
              <p className="text-xl font-semibold text-pink-400">
                {songDetails.rentPrice} MSX
              </p>
            </div>
          </div>

          <p className="text-muted-foreground mt-4">
            Created on: {songDetails.createdAt}
          </p>
          {console.log(songId)}
          {songDetails.creator !== w0.address ? (
            <div className="flex items-center gap-3">
              {songDetails.isRentable && (
                <RentAlert
                  metadata={songDetails}
                  songId={songId}
                  isowner={isPurchased}
                />
              )}
              {!isPurchased && songDetails.isListed && (
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-6 bg-primary hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-xl"
                  onClick={() => buyNFT(songId)}
                  disabled={purchaseLoading || approvalLoading}
                >
                  {purchaseLoading
                    ? "Purchasing..."
                    : approvalLoading
                    ? "Approving..."
                    : "Purchase Now"}
                </motion.button>
              )}
              {/* {isPurchased && (
                <p className="text-green-500 font-semibold">
                  You have already purchased this song.
                </p>
              )} */}
            </div>
          ) : (
            <p className="text-red-500">
              You cannot purchase your own song. You are the creator of this
            </p>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Song;
