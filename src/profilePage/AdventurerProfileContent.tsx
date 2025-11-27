import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaPlay, FaInfoCircle } from 'react-icons/fa';
import { Drama } from '../types';
import { dramas } from '../data/dramas';
import './AdventurerProfileContent.css';

interface AdventurerProfileContentProps {
    backgroundGif?: string;
    profileImage?: string;
}

const AdventurerProfileContent: React.FC<AdventurerProfileContentProps> = ({ backgroundGif, profileImage }) => {
    const navigate = useNavigate();

    const handlePlayClick = (drama: Drama) => {
        navigate(`/drama/${drama.title.replace(/\s+/g, '-').toLowerCase()}`, {
            state: { drama, backgroundGif, profileImage }
        });
    };

    return (
        <div className="adventurer-profile-content">
            <div className="profile-header">
                <h2 className="profile-title"> My Theatre Journey</h2>
                <p className="profile-intro">Exploring characters and stories through Tamil and English productions in Singapore</p>
            </div>

            <div className="netflix-drama-grid">
                {dramas.map((drama, index) => (
                    <div
                        key={index}
                        className="netflix-drama-card"
                        style={{ '--delay': `${index * 0.1}s` } as React.CSSProperties}
                        onClick={() => handlePlayClick(drama)}
                    >
                        <div className="drama-poster-container">
                            <img src={drama.image.url} alt={drama.title} className="drama-poster" loading="lazy" />
                            <div className="language-badge">{drama.language}</div>
                            <div className="card-overlay">
                                <div className="overlay-content">
                                    <h3 className="drama-card-title">{drama.title}</h3>
                                    <p className="drama-card-role">as {drama.role}</p>
                                    <div className="card-buttons">
                                        <button
                                            className="play-button"
                                            onClick={() => handlePlayClick(drama)}
                                        >
                                            <FaPlay /> Play
                                        </button>
                                        <button
                                            className="info-button"
                                            onClick={() => handlePlayClick(drama)}
                                        >
                                            <FaInfoCircle /> More Info
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AdventurerProfileContent;