import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './ContinueWatching.css';
import certImg from '../images/cert.jpg';
import skydiveImg from '../images/skydive.jpg';

interface ContinueWatchingProps {
  profile: 'Computing';
}

const continueWatchingConfig = [
  //{ title: "Music", imgSrc: "https://picsum.photos/id/1025/300/200", link: "/music" },
  //{ title: "Reading", imgSrc: "https://picsum.photos/id/1026/300/200", link: "/reading" },
  //{ title: "Blogs", imgSrc: "https://picsum.photos/id/1027/300/200", link: "/blogs" },
  { title: "Certifications", imgSrc: certImg, link: "/certifications" },
  { title: "Contact Me", imgSrc: skydiveImg, link: "/contact-me" }
];

const ContinueWatching: React.FC<ContinueWatchingProps> = ({ profile }) => {
  const location = useLocation();

  // Get the current profile image from location state
  const profileImage = location.state?.profileImage;

  return (
    <div className="continue-watching-row">
      <h2 className="row-title">Continue Watching</h2>
      <div className="card-row">
        {continueWatchingConfig.map((pick, index) => (
          <Link to={pick.link} key={index} className="pick-card" state={{ profileImage }}>
            <img src={pick.imgSrc} alt={pick.title} className="pick-image" loading="lazy" />
            <div className="overlay">
              <div className="pick-label">{pick.title}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ContinueWatching;
