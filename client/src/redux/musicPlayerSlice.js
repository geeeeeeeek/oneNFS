import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  uri: "/audio/chin-tapak-dum-dum.mp3",
  isPlaying: true,
  index: 0,
  coverImage: "",
  title: "",
  artist: "",
};

const musicPlayerSlice = createSlice({
  name: "musicPlayer",
  initialState,
  reducers: {
    setUri: (state, action) => {
      state.uri = action.payload;
    },
    setIsPlaying: (state, action) => {
      state.isPlaying = action.payload;
    },
    setIndex: (state, action) => {
      state.index = action.payload;
    },
    setMusicPlayer: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { setUri, setIsPlaying, setIndex, setMusicPlayer } =
  musicPlayerSlice.actions;
export default musicPlayerSlice.reducer;
