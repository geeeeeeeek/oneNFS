import React from "react";

const TrackItem = ({ track, setSelectedLayout }) => (
  <div
    className="p-3 hover:bg-muted rounded-lg cursor-pointer"
    onClick={() => setSelectedLayout(`view-song/${track.id}`)}
  >
    <div className="w-36 h-36">
      <img
        src={track.cover}
        className="aspect-square rounded-md w-full h-full object-cover"
        alt={track.title}
      />
    </div>
    <div>
      <p
        className="w-full text-center truncate max-w-xs mx-auto"
        title={track.title}
      >
        {track.title}
      </p>
      <p className="text-sm text-center text-muted-foreground">
        {track.artist}
      </p>
    </div>
  </div>
);

export default TrackItem;
