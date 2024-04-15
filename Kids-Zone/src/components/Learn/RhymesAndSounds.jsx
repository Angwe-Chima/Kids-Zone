import { Link } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useState } from "react";

function RhymesAndSounds() {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const videos = [
    {
      title: "Bla Bla Black Sheep",
      videoId: "YanYDTGkLH8",
      coverPhoto: "https://firebasestorage.googleapis.com/v0/b/kids-zone-78260.appspot.com/o/Bla-Black-Sheep-Cover-Photo.svg?alt=media&token=fbfd2daf-edbf-4063-8691-db154dc142d9",
    },
    {
      title: "Itsy Bitsy Spider",
      videoId: "OPgfpE-QzRg",
      coverPhoto: "https://firebasestorage.googleapis.com/v0/b/kids-zone-78260.appspot.com/o/Itsy-Bitsy-Spider-Cover-Photo.svg?alt=media&token=04289002-f254-43c1-a18e-7cbda84dace8",
    },
    {
      title: "Learn Colors with Slides",
      videoId: "FiC3ClDnsG0",
      coverPhoto: "https://firebasestorage.googleapis.com/v0/b/kids-zone-78260.appspot.com/o/Color-With-Slide-Cover-Photo.svg?alt=media&token=63d33988-34e3-4eab-b09b-876cf06d4378",
    },
    {
      title: "Twikle Twikle Little Star",
      videoId: "hqzvHfy-Ij0",
      coverPhoto: "https://firebasestorage.googleapis.com/v0/b/kids-zone-78260.appspot.com/o/Twinkle-Little-Star-Cover-Photo.svg?alt=media&token=4ef3113e-c573-4cdc-9108-21415c47dc41",
    },
  ];

  const handleClick = (videoId) => {
    setSelectedVideo(videoId === selectedVideo ? null : videoId);
  };

  const YoutubeEmbed = ({ videoId }) => {
    if (!videoId) return null;

    return (
      <div className="video-container">
        <iframe
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    );
  };

  return (
    <div className="rhyme-sound activity">
      <div className="top">
        <Link to="/learn">
          <IoMdArrowRoundBack />
        </Link>
        <h1>Rhythmic Rhymes</h1>
      </div>
      <div className="rhymes">
        <div>
          {videos.map((video) => (
            <div
              className="video-box"
              key={video.title}
              onClick={() => handleClick(video.videoId)}
            >
              {selectedVideo !== video.videoId && (
                <img
                  src={video.coverPhoto}
                  alt={video.title}
                  className="video-cover"
                />
              )}
              {selectedVideo === video.videoId && (
                <YoutubeEmbed videoId={video.videoId} />
              )}
              <p className="video-title">{video.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default RhymesAndSounds;
