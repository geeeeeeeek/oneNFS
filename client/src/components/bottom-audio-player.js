import { PauseIcon, PlayIcon } from "lucide-react";
import { GiNextButton } from "react-icons/gi";
import { GiPreviousButton } from "react-icons/gi";
import { FaShuffle } from "react-icons/fa6";
import { FaRepeat } from "react-icons/fa6";
import { useEffect, useRef, useState } from "react";
import { audioTracks } from "@/utils/dummy";

export default function BottomAudioPlayer({ url }) {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    if (url) {
      const audio = audioRef.current;
      setCurrentTime(0);
      setPlaying(false);
      audioRef.current.play();
      setPlaying(true);

      const handleLoadedMetadata = () => {
        setDuration(audio.duration);
      };

      const handleTimeUpdate = () => {
        setCurrentTime(audio.currentTime);
      };

      const handleEnded = () => {
        setPlaying(false);
        setCurrentTime(0);
        //handleNext("next");
      };

      if (audio) {
        audio.addEventListener("loadedmetadata", handleLoadedMetadata);
        audio.addEventListener("timeupdate", handleTimeUpdate);
        audio.addEventListener("ended", handleEnded);
      }

      return () => {
        if (audio) {
          audio.removeEventListener("loadedmetadata", handleLoadedMetadata);
          audio.removeEventListener("timeupdate", handleTimeUpdate);
          audio.removeEventListener("ended", handleEnded);
        }
      };
    }
  }, [url]);

  // const handleNext = (type) => {
  //   let nextIndex = musicPlayer.index;
  //   if (type === "next") nextIndex = nextIndex + 1;
  //   else nextIndex = nextIndex - 1;

  //   if (nextIndex < 0) nextIndex = audioTracks.length - 1;
  //   if (nextIndex >= audioTracks.length) nextIndex = 0;

  //   setMusicPlayer({ ...musicPlayer, index: nextIndex });
  //   setCurrentTime(0);
  //   setPlaying(false);

  //   setTimeout(() => {
  //     audioRef.current.play();
  //     setPlaying(true);
  //   }, 50);
  // };
  const handlePlayPause = () => {
    const audio = audioRef.current;
    if (playing) {
      audio.pause();
    } else {
      audio.play();
    }
    setPlaying(!playing);
  };

  const handleSeek = (event) => {
    const audio = audioRef.current;
    const seekTime = (event.target.value / 100) * duration;
    audio.currentTime = seekTime;
  };

  const formatTime = (time) => {
    if (isNaN(time)) {
      return "00:00";
    }
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" + seconds : seconds}`;
  };
  console.log(url);

  return (
    <div className="px-4 py-2 w-full flex items-center justify-between gap-3">
      <audio key={url} ref={audioRef} src={url} />

      <div className="controls flex items-center gap-2">
        <button
          onClick={handlePlayPause}
          className="bg-primary text-white rounded-full p-1.5 flex items-center justify-center"
        >
          {!playing ? (
            <PlayIcon className="w-3 h-3" />
          ) : (
            <PauseIcon className="w-3 h-3" />
          )}
        </button>
      </div>

      <div className="flex-1 flex items-center gap-2">
        <span className="text-sm">{formatTime(currentTime)}</span>
        <input
          type="range"
          min="0"
          max="100"
          value={(currentTime / duration) * 100 || 0}
          onChange={handleSeek}
          className="flex-1 range accent-primary"
        />
        <span className="text-sm">{formatTime(duration)}</span>
      </div>

      <div className="flex items-center gap-2">
        <FaShuffle
          // onClick={() => handleNext("shuffle")}
          className="cursor-pointer"
        />
        <GiPreviousButton
          // onClick={() => handleNext("previous")}
          className="cursor-pointer"
        />
        <GiNextButton
          // onClick={() => handleNext("next")}
          className="cursor-pointer"
        />
        <FaRepeat
          // onClick={() => handleNext("repeat")}
          className="cursor-pointer"
        />
      </div>
    </div>
  );
}
