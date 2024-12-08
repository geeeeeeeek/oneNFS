import { PauseIcon, PlayIcon } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function BottomAudioPlayer({ url = "/audio/sample-9s.mp3" }) {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const audio = audioRef.current;

    const handleLoadedMetadata = () => {
      setDuration(audio.duration);
    };

    const handleTimeUpdate = () => {
      setCurrentTime(audio.currentTime);
    };

    const handleEnded = () => {
      setPlaying(false);
      setCurrentTime(0);
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
  }, [url]);

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

  return (
    <div className="px-4 py-2 w-full flex items-center justify-between gap-3">
      <audio ref={audioRef} src={url} />

      <div className="controls flex items-center gap-2">
        <button
          onClick={handlePlayPause}
          className="bg-primary text-white rounded-full p-1.5"
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
        <button>
          <img src="/icons-dark/shuffle-icon.png" className="w-6 h-6" />
        </button>
        <button>
          <img src="/icons-dark/previous-icon.png" className="w-6 h-6" />
        </button>
        <button>
          <img src="/icons-dark/next-icon.png" className="w-6 h-6" />
        </button>
        <button>
          <img src="/icons-dark/loop-icon.png" className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}
