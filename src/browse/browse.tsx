import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ProfileCard from '../components/ProfileCard';
import clark_cs from '../images/Clark_Kent_CS.jpg';
import clark_theatre from '../images/Clark_Kent_Theatre.jpg';
import { profileBackgroundGifs, getRandomGif } from '../data/profileGifs';
import './browse.css';

const Browse: React.FC = () => {
  const navigate = useNavigate();

  const profiles = [
    {
      name: "Computing" as const,
      image: clark_cs,
    },
    {
      name: "Theatre" as const,
      image: clark_theatre,
    },
  ];

  // Preload profile images and background GIFs
  useEffect(() => {
    profiles.forEach(profile => {
      const img = new Image();
      img.src = profile.image;
      
      // Preload all possible background GIFs
      profileBackgroundGifs[profile.name].forEach(gif => {
        const gifImg = new Image();
        gifImg.src = gif;
      });
    });
  }, []);

  const handleProfileClick = (profile: { name: 'Computing' | 'Theatre'; image: string }) => {
    const randomGif = getRandomGif(profile.name);
    navigate(`/profile/${profile.name}`, { state: { profileImage: profile.image, backgroundGif: randomGif } });
  };

  return (
    <div className="browse-container">
      <p className='who-is-watching'>Who's Watching?</p>
      <div className="profiles">
        {profiles.map((profile, index) => (
          <ProfileCard
            key={index}
            name={profile.name}
            image={profile.image}
            onClick={() => handleProfileClick(profile)}
          />
        ))}
      </div>
    </div>
  );
};

export default Browse;
