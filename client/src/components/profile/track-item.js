import React from "react";
import { PlayCircle } from "lucide-react";
import { useDispatch } from "react-redux";
import { setMusicPlayer } from "@/redux/musicPlayerSlice";
import axios from "axios";
import { toast } from "sonner";

const TrackItem = ({ song }) => {
  const dispatch = useDispatch();
  const [id, metadata, ownership] = song;
  console.log(id.toString());

  const playSong = async (id, meta) => {
    const number = Number(meta[12].toString());
    try {
      // const { data } = await axios.post(`/api/hashsong`, {
      //   randomId: number,
      // });
      // console.log(data);

      dispatch(
        setMusicPlayer({
          uri: `/api/hashsong/${number}`,
          isPlaying: true,
          index: 0,
          coverImage: meta[5],
          title: meta[3],
          artist: meta[4],
        })
      );
    } catch (error) {
      console.error("Error playing song:", error);
      toast.error("Failed to play song. Please try again.");
    }
  };

  return (
    <>
      <div className="relative flex">
        <div className="w-36 h-36">
          <img
            src={metadata[5]}
            className="aspect-square rounded-md w-full h-full object-cover"
            alt={metadata[3]}
          />
        </div>
        <div
          className="w-10 h-10 cursor-pointer bg-primary z-10 -bottom-3 -right-2 absolute rounded-full flex items-center justify-center text-white"
          onClick={() => {
            playSong(
              "bafybeic5zcykf7fpg7c2zuf76p2gddegxlt64hbfp76qqs7l4l6yx3nraa",
              metadata
            );
          }}
        >
          <PlayCircle />
        </div>
      </div>

      <div>
        <p
          className="w-full text-center truncate max-w-xs mx-auto"
          title={metadata[3]}
        >
          {metadata[3]}
        </p>
        <p className="text-sm text-center text-muted-foreground">
          {metadata[4]}
        </p>
      </div>
    </>
  );
};

export default TrackItem;
