// RTSPPlayer.jsx

import React from "react";
import ReactPlayer from "react-player";

const RTSP_URL =
  "http://localhost:8083/stream/pattern/channel/0/hls/live/index.m3u8";

const RTSPPlayer = () => {
  return (
    <ReactPlayer
      url={RTSP_URL}
      style={{ backgroundColor: "#000", borderRadius: 16 }}
      width="100%"
      height="100%"
      playing={true}
      controls={false}
      muted={true}
    />
  );
};

export default RTSPPlayer;
