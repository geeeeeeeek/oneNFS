import React from "react";

const PlaylistItem = ({ playlist }) => (
  <>
    <div className="w-36 h-36">
      <img
        src={playlist.image}
        className="aspect-square rounded-md w-full h-full object-cover"
        alt={playlist.name}
      />
    </div>
    <div>
      <p
        className="w-full text-center truncate max-w-xs mx-auto"
        title={playlist.name}
      >
        {playlist.name}
      </p>
      <p className="text-sm text-center text-muted-foreground">
        {playlist.tracks.length} songs
      </p>
    </div>
  </>
);

export default PlaylistItem;
