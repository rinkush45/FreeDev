import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { ServicePage } from './pages/ServicePage';
import { CareersPage } from './pages/CareersPage';
import { JobDetailsPage } from './pages/JobDetailsPage';
import { Team } from './components/Team';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-900">
        <Navbar />
        <div className="pt-16">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services/:serviceId" element={<ServicePage />} />
            <Route path="/careers" element={<CareersPage />} />
            <Route path="/careers/:jobId" element={<JobDetailsPage />} />
            <Route path="/team" element={<Team />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;