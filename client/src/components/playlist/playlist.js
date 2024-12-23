import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import CreatePlaylistAlert from "./createPlaylistAlert";
import { usePrivy, useWallets } from "@privy-io/react-auth";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { PlayCircle, Pause, Clock, DollarSign } from "lucide-react";
import qs from "qs";
import { Contract, ethers } from "ethers";
import { ownSoundContractABI, ownSoundContractAddress } from "@/utils/contract";
import { useDispatch } from "react-redux";
import { setMusicPlayer } from "@/redux/musicPlayerSlice";

const SongItem = ({ song, isPlaying, onPlay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-lg shadow-md overflow-hidden flex items-center p-4 mb-4 hover:shadow-lg transition-shadow duration-300"
    >
      <img
        src={song.imageUrl}
        alt={song.name}
        className="w-16 h-16 rounded-md object-cover mr-4"
      />
      <div className="flex-grow">
        <h3 className="text-lg font-semibold mb-1">{song.name}</h3>
        <p className="text-sm text-gray-600 line-clamp-1">{song.description}</p>
      </div>
      <div className="flex items-center space-x-4">
        <div className="text-right">
          <p className="text-sm text-gray-500 flex items-center">
            <Clock className="w-4 h-4 mr-1" /> {song.rentDuration.toString()}{" "}
            days
          </p>
          <p className="text-sm text-gray-500 flex items-center">
            <DollarSign className="w-4 h-4 mr-1" />{" "}
            {ethers.utils.formatEther(song.price)} MSX
          </p>
        </div>
        <Button
          onClick={() => onPlay(song.cid, song)}
          size="sm"
          variant={isPlaying ? "default" : "outline"}
          className="min-w-[40px]"
        >
          {isPlaying ? (
            <Pause className="h-4 w-4" />
          ) : (
            <PlayCircle className="h-4 w-4" />
          )}
        </Button>
      </div>
    </motion.div>
  );
};

const Playlist = () => {
  const { ready, authenticated } = usePrivy();
  const { wallets } = useWallets();
  const w0 = wallets[0];
  const [playlist, setPlaylist] = useState(null);
  const [songs, setSongs] = useState([]);
  const [currentlyPlaying, setCurrentlyPlaying] = useState(null);

  const getMetadata = async (tokenIds) => {
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

      const songDetailsPromises = tokenIds.map(async (tokenId) => {
        const metadata = await contract.getNFTMetadata(tokenId);
        // console.log(metadata[12].toString());
        return {
          tokenId,
          price: metadata[0],
          name: metadata[3],
          description: metadata[4],
          imageUrl: metadata[5],
          rentPrice: metadata[8],
          rentDuration: metadata[9],
          owner: metadata[10],
          cid: metadata[12].toString(),
        };
      });

      const allSongDetails = await Promise.all(songDetailsPromises);
      setSongs(allSongDetails);
    } catch (error) {
      console.error("Error fetching metadata:", error);
    }
  };

  const getPlaylist = async () => {
    try {
      const { data } = await axios.get(`/api/getPlaylist/${w0.address}`);
      console.log("Playlist data:", data);
      setPlaylist(data);

      if (data.playlistame && data.playlistame.length > 0) {
        const playlistName = data.playlistame[0];
        const random = data.Randomsalt;

        console.log("Sending to backend:", { playlistName, random });

        try {
          const response = await axios.post(
            "/api/getSound",
            qs.stringify({ random, playName: playlistName }),
            {
              headers: {
                "Content-Type": "application/x-www-form-urlencoded",
              },
            }
          );

          console.log("Response from getSound:", response.data);

          if (response.data.playlistData) {
            const tokenIds = response.data.playlistData.split(",").map(Number);
            await getMetadata(tokenIds);
          }
        } catch (error) {
          console.error("Error sending data:", error);
        }
      } else {
        console.log("No playlists found");
      }
    } catch (error) {
      console.error("Error fetching playlist:", error);
    }
  };
  const dispatch = useDispatch();
  const handlePlay = (metadata, song) => {
    console.log(metadata);
    const number = Number(metadata);
    console.log(number);
    console.log(song);
    //   {
    //     "tokenId": 1,
    //     "price": {
    //         "type": "BigNumber",
    //         "hex": "0x64"
    //     },
    //     "name": "Rider",
    //     "description": "I am a Rider status",
    //     "imageUrl": "https://res.cloudinary.com/da9h8exvs/image/upload/v1723144431/xvorjcfq7gtlmcdgnti4.png",
    //     "rentPrice": {
    //         "type": "BigNumber",
    //         "hex": "0x01"
    //     },
    //     "rentDuration": {
    //         "type": "BigNumber",
    //         "hex": "0x0a"
    //     },
    //     "owner": "0xc116C9053d7810d19843fEcc15307dA4DEaC776b",
    //     "cid": "2065586028"
    // }
    dispatch(
      setMusicPlayer({
        uri: `/api/hashsong/${number}`,
        isPlaying: true,
        index: 0,
        coverImage: song.imageUrl,
        title: song.name,
        artist: song.description,
      })
    );
    // setCurrentlyPlaying(currentlyPlaying === tokenId ? null : tokenId);
    // Implement actual playback logic here
  };

  useEffect(() => {
    if (ready && authenticated && w0?.address !== undefined) {
      getPlaylist();
    }
  }, [w0, ready, authenticated]);

  if (!ready || !authenticated || w0?.address === undefined) {
    return <div>Loading...</div>;
  }

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

  return (
    <motion.div
      className="w-full flex flex-col gap-6 pb-32 h-[85vh] overflow-y-auto scrollbar-hide"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div
        className="mt-10 scroll-m-20 border-b pb-4 text-3xl font-semibold tracking-tight transition-colors first:mt-0 w-full flex items-center justify-between sticky top-0 z-50 bg-background"
        variants={itemVariants}
      >
        {/* {console.log(playlist?.playlistame)} */}
        {playlist && playlist.playlistame && playlist.playlistame.length > 0
          ? playlist.playlistame[0]
          : "Your Playlist"}
      </motion.div>
      <div className="container mx-auto px-4 py-8 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {playlist &&
          playlist.playlistame &&
          playlist.playlistame.length > 0 ? (
            <div>
              {/* <h2 className="text-3xl font-bold mb-6 text-center">
                {playlist.playlistame[0]}
              </h2> */}
              {songs.length > 0 ? (
                <div className="space-y-4">
                  {songs.map((song) => (
                    <SongItem
                      key={song.tokenId}
                      song={song}
                      isPlaying={currentlyPlaying === song.tokenId}
                      onPlay={handlePlay}
                    />
                  ))}
                </div>
              ) : (
                <p className="text-xl text-center text-gray-600">
                  No tracks in this playlist yet.
                </p>
              )}
            </div>
          ) : (
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4">No Playlists Yet</h2>
              <p className="text-xl text-gray-600 mb-4">
                Create your first playlist to get started!
              </p>
              <p className="mb-8 max-w-md mx-auto text-gray-500">
                Note: you can only create playlist when you have at least one
                track purchased.
              </p>
              <CreatePlaylistAlert />
            </div>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Playlist;
