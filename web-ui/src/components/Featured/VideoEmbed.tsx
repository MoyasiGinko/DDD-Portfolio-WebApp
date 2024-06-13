"use client";
import React from "react";

const VideoEmbed = () => {
  const defaultConfig = {
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    autoplay: 0,
    mute: 0,
    controls: 0,
    start: 0,
  };

  const { videoUrl, autoplay, mute, controls, start } = defaultConfig;

  // Conditionally set origin based on window availability
  const origin =
    typeof window !== "undefined"
      ? window.location.origin
      : "https://yourdefaultorigin.com";

  const iframeSrc = `${videoUrl}?autoplay=${autoplay}&mute=${mute}&controls=${controls}&start=${start}&origin=${origin}&playsinline=1&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&enablejsapi=1`;

  return (
    <div className="bg-[#ffffff05] mx-[6%] p-8 flex justify-center items-center rounded-xl max-sm:p-4 startplace1">
      <div
        className="max-sm:h-20 max-sm:hidden"
        style={{ width: "1143px", height: "640px" }}
      >
        <div style={{ width: "100%", height: "100%" }}>
          <iframe
            frameBorder="0"
            allowFullScreen
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            title="MZ Media Launch Video"
            width="100%"
            height="100%"
            src={iframeSrc}
            id="widget2"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default VideoEmbed;
