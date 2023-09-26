// components/AudioPlayer.tsx
import React from "react";

interface AudioPlayerProps {
  src: string;
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({ src }) => {
  return (
    <audio controls loop autoPlay>
      <source src={src} type="audio/mp3" />
      Your browser does not support the audio element.
    </audio>
  );
};

export default AudioPlayer;
