import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NetflixTitle from './NetflixTitle';
import ProfilePage from './profilePage/profilePage';
import Browse from './browse/browse';
import WorkExperience from './pages/WorkExperience';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import ContactMe from './pages/ContactMe';
import Layout from './Layout';
import Certifications from './pages/Certifications';
import Dramas from './pages/Dramas';
import DramaDetail from './pages/DramaDetail';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<NetflixTitle />} />
      <Route path="/browse" element={<Browse />} />
      <Route path="/profile/:profileName" element={<Layout><ProfilePage /></Layout>} />
      <Route path="/work-experience" element={<Layout><WorkExperience /></Layout>} />
      <Route path="/skills" element={<Layout><Skills /></Layout>} />
      <Route path="/projects" element={<Layout><Projects /></Layout>} />
      <Route path="/contact-me" element={<Layout><ContactMe /></Layout>} />
      <Route path="/certifications" element={<Layout><Certifications /></Layout>} />
      <Route path="/dramas" element={<Layout><Dramas /></Layout>} />
      <Route path="/drama/:dramaId" element={<DramaDetail />} />
    </Routes>
  );
};

export default App;
