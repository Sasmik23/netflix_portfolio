import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import logoImage from './images/logo-2.png';
import netflixSound from './netflix-sound.mp3';
import './NetflixTitle.css';  // if you put the CSS here

const NetflixTitle: React.FC = () => {
  const [isAnimating, setIsAnimating] = useState(false);
  const navigate = useNavigate();
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    console.log('Mount → start animation');
    setIsAnimating(true);

    // Play the Netflix sound
    if (audioRef.current) {
      audioRef.current.play().catch(error => {
        console.log('Audio playback failed:', error);
        // Autoplay might be blocked by browser policy
      });
    }
  }, []);

  const handleAnimationEnd = () => {
    console.log('Animation ended → navigate');
    navigate('/browse');
  };

  return (
    <div className="loading-container">
      <audio ref={audioRef} src={netflixSound} preload="auto" />
      <img
        src={logoImage}
        alt="Mikhil Logo"
        className={`netflix-logo ${isAnimating ? 'animate' : ''}`}
        onAnimationEnd={handleAnimationEnd}
        loading="eager"
      />
    </div>
  );
};

export default NetflixTitle;
