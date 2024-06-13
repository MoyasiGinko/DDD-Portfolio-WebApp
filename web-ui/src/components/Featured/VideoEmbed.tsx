"use client";
import React from "react";

const VideoEmbed = () => {
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
            src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=0&mute=0&controls=0&origin=https%3A%2F%2Fmzmedia.digital&playsinline=1&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&enablejsapi=1&widgetid=1"
            id="widget2"
          ></iframe>
        </div>
      </div>
      <div
        className="max-sm:h-20 hidden max-sm:block"
        style={{ width: "400px", height: "200px" }}
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
            src="https://www.youtube.com/embed/GG2be1MKOik?autoplay=0&mute=0&controls=0&origin=https%3A%2F%2Fmzmedia.digital&playsinline=1&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&enablejsapi=1&widgetid=3"
            id="widget4"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default VideoEmbed;
