import React, { useEffect, useState } from 'react';
import './Projects.css';
import { FaReact, FaNodeJs, FaAws, FaDatabase, FaDocker, FaAngular, FaGithub, FaGitlab, FaGoogle, FaJava, FaJenkins, FaMicrosoft, FaPython, FaVuejs, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { SiRubyonrails, SiPostgresql, SiMongodb, SiMaterialdesign, SiHtml5, SiCss3, SiJquery, SiAwsamplify, SiFirebase, SiTerraform, SiArgo } from 'react-icons/si';
import { Project } from '../types';
import { projects as projectsData } from '../data/projects';
import { GrDeploy, GrKubernetes } from "react-icons/gr";

const techIcons: { [key: string]: JSX.Element } = {
  "ReactJS": <FaReact />,
  "NodeJS": <FaNodeJs />,
  "AWS": <FaAws />,
  "PostgreSQL": <SiPostgresql />,
  "MongoDB": <SiMongodb />,
  "Ruby On Rails": <SiRubyonrails />,
  "Material UI": <SiMaterialdesign />,
  "HTML5": <SiHtml5 />,
  "CSS3": <SiCss3 />,
  "jQuery": <SiJquery />,
  "AWS-ECS": <SiAwsamplify />,
  'Cognito': <FaAws />,
  'Lambda': <FaAws />,
  'ECS': <FaAws />,
  'Jenkins': <FaJenkins />,
  'Docker': <FaDocker />,
  'GraphQL': <FaDatabase />,
  'CI/CD': <FaGitlab />,
  'GitLab': <FaGitlab />,
  'GitHub': <FaGithub />,
  'Heroku': <GrDeploy />,
  'Netlify': <GrDeploy />,
  'Firebase': <SiFirebase />,
  'GCP': <FaGoogle />,
  'Azure': <FaMicrosoft />,
  'Kubernetes': <GrKubernetes />,
  'Terraform': <SiTerraform />,
  'ArgoCD': <SiArgo />,
  'Java': <FaJava />,
  'Spring Boot': <FaJava />,
  'Python': <FaPython />,
  'Node.js': <FaNodeJs />,
  'Express.js': <FaNodeJs />,
  'Hibernate': <FaJava />,
  'Maven': <FaJava />,
  'Gradle': <FaJava />,
  'JUnit': <FaJava />,
  'Mockito': <FaJava />,
  'Jest': <FaReact />,
  'React': <FaReact />,
  'Angular': <FaAngular />,
  'Vue.js': <FaVuejs />,
  'Next.js': <FaReact />,
  'Gatsby': <FaReact />,
  'Nuxt.js': <FaVuejs />,
  'Redux': <FaReact />,
  'Vuex': <FaVuejs />,
  'Tailwind CSS': <SiCss3 />,
  'Bootstrap': <SiCss3 />,
  'JQuery': <SiJquery />,
  'React Native': <FaReact />,
};


const Projects: React.FC = () => {
  const projects = projectsData;
  const [currentImageIndex, setCurrentImageIndex] = useState<{ [key: number]: number }>({});

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Preload all images for projects with multiple images
  useEffect(() => {
    projects.forEach((project) => {
      const images = project.images || [project.image.url];
      images.forEach((image) => {
        const img = new Image();
        img.src = typeof image === 'string' ? image : image;
      });
    });
  }, [projects]);

  const handlePrevImage = (projectIndex: number, totalImages: number) => {
    setCurrentImageIndex(prev => ({
      ...prev,
      [projectIndex]: ((prev[projectIndex] || 0) - 1 + totalImages) % totalImages
    }));
  };

  const handleNextImage = (projectIndex: number, totalImages: number) => {
    setCurrentImageIndex(prev => ({
      ...prev,
      [projectIndex]: ((prev[projectIndex] || 0) + 1) % totalImages
    }));
  };

  return (
    <div className="projects-container">
      <div className="projects-title-container">
        <h2 className="projects-title"> Projects </h2>
      </div>
      <div className="projects-grid">
        {projects.map((project, index) => {
          const images = project.images || [project.image.url];
          const currentIndex = currentImageIndex[index] || 0;

          return (
            <div
              key={index}
              className="project-card"
              style={{ '--delay': `${index * 0.1}s` } as React.CSSProperties}
            >
              <div className="project-image-container">
                <img
                  src={images[currentIndex]}
                  alt={`${project.title} - ${currentIndex + 1}`}
                  className="project-image"
                  loading="eager"
                />
                {images.length > 1 && (
                  <>
                    <button
                      className="carousel-btn carousel-btn-prev"
                      onClick={() => handlePrevImage(index, images.length)}
                      aria-label="Previous image"
                    >
                      <FaChevronLeft />
                    </button>
                    <button
                      className="carousel-btn carousel-btn-next"
                      onClick={() => handleNextImage(index, images.length)}
                      aria-label="Next image"
                    >
                      <FaChevronRight />
                    </button>
                    <div className="carousel-indicators">
                      {images.map((_, imgIndex) => (
                        <span
                          key={imgIndex}
                          className={`indicator ${imgIndex === currentIndex ? 'active' : ''}`}
                          onClick={() => setCurrentImageIndex(prev => ({ ...prev, [index]: imgIndex }))}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>
              <div className="project-details">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tech-used">
                  {project.techUsed.split(', ').map((tech, i) => (
                    <span key={i} className="tech-badge">
                      {techIcons[tech] || "🔧"} {tech}
                    </span>
                  ))}
                </div>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    <FaGithub /> View Code
                  </a>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
