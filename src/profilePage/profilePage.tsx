import React, { useMemo } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import './ProfilePage.css';

import ProfileBanner from './ProfileBanner';
import TopPicksRow from './TopPicksRow';
import ContinueWatching from './ContinueWatching';
import AdventurerProfileContent from './AdventurerProfileContent';
import { getRandomGif } from '../data/profileGifs';
type ProfileType = 'Computing' | 'Theatre';

const ProfilePage: React.FC = () => {
  const location = useLocation();
  const { profileName } = useParams<{ profileName: string }>();

  const profile = ['Computing', 'Theatre'].includes(profileName!)
    ? (profileName as ProfileType)
    : 'Computing';

  // Pick a random GIF every time the component mounts (on every navigation)
  const backgroundGif = useMemo(() => {
    // If there's a backgroundGif in location state (coming from Browse or navigation with state), use it
    // Otherwise, pick a new random one
    return location.state?.backgroundGif || getRandomGif(profile);
  }, [location.state?.backgroundGif, profile, profileName]);

  const profileImage = location.state?.profileImage;

  if (profile === 'Theatre') {
    return (
      <>
        <div
          className="profile-page"
          style={{ backgroundImage: `url(${backgroundGif})` }}
        >
          <ProfileBanner key={`banner-theatre`} />
        </div>
        <AdventurerProfileContent key={`adventurer-${profile}`} backgroundGif={backgroundGif} profileImage={profileImage} />
      </>
    );
  }

  return (
    <>
      <div
        className="profile-page"
        style={{ backgroundImage: `url(${backgroundGif})` }}
      >
        <ProfileBanner key={`banner-${profile}`} />
      </div>
      <TopPicksRow key={`toppicks-${profile}`} profile={profile} />
      <ContinueWatching key={`continue-${profile}`} profile={profile} />
    </>
  );
};

export default ProfilePage;
