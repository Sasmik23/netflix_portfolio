import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './TopPicksRow.css';
import { FaCode, FaBriefcase, FaProjectDiagram } from 'react-icons/fa';
import experienceImg from '../images/experience.jpg';
import skillsImg from '../images/skills.jpg';
import projectsImg from '../images/projects.jpg';

interface TopPicksRowProps {
  profile: 'Computing';
}

const topPicksConfig = [
  { title: "Experience", imgSrc: experienceImg, route: "/work-experience", icon: <FaBriefcase /> },
  { title: "Skills", imgSrc: skillsImg, route: "/skills", icon: <FaCode /> },
  { title: "Projects", imgSrc: projectsImg, route: "/projects", icon: <FaProjectDiagram /> },
  //{ title: "Certifications", imgSrc: "https://picsum.photos/seed/badge/250/200", route: "/certifications", icon: <FaCertificate /> },
  //{ title: "Contact Me", imgSrc: "https://picsum.photos/seed/connect/250/200", route: "/contact-me", icon: <FaEnvelope /> }
];


const TopPicksRow: React.FC<TopPicksRowProps> = ({ profile }) => {
  const navigate = useNavigate();
  const location = useLocation();

  // Get the current profile image from location state
  const profileImage = location.state?.profileImage;

  const handleCardClick = (route: string) => {
    navigate(route, { state: { profileImage } });
  };

  return (
    <div className="top-picks-row">
      <h2 className="row-title">Today's Top Picks for you</h2>
      <div className="card-row">
        {topPicksConfig.map((pick, index) => (
          <div
            key={index}
            className="pick-card"
            onClick={() => handleCardClick(pick.route)}
            style={{ animationDelay: `${index * 0.2}s` }} // Adding delay based on index
          >
            <img src={pick.imgSrc} alt={pick.title} className="pick-image" loading="lazy" />
            <div className="overlay">
              <div className="pick-label">{pick.title}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopPicksRow;
