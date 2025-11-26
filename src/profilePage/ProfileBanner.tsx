import React, { useState } from 'react';
import './ProfileBanner.css';
import PlayButton from '../components/PlayButton';
import MoreInfoButton from '../components/MoreInfoButton';
import { profileBanner as bannerData } from '../data/profileBanner';
import resume1 from '../images/resume1.png';
import resume2 from '../images/resume2.png';

const ProfileBanner: React.FC = () => {
  const [showResumeModal, setShowResumeModal] = useState(false);

  const handlePlayClick = () => {
    setShowResumeModal(true);
  };

  const handleLinkedinClick = () => {
    window.open(bannerData.linkedinLink, '_blank');
  };

  const closeModal = () => {
    setShowResumeModal(false);
  }

  return (
    <>
      <div className="profile-banner">
        <div className="banner-content">
          <h1 className="banner-headline" id='headline'>{bannerData.headline}</h1>
          <p className="banner-description">
            {bannerData.profileSummary}
          </p>

          <div className="banner-buttons">
            <PlayButton onClick={handlePlayClick} label="Resume" />
            <MoreInfoButton onClick={handleLinkedinClick} label="Linkedin" />
          </div>
        </div>
      </div>

      {showResumeModal && (
        <div className="resume-modal" onClick={closeModal}>
          <div className="resume-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-modal" onClick={closeModal}>✕</button>
            <div className="resume-images">
              <img src={resume1} alt="Resume page 1" className="resume-page" loading="lazy" />
              <img src={resume2} alt="Resume page 2" className="resume-page" loading="lazy" />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProfileBanner;
