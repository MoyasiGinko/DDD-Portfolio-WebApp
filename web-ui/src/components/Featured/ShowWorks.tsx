import React, { useState, useRef } from "react";
import "./project-showcase.css"; // Ensure this path is correct

const ProjectShowcase: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handleVideoPlay = () => setIsPlaying(true);
  const handleVideoPause = () => setIsPlaying(false);
  const videos = [
    {
      src: "https://www.youtube.com/embed/_ER9X87xh0I?si=Mt7jjdg13OoZVFCM",
      width: 600,
      height: 340,
    },
    {
      src: "https://www.youtube.com/embed/OUNhuE-SnYg?si=qWPHy2FFFBvrTDzY",
      width: 600,
      height: 340,
    },
    {
      src: "https://www.youtube.com/embed/rlonGk2UcnE?si=s1dRCtXpru3P_K3p",
      width: 600,
      height: 340,
    },
    {
      src: "https://www.youtube.com/embed/ERTAcF0r3D8?si=fo_bH8GqSK1tzVP1",
      width: 600,
      height: 340,
    },
    {
      src: "https://www.youtube.com/embed/ERTAcF0r3D8?si=gIm3cLCSE50xe_LC",
      width: 600,
      height: 340,
    },
  ];

  const additionalVideos = [
    {
      src: "https://www.youtube.com/embed/ikVXM-gwb4o?si=tabJepwEfKP9Z9NG",
      width: 600,
      height: 340,
    },
    {
      src: "https://www.youtube.com/embed/4KgPuUv-6u8?si=0uWZ0yi_2l81vKkj",
      width: 600,
      height: 340,
    },
    {
      src: "https://www.youtube.com/embed/NmQj0XgQo54?si=jl1tvGFK1XhRQIXE",
      width: 600,
      height: 340,
    },
    {
      src: "https://www.youtube.com/embed/IgyzLiTkd5k?si=QfpHqgWn2imHRNRT",
      width: 600,
      height: 340,
    },
    {
      src: "https://www.youtube.com/embed/yIzXhzb2PP0?si=YWNMD8jVmy44OlPI",
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
