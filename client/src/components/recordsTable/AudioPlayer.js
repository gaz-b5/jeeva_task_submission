import React from "react";

const AudioPlayer = ({ audioUrl }) => {
  return <audio controls src={audioUrl}></audio>;
};

export default AudioPlayer;
