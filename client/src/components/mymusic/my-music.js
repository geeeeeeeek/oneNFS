import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { usePrivy, useWallets } from "@privy-io/react-auth";
import { Contract } from "ethers";
import { ownSoundContractABI, ownSoundContractAddress } from "@/utils/contract";
import { Music, Loader2, PlayCircle, Pause } from "lucide-react";
import { toast } from "sonner";
import { useDispatch } from "react-redux";
import { setMusicPlayer } from "@/redux/musicPlayerSlice";
import { Button } from "@/components/ui/button";
import { truncateAddress } from "@/utils/truncateAddress";

const MyMusic = () => {
  const [purchasedSongs, setPurchasedSongs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentlyPlaying, setCurrentlyPlaying] = useState(null);
  const [imagesLoaded, setImagesLoaded] = useState({});
  const { authenticated, ready } = usePrivy();
  const { wallets } = useWallets();
  const w0 = wallets[0];
  const dispatch = useDispatch();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 24,
      },
    },
  };

  const getPurchasedSongs = async () => {
    try {
      const provider = await w0?.getEthersProvider();
      if (!provider) throw new Error("Provider is not available");

      const signer = await provider.getSigner();
      if (!signer) throw new Error("Signer is not available");

      const contract = new Contract(
        ownSoundContractAddress,
        ownSoundContractABI,
        signer
      );

      const purchasedNFTs = await contract.getWalletPurchasedNFTs(w0.address);
      const songsPromises = purchasedNFTs.map((song) =>
        contract.nftMetadata(song)
      );
      const songs = await Promise.all(songsPromises);

      const formattedSongs = songs.map((song, index) => ({
        id: purchasedNFTs[index].toString(),
        tokenId: song[2],
        title: song[3],
        description: song[4],
        image: song[5],
        price: song[0],
        rentPrice: song[8],
        rentDuration: song[9],
        owner: song[10],
        cid: song[12].toString(),
      }));

      setPurchasedSongs(formattedSongs);
    } catch (error) {
      console.error("Error fetching purchased songs:", error);
      toast.error("Failed to fetch purchased songs. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (ready && authenticated && w0?.address) {
      getPurchasedSongs();
    }
  }, [ready, authenticated, w0?.address]);

  const handlePlay = (song) => {
    const number = Number(song.cid);
    console.log(number);
    dispatch(
      setMusicPlayer({
        uri: `/api/hashsong/${number}`,
        isPlaying: true,
        index: 0,
        coverImage: song.image,
        title: song.title,
        artist: song.description,
      })
    );
    setCurrentlyPlaying(currentlyPlaying === song.id ? null : song.id);
  };

  if (!ready || !authenticated || !w0?.address) {
    return (
      <div className="flex justify-center items-center h-64">
        <Loader2 className="animate-spin text-purple-500 w-8 h-8" />
      </div>
    );
  }

  return (
    <motion.div
      className="w-full flex flex-col gap-6 pb-32 h-[85vh] overflow-y-auto scrollbar-hide"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div
        className="mt-10 scroll-m-20 mb-6 border-b pb-4 text-3xl font-semibold tracking-tight transition-colors first:mt-0 w-full flex items-center justify-between sticky top-0 z-50 bg-background"
        variants={itemVariants}
      >
        Your Purchased Songs
      </motion.div>
      {isLoading ? (
        <div className="flex justify-center items-center h-64">
          <Loader2 className="animate-spin text-purple-500 w-8 h-8" />
        </div>
      ) : purchasedSongs.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 p-6">
          {purchasedSongs.map((song) => (
            <motion.div
              key={song.id}
              className="bg-white rounded-xl border overflow-hidden hover:shadow-xl transition-all duration-300"
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className="aspect-w-1 aspect-h-1 relative">
                {!imagesLoaded[song.id] && (
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                    <Loader2 className="animate-spin text-purple-500 w-10 h-10" />
                  </div>
                )}
                {console.log(song)}
                <img
                  src={song.image}
                  alt={song.title}
                  className={`w-full h-full object-cover aspect-square transition-opacity duration-300 ${
                    imagesLoaded[song.id] ? "opacity-100" : "opacity-0"
                  }`}
                  onLoad={() =>
                    setImagesLoaded((prev) => ({ ...prev, [song.id]: true }))
                  }
                  onError={(e) => {
                    console.error("Image load error:", e);
                    e.target.onerror = null;
                    e.target.src = "/path/to/default-image.jpg";
                    setImagesLoaded((prev) => ({ ...prev, [song.id]: true }));
                  }}
                />
              </div>
              <div className="p-3">
                <h3 className="text-xl font-bold text-gray-800 mb-1 truncate">
                  {song.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {song.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-purple-600 font-medium">
                    {truncateAddress(song.owner, 4, 4) || "Unknown Artist"}
                  </span>
                  <Button
                    onClick={() => handlePlay(song)}
                    size="sm"
                    variant={
                      currentlyPlaying === song.id ? "default" : "outline"
                    }
                    className="rounded-full hover:bg-purple-100 hover:text-black transition-colors"
                  >
                    {currentlyPlaying === song.id ? (
                      <Pause className="h-5 w-5 text-white" />
                    ) : (
                      <PlayCircle className="h-5 w-5 text-purple-700" />
                    )}
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      ) : (
        <div className="text-center text-gray-600">
          <Music className="mx-auto text-gray-400 w-16 h-16 mb-4" />
          <p className="text-xl">You haven't purchased any songs yet.</p>
        </div>
      )}
    </motion.div>
  );
};

export default MyMusic;
