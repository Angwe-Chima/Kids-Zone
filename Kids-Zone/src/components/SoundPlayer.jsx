import { useState, useEffect } from 'react';

const sounds = {
  correct: new Audio("https://firebasestorage.googleapis.com/v0/b/kids-zone-78260.appspot.com/o/success-sound.mp3?alt=media&token=92537102-5500-455d-8e0a-fef600e32a43"),
  wrong: new Audio("https://firebasestorage.googleapis.com/v0/b/kids-zone-78260.appspot.com/o/failed-sound.mp4?alt=media&token=144f6594-6c78-4f00-b036-023ffa811eee"),
};

const SoundPlayer = ({ sound, children }) => {
  const [playing, setPlaying] = useState(false);

  // Preload sound (optional for smoother playback)
  useEffect(() => {
    sound.load();
  }, [sound]);

  const playSound = () => {
    sound.play();
    setPlaying(true);
  };

  // Prevent default click behavior and navigate after sound finishes
  const handleClick = () => {
    playSound();
    sound.onended = () => {
      window.location.href = "/learn"; // Navigate after sound ends
    };
  };

  return (
    <button onClick={handleClick}>{children}</button>
  );
};

export default SoundPlayer;
