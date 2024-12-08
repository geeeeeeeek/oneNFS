const getRandomImageUri = () =>
  `https://picsum.photos/200/300?random=${Math.floor(Math.random() * 1000)}`;

export const audioTracks = [
  {
    title: "Peaceful Ambience",
    artist: "Ownsound",
    soundUri: "path/to/cover1.jpg",
    cover: getRandomImageUri(),
  },
  {
    title: "Rainy Day Meditation",
    artist: "Ownsound",
    soundUri: "path/to/cover2.jpg",
    cover: getRandomImageUri(),
  },
  {
    title: "Forest Soundscape",
    artist: "Ownsound",
    soundUri: "path/to/cover3.jpg",
    cover: getRandomImageUri(),
  },
];
