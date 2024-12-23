const getRandomImageUri = () =>
  `https://picsum.photos/200/300?random=${Math.floor(Math.random() * 1000)}`;

export const audioTracks = [
  {
    title: "Peaceful Ambience",
    artist: "Ownsound",
    soundUri: "/audio/sample-9s.mp3",
    cover: getRandomImageUri(),
  },
  {
    title: "Peaceful Ambience",
    artist: "Ownsound",
    soundUri: "/audio/sample-9s.mp3",
    cover: getRandomImageUri(),
  },
  {
    title: "Peaceful Ambience",
    artist: "Ownsound",
    soundUri: "/audio/sample-9s.mp3",
    cover: getRandomImageUri(),
  },
  {
    title: "Rainy Day Meditation",
    artist: "Ownsound",
    soundUri: "/audio/sample-1s.mp3",
    cover: getRandomImageUri(),
  },
  {
    title: "Forest Soundscape",
    artist: "Ownsound",
    soundUri: "/audio/sample-9s.mp3",
    cover: getRandomImageUri(),
  },
];

export const playlists = [
  {
    name: "Relaxation Sounds",
    description: "Soothing sounds to help you relax and unwind.",
    creator: "John Doe",
    image: getRandomImageUri(),
    tracks: [
      {
        title: "Peaceful Ambience",
        artist: "Ownsound",
        soundUri: "/audio/sample-9s.mp3",
        cover: getRandomImageUri(),
      },
      {
        title: "Rainy Day Meditation",
        artist: "Ownsound",
        soundUri: "/audio/sample-1s.mp3",
        cover: getRandomImageUri(),
      },
      {
        title: "Forest Soundscape",
        artist: "Ownsound",
        soundUri: "/audio/sample-9s.mp3",
        cover: getRandomImageUri(),
      },
      {
        title: "Ocean Waves",
        artist: "Nature Tunes",
        soundUri: "/audio/sample-4s.mp3",
        cover: getRandomImageUri(),
      },
    ],
  },
  {
    name: "Nature Sounds",
    description: "Immerse yourself in the sounds of nature.",
    creator: "Jane Smith",
    image: getRandomImageUri(),
    tracks: [
      {
        title: "Mountain Stream",
        artist: "Nature Tunes",
        soundUri: "/audio/sample-7s.mp3",
        cover: getRandomImageUri(),
      },
      {
        title: "Birdsong",
        artist: "Nature Tunes",
        soundUri: "/audio/sample-5s.mp3",
        cover: getRandomImageUri(),
      },
      {
        title: "Night Crickets",
        artist: "Nature Tunes",
        soundUri: "/audio/sample-2s.mp3",
        cover: getRandomImageUri(),
      },
      {
        title: "Morning Dew",
        artist: "Nature Tunes",
        soundUri: "/audio/sample-3s.mp3",
        cover: getRandomImageUri(),
      },
    ],
  },
  {
    name: "Instrumental Calm",
    description: "Relaxing instrumental tracks to help you focus.",
    creator: "Alex Johnson",
    image: getRandomImageUri(),
    tracks: [
      {
        title: "Calm Piano",
        artist: "Relaxation Music",
        soundUri: "/audio/sample-8s.mp3",
        cover: getRandomImageUri(),
      },
      {
        title: "Evening Serenity",
        artist: "Relaxation Music",
        soundUri: "/audio/sample-6s.mp3",
        cover: getRandomImageUri(),
      },
      {
        title: "Gentle Guitar",
        artist: "Relaxation Music",
        soundUri: "/audio/sample-10s.mp3",
        cover: getRandomImageUri(),
      },
      {
        title: "Soft Strings",
        artist: "Relaxation Music",
        soundUri: "/audio/sample-11s.mp3",
        cover: getRandomImageUri(),
      },
    ],
  },
];
