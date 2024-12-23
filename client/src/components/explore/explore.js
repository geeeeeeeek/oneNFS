import { ArrowLeftIcon } from "lucide-react";
import React, { useEffect, useState } from "react";
import { playlists } from "@/utils/dummy";
import HorizontalScroll from "../horizontal-scroll";
import { v4 as uuidv4 } from "uuid";
import { Input } from "../ui/input";
import TrackItem from "./track-item";
import PlaylistItem from "./playlistItem";
import { motion } from "framer-motion";
import { Contract } from "ethers";
import { ownSoundContractABI, ownSoundContractAddress } from "@/utils/contract";
import { usePrivy } from "@privy-io/react-auth";
import Loader from "../loader";

const Explore = ({ setSelectedLayout, w0 }) => {
  const { authenticated, ready } = usePrivy();
  const [searchQuery, setSearchQuery] = useState("");
  const [audioTracks, setAudioTracks] = useState([]);
  const [isLoadingTracks, setIsLoadingTracks] = useState(true);
  const [isLoadingPlaylists, setIsLoadingPlaylists] = useState(true);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const getAllMusics = async () => {
    try {
      setIsLoadingTracks(true);
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

      const res = await contract.getAllTokensInfo();
      const formattedTracks = res
        .map((track) => {
          return {
            id: track[0].toNumber(),
            title: track[1][3],
            artist: track[1][4],
            cover: track[1][5],
            price: track[1][0].toNumber(),
            owner: track[2],
          };
        })
        .reverse();
      setAudioTracks(formattedTracks);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoadingTracks(false);
    }
  };

  const getPlaylists = async () => {
    // Simulating playlist fetch with a timeout
    setIsLoadingPlaylists(true);
    setTimeout(() => {
      // Here you would typically fetch playlists from an API
      // For now, we're using the dummy data
      setIsLoadingPlaylists(false);
    }, 1000);
  };

  useEffect(() => {
    if (ready && authenticated && w0?.address !== undefined) {
      getAllMusics();
      getPlaylists();
    }
  }, [w0, ready, authenticated]);

  const filterItems = (items, query) => {
    return items.filter((item) => {
      const title = item.title || "";
      const artist = item.artist || "";
      return (
        title.toLowerCase().includes(query.toLowerCase()) ||
        artist.toLowerCase().includes(query.toLowerCase())
      );
    });
  };

  const filteredTracks = filterItems(audioTracks, searchQuery);
  const filteredPlaylists = filterItems(playlists, searchQuery);

  // Animation variants
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
    },
  };

  return (
    <motion.div
      className="w-full flex flex-col gap-6 pb-32 h-[85vh] overflow-y-auto scrollbar-hide mt-2"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div
        className="mt-10 scroll-m-20 border-b pb-4 text-3xl font-semibold tracking-tight transition-colors first:mt-0 sticky top-0 z-[50] bg-background w-full flex items-center justify-between"
        variants={itemVariants}
      >
        Explore
        <motion.div
          className="w-auto p-1"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </motion.div>
      </motion.div>

      <motion.div variants={itemVariants}>
        {isLoadingTracks ? (
          <div className="text-center h-32 grid place-items-center">
            <Loader />
          </div>
        ) : filteredTracks.length > 0 ? (
          <HorizontalScroll
            items={filteredTracks}
            renderItem={(track) => (
              <TrackItem track={track} setSelectedLayout={setSelectedLayout} />
            )}
            containerId={`scrollContainer-${uuidv4()}`}
          />
        ) : (
          <div className="text-center">No tracks found</div>
        )}
      </motion.div>

      <motion.div variants={itemVariants}>
        <motion.div
          className="scroll-m-20 mb-5 border-b pb-2 text-xl font-semibold tracking-tight transition-colors first:mt-0"
          variants={itemVariants}
        >
          Popular Playlists
        </motion.div>
        {isLoadingPlaylists ? (
          <div className="text-center h-32 grid place-items-center">
            <Loader />
          </div>
        ) : filteredPlaylists.length > 0 ? (
          <HorizontalScroll
            items={filteredPlaylists}
            renderItem={(playlist) => (
              <PlaylistItem
                playlist={playlist}
                setSelectedLayout={setSelectedLayout}
              />
            )}
            containerId={`scrollContainer-${uuidv4()}`}
          />
        ) : (
          <div className="text-center">No playlists found</div>
        )}
      </motion.div>
    </motion.div>
  );
};

export default Explore;
