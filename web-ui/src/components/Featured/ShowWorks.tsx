import React, { useState, useEffect } from "react";
import "./project-showcase.css"; // Ensure this path is correct

const ProjectShowcase: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handleVideoPlay = () => setIsPlaying(true);
  const handleVideoPause = () => setIsPlaying(false);

  const videos = [
    {
      src: "https://player.vimeo.com/video/900401422",
      width: 600,
      height: 340,
    },
    {
      src: "https://player.vimeo.com/video/900415881",
      width: 200,
      height: 340,
    },
    {
      src: "https://player.vimeo.com/video/914142444",
      width: 600,
      height: 340,
    },
    {
      src: "https://player.vimeo.com/video/900448896",
      width: 200,
      height: 340,
    },
    {
      src: "https://player.vimeo.com/video/900446602",
      width: 600,
      height: 340,
    },
  ];

  const additionalVideos = [
    {
      src: "https://player.vimeo.com/video/900416270",
      width: 600,
      height: 340,
    },
    {
      src: "https://player.vimeo.com/video/900415983",
      width: 200,
      height: 340,
    },
    {
      src: "https://player.vimeo.com/video/929241158",
      width: 600,
      height: 340,
    },
    {
      src: "https://player.vimeo.com/video/900414787",
      width: 200,
      height: 340,
    },
    {
      src: "https://player.vimeo.com/video/929243352",
      width: 600,
      height: 340,
    },
  ];

  return (
    <div id="project" className="project-showcase-container">
      <div className="marquee-container">
        <div className={`marquee ${isPlaying ? "paused" : ""}`}>
          {videos.map((video, index) => (
            <div key={index} className="video-container">
              <iframe
                src={video.src}
                width={video.width}
                height={video.height}
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                title={`Video ${index + 1}`}
                onLoad={() => {
                  const iframe = document.querySelectorAll("iframe")[index];
                  iframe?.contentWindow?.addEventListener(
                    "play",
                    handleVideoPlay
                  );
                  iframe?.contentWindow?.addEventListener(
                    "pause",
                    handleVideoPause
                  );
                }}
              ></iframe>
            </div>
          ))}
        </div>
      </div>

      <div className="marquee-container mt-6">
        <div className={`marquee ${isPlaying ? "paused" : ""}`}>
          {additionalVideos.map((video, index) => (
            <div key={index} className="video-container">
              <iframe
                src={video.src}
                width={video.width}
                height={video.height}
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                title={`Additional Video ${index + 1}`}
                onLoad={() => {
                  const iframe =
                    document.querySelectorAll("iframe")[index + videos.length];
                  iframe?.contentWindow?.addEventListener(
                    "play",
                    handleVideoPlay
                  );
                  iframe?.contentWindow?.addEventListener(
                    "pause",
                    handleVideoPause
                  );
                }}
              ></iframe>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectShowcase;
