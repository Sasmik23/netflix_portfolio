import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Dramas.css';
import { FaTheaterMasks, FaCalendarAlt, FaMapMarkerAlt, FaUserTie } from 'react-icons/fa';
import { dramas } from '../data/dramas';
import { Drama } from '../types';

const Dramas: React.FC = () => {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleCardClick = (drama: Drama) => {
        const slug = drama.title.replace(/\s+/g, '-').toLowerCase();
        navigate(`/drama/${slug}`, { state: { drama } });
    };

    return (
        <div className="dramas-container">
            <h2 className="dramas-title">Theatre Productions</h2>
            <p className="dramas-intro">My journey through Tamil and English theatre in Singapore</p>

            <div className="dramas-grid">
                {dramas.map((drama, index) => (
                    <div
                        key={index}
                        className="drama-card"
                        style={{ '--delay': `${index * 0.2}s` } as React.CSSProperties}
                        onClick={() => handleCardClick(drama)}
                        role="button"
                        tabIndex={0}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter' || e.key === ' ') {
                                e.preventDefault();
                                handleCardClick(drama);
                            }
                        }}
                    >
                        <div className="drama-poster">
                            <img src={drama.image.url} alt={drama.title} className="drama-image" loading="lazy" />
                            <div className="drama-overlay">
                                <div className="language-badge">{drama.language}</div>
                            </div>
                        </div>

                        <div className="drama-details">
                            <h3 className="drama-title">{drama.title}</h3>
                            <div className="drama-role">
                                <FaTheaterMasks className="icon" />
                                <span>Role: {drama.role}</span>
                            </div>

                            <p className="drama-description">{drama.description}</p>

                            <div className="drama-info">
                                <div className="info-item">
                                    <FaCalendarAlt className="icon" />
                                    <span>{drama.year}</span>
                                </div>
                                <div className="info-item">
                                    <FaMapMarkerAlt className="icon" />
                                    <span>{drama.venue}</span>
                                </div>
                                <div className="info-item">
                                    <FaUserTie className="icon" />
                                    <span>Dir: {drama.director}</span>
                                </div>
                            </div>

                            <div className="production-company">{drama.productionCompany}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Dramas;