import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import logoImage from './images/logo-2.png';
import './NetflixTitle.css';  // if you put the CSS here

const NetflixTitle: React.FC = () => {
  const [isAnimating, setIsAnimating] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    console.log('Mount → start animation');
    setIsAnimating(true);
  }, []);

  const handleAnimationEnd = () => {
    console.log('Animation ended → navigate');
    navigate('/browse');
  };

  return (
    <div className="loading-container">
      <img
        src={logoImage}
        alt="Mikhil Logo"
        className={`netflix-logo ${isAnimating ? 'animate' : ''}`}
        onAnimationEnd={handleAnimationEnd}
      />
    </div>
  );
};

export default NetflixTitle;
