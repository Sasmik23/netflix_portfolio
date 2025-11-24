import React from 'react';
import { useNavigate } from 'react-router-dom';
import ProfileCard from '../components/ProfileCard';
import clark_cs from '../images/Clark_Kent_CS.jpeg';
import clark_theatre from '../images/Clark_Kent_Theatre.jpeg';
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
