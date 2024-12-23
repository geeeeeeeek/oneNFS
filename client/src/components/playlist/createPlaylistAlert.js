import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
import { Input } from "@/components/ui/input";
import { Check, X, Music, Loader2 } from "lucide-react";
import { usePrivy, useWallets } from "@privy-io/react-auth";
import { Contract } from "ethers";
import { ownSoundContractABI, ownSoundContractAddress } from "@/utils/contract";
import axios from "axios";
import Loader from "../loader";
import { toast } from "sonner";

const CreatePlaylistAlert = () => {
  const [selectedAudios, setSelectedAudios] = useState([]);
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const [playlistName, setPlaylistName] = useState("");
  const [purchasedSongs, setPurchasedSongs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { authenticated, ready } = usePrivy();
  const { wallets } = useWallets();
  const w0 = wallets[0];

  const createPlaylist = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const selectedSongs = selectedAudios.map((audio) => audio.id);

      const { data } = await axios.post("/api/playlist", {
        playName: playlistName,
        playArray: selectedSongs,
        rentalAdd: w0.address,
      });

      console.log("Playlist created:", data);
      toast.success("Playlist created successfully!");
      setIsAlertOpen(false);
      // Reset form
      setPlaylistName("");
      setSelectedAudios([]);
    } catch (error) {
      console.error("Error creating playlist:", error);
      setError(
        error.response?.data?.message ||
          "Failed to create playlist. Please try again."
      );
      toast.error("Failed to create playlist. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const getPurchasedSongs = async () => {
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

      const purchasedNFTs = await contract.getWalletPurchasedNFTs(w0.address);
      console.log(purchasedNFTs);
      const songsPromises = purchasedNFTs.map((song) =>
        contract.nftMetadata(song)
      );
      const songs = await Promise.all(songsPromises);

      // Transform the song data into a more usable format
      const formattedSongs = songs.map((song, index) => ({
        id: index,
        title: song[3],
        description: song[4],
        image: song[5],
      }));

      setPurchasedSongs(formattedSongs);
    } catch (error) {
      console.error("Error fetching purchased songs:", error);
    }
  };

  useEffect(() => {
    if (ready && authenticated && w0?.address !== undefined) {
      getPurchasedSongs();
    }
  }, [ready, authenticated, w0?.address]);

  const toggleAudio = (audio) => {
    setSelectedAudios((prev) =>
      prev.some((a) => a.id === audio.id)
        ? prev.filter((a) => a.id !== audio.id)
        : [...prev, audio]
    );
  };

  return (
    <AlertDialog open={isAlertOpen} onOpenChange={(e) => setIsAlertOpen(e)}>
      <AlertDialogTrigger asChild>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-primary hover:bg-primary/70 text-white font-bold py-2 px-4 rounded-full shadow-lg"
        >
          Create Playlist
        </motion.button>
      </AlertDialogTrigger>
      <AlertDialogContent className="max-w-md bg-gradient-to-br from-gray-50 to-gray-100">
        <AlertDialogHeader>
          <AlertDialogTitle className="text-2xl font-bold text-gray-800">
            Create New Playlist
          </AlertDialogTitle>
          <AlertDialogDescription className="text-gray-600">
            Craft your perfect playlist by adding a name and selecting your
            favorite tracks.
          </AlertDialogDescription>
          <div className="mt-6 space-y-6">
            <div className="space-y-2">
              <label
                htmlFor="playlist-name"
                className="text-sm font-medium text-gray-700"
              >
                Playlist Name
              </label>
              <Input
                id="playlist-name"
                placeholder="Enter playlist name"
                value={playlistName}
                onChange={(e) => setPlaylistName(e.target.value)}
                className="border-gray-300 focus:ring-purple-500 focus:border-purple-500"
              />
            </div>
            {error && <div className="text-red-500 text-sm mt-2">{error}</div>}

            <div className="space-y-2">
              <h4 className="text-sm font-medium text-gray-700">
                Select Audio Tracks:
              </h4>
              <div className="max-h-48 overflow-y-auto overflow-x-hidden border border-gray-200 rounded-md bg-white">
                {purchasedSongs.map((audio) => (
                  <motion.div
                    key={audio.id}
                    className={`flex items-center p-3 cursor-pointer ${
                      selectedAudios.some((a) => a.id === audio.id)
                        ? "bg-purple-100"
                        : "hover:bg-gray-50"
                    }`}
                    onClick={() => toggleAudio(audio)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <img
                      src={audio.image}
                      alt={audio.title}
                      className="w-12 h-12 object-cover rounded-md mr-3"
                    />
                    <div className="flex-grow">
                      <h3 className="text-sm font-medium text-gray-800">
                        {audio.title}
                      </h3>
                      <p className="text-xs text-gray-500">
                        {audio.description}
                      </p>
                    </div>
                    {selectedAudios.some((a) => a.id === audio.id) && (
                      <Check className="h-5 w-5 text-purple-500 ml-2" />
                    )}
                  </motion.div>
                ))}
              </div>
            </div>

            <AnimatePresence>
              {selectedAudios.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="space-y-2 max-h-24 overflow-y-auto"
                >
                  <h4 className="text-sm font-medium text-gray-700">
                    Selected Tracks:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedAudios.map((audio) => (
                      <motion.div
                        key={audio.id}
                        className="bg-purple-100 text-purple-800 text-sm font-medium px-3 py-1 rounded-full flex items-center"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                      >
                        {audio.title}
                        <X
                          className="h-4 w-4 ml-2 cursor-pointer text-purple-600 hover:text-purple-800"
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleAudio(audio);
                          }}
                        />
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel className="bg-gray-200 text-gray-800 hover:bg-gray-300">
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction
            className="bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600"
            disabled={!playlistName || selectedAudios.length === 0}
            onClick={createPlaylist}
          >
            {isLoading ? (
              <>
                <Loader2 className="animate-spin text-white w-20" />
              </>
            ) : (
              "Create Playlist"
            )}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default CreatePlaylistAlert;
