import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaPlay, FaPlus, FaThumbsUp, FaCalendarAlt, FaMapMarkerAlt, FaUserTie, FaArrowLeft, FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { Drama } from '../types';
import NavBar from '../components/NavBar';
import './DramaDetail.css';

const DramaDetail: React.FC = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const drama = location.state?.drama as Drama;
    const backgroundGif = location.state?.backgroundGif;
    const profileImage = location.state?.profileImage;
    const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

    // Scroll to top when component mounts
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!drama) {
        navigate('/profile/Theatre');
        return null;
    }

    // Banner image: prefer drama.bannerImage if provided, otherwise fall back to drama.image
    const bannerSrc = drama.bannerImage && drama.bannerImage.url ? drama.bannerImage.url : drama.image.url;

    // Gallery images - use drama's galleryImages if available, otherwise fallback to placeholders
    const galleryImages = drama.galleryImages && drama.galleryImages.length > 0
        ? drama.galleryImages  // Use only the images specified in galleryImages
        : [
            drama.image.url,
            `https://picsum.photos/seed/${drama.title}1/800/450`,
            `https://picsum.photos/seed/${drama.title}2/800/450`,
            `https://picsum.photos/seed/${drama.title}3/800/450`,
            `https://picsum.photos/seed/${drama.title}4/800/450`,
        ];

    const handlePrevImage = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (selectedImageIndex !== null) {
            setSelectedImageIndex((selectedImageIndex - 1 + galleryImages.length) % galleryImages.length);
        }
    };

    const handleNextImage = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (selectedImageIndex !== null) {
            setSelectedImageIndex((selectedImageIndex + 1) % galleryImages.length);
        }
    };

    return (
        <>
            <NavBar />
            <div className="drama-detail-container">
                {/* Hero Banner */}
                <div className="drama-hero">
                    <img src={bannerSrc} alt={drama.title} className="hero-background" />
                    <div className="hero-overlay">
                        <div className="hero-content">
                            <button className="back-button" onClick={() => navigate('/profile/Theatre', {
                                state: { backgroundGif, profileImage }
                            })}>
                                <FaArrowLeft /> Back
                            </button>
                            <div className="hero-info">
                                <h1 className="drama-hero-title">{drama.title}</h1>
                                <div className="hero-meta">
                                    <span className="language-badge">{drama.language}</span>
                                    <span className="year">{drama.year}</span>
                                    <span className="venue">{drama.venue}</span>
                                </div>
                                <p className="hero-description">{drama.description}</p>
                                <div className="hero-buttons">
                                    {drama.videoLink && (
                                        <button
                                            className="hero-play-button"
                                            onClick={() => window.open(drama.videoLink, '_blank')}
                                        >
                                            <FaPlay /> Watch Now
                                        </button>
                                    )}
                                    <button className="hero-list-button">
                                        <FaPlus /> My List
                                    </button>
                                    <button className="hero-like-button">
                                        <FaThumbsUp />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Photo Gallery */}
                <div className="photo-gallery">
                    <h2 className="gallery-title">Production Photos</h2>
                    <div className="gallery-grid">
                        {galleryImages.map((image, index) => (
                            <div
                                key={index}
                                className="gallery-item"
                                onClick={() => setSelectedImageIndex(index)}
                                style={{ cursor: 'pointer' }}
                            >
                                <img src={image} alt={`${drama.title} photo ${index + 1}`} />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Image Lightbox */}
                {selectedImageIndex !== null && (
                    <div className="image-lightbox" onClick={() => setSelectedImageIndex(null)}>
                        <button className="lightbox-close" onClick={() => setSelectedImageIndex(null)}>
                            <FaTimes />
                        </button>

                        {/* Previous Button */}
                        <button className="lightbox-nav lightbox-prev" onClick={handlePrevImage}>
                            <FaChevronLeft />
                        </button>

                        {/* Next Button */}
                        <button className="lightbox-nav lightbox-next" onClick={handleNextImage}>
                            <FaChevronRight />
                        </button>

                        {/* Image Counter */}
                        <div className="lightbox-counter">
                            {selectedImageIndex + 1} / {galleryImages.length}
                        </div>

                        <img
                            src={galleryImages[selectedImageIndex]}
                            alt="Enlarged view"
                            className="lightbox-image"
                            onClick={(e) => e.stopPropagation()}
                        />

                        {/* Image Caption */}
                        {drama.galleryCaptions && drama.galleryCaptions[selectedImageIndex] && (
                            <div className="lightbox-caption">
                                {drama.galleryCaptions[selectedImageIndex]}
                            </div>
                        )}
                    </div>
                )}

                {/* Drama Details */}
                <div className="drama-details-section">
                    <div className="details-content">
                        <div className="main-details">
                            <h2>About this Production</h2>
                            <div className="detail-row">
                                <FaUserTie className="detail-icon" />
                                <span><strong>My Role:</strong> {drama.role}</span>
                            </div>
                            <div className="detail-row">
                                <FaUserTie className="detail-icon" />
                                <span><strong>Director:</strong> {drama.director}</span>
                            </div>
                            <div className="detail-row">
                                <FaCalendarAlt className="detail-icon" />
                                <span><strong>Year:</strong> {drama.year}</span>
                            </div>
                            <div className="detail-row">
                                <FaMapMarkerAlt className="detail-icon" />
                                <span><strong>Venue:</strong> {drama.venue}</span>
                            </div>
                            <div className="production-company-section">
                                <h3>Production Company</h3>
                                <p>{drama.productionCompany}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DramaDetail;