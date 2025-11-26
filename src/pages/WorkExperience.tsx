import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { MdOutlineWork as WorkIcon } from 'react-icons/md';
import { IoSchool as SchoolIcon } from 'react-icons/io5';
import { FaStar as StarIcon } from 'react-icons/fa';
import './WorkExperience.css';
import { timeline } from '../data/timeline';


const WorkExperience: React.FC = () => {
  // Sort by start date (most recent first)
  const timeLineData = [...timeline].sort((a, b) => {
    const getStartYear = (dateRange: string) => {
      const startPart = dateRange.split(' - ')[0];
      // Handle "Present" case
      if (startPart.includes('Present')) return 9999;
      // Extract year from formats like "Aug 2022", "2018", etc.
      const yearMatch = startPart.match(/\d{4}/);
      return yearMatch ? parseInt(yearMatch[0]) : 0;
    };
    const getStartMonth = (dateRange: string) => {
      const startPart = dateRange.split(' - ')[0];
      const months: { [key: string]: number } = {
        'Jan': 1, 'Feb': 2, 'Mar': 3, 'Apr': 4, 'May': 5, 'Jun': 6,
        'Jul': 7, 'Aug': 8, 'Sep': 9, 'Oct': 10, 'Nov': 11, 'Dec': 12
      };
      for (const [month, num] of Object.entries(months)) {
        if (startPart.includes(month)) return num;
      }
      return 1; // Default to January if no month found
    };

    const aYear = getStartYear(a.dateRange);
    const bYear = getStartYear(b.dateRange);

    if (aYear !== bYear) {
      return bYear - aYear; // Most recent year first
    }

    // If same year, sort by month
    const aMonth = getStartMonth(a.dateRange);
    const bMonth = getStartMonth(b.dateRange);
    return bMonth - aMonth; // Most recent month first
  });


  return (
    <>
      <div className="timeline-container">
        <h2 className="timeline-title">Work Experience & Education Timeline</h2>
      </div>
      <VerticalTimeline>
        {timeLineData.map((item, index) => (
          <VerticalTimelineElement
            key={index}
            className={`vertical-timeline-element--${item.timelineType}`}
            contentStyle={
              item.timelineType === "work"
                ? { background: '#1a1a1a', color: '#fff', border: '2px solid #e50914' }
                : { background: '#2d0a0e', color: '#fff', border: '2px solid #b20710' } // Darker Netflix red for education
            }
            contentArrowStyle={
              item.timelineType === "work"
                ? { borderRight: '7px solid #e50914' }
                : { borderRight: '7px solid #b20710' }
            }
            date={item.dateRange}
            iconStyle={
              item.timelineType === "work"
                ? { background: '#e50914', color: '#fff', boxShadow: '0 0 0 4px #141414, 0 4px 8px rgba(229, 9, 20, 0.5)' }
                : { background: '#b20710', color: '#fff', boxShadow: '0 0 0 4px #141414, 0 4px 8px rgba(178, 7, 16, 0.5)' } // Darker red for education icon
            }
            icon={item.timelineType === "work" ? <WorkIcon /> : <SchoolIcon />}
          >
            {item.timelineType === "work" ? (
              <div style={{ color: 'white' }}>
                {item.image && (
                  <div className="timeline-image-container">
                    <img src={item.image} alt={item.title} className="timeline-image" />
                  </div>
                )}
                <h3 className="vertical-timeline-element-title">
                  {item.title}
                  {item.isUpcoming && <span className="upcoming-badge"> Upcoming</span>}
                  {item.isCurrent && <span className="current-badge"> Current</span>}
                </h3>
                <h4 className="vertical-timeline-element-subtitle">{item.name}</h4>
                <p className="vertical-timeline-element-tech">🔧 {item.techStack}</p>
                {Array.isArray(item.summaryPoints) ? (
                  <ul className="timeline-bullet-list">
                    {item.summaryPoints.map((point, idx) => (
                      <li key={idx}>{point}</li>
                    ))}
                  </ul>
                ) : (
                  <p>{item.summaryPoints}</p>
                )}
              </div>
            ) : (
              <div style={{ color: 'white' }}>
                {item.image && (
                  <div className="timeline-image-container">
                    <img src={item.image} alt={item.name} className="timeline-image" />
                  </div>
                )}
                <h3 className="vertical-timeline-element-title">
                  {item.name}
                  {item.isUpcoming && <span className="upcoming-badge"> Upcoming</span>}
                  {item.isCurrent && <span className="current-badge"> Current</span>}
                </h3>
                <h4 className="vertical-timeline-element-subtitle">{item.title}</h4>
                {Array.isArray(item.summaryPoints) ? (
                  <ul className="timeline-bullet-list">
                    {item.summaryPoints.map((point, idx) => (
                      <li key={idx}>{point}</li>
                    ))}
                  </ul>
                ) : (
                  <p>{item.summaryPoints}</p>
                )}
              </div>
            )}
          </VerticalTimelineElement>
        ))}
        <VerticalTimelineElement
          iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
          icon={<StarIcon />}
        />
      </VerticalTimeline>
    </>
  );
};

export default WorkExperience;
