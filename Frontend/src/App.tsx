import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { ServicePage } from './pages/ServicePage';
import { CareersPage } from './pages/CareersPage';
import { JobDetailsPage } from './pages/JobDetailsPage';
import { LoginForm } from './components/auth/LoginForm';
import { RegisterForm } from './components/auth/RegisterForm';
import { Chatbot } from './components/chatbot/Chatbot';
import { PrivateRoute } from './components/auth/PrivateRoute';
import { AdminDashboard } from './pages/AdminDashboard';
import { TeamDashboard } from './pages/TeamDashboard';

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
            <Route path="/login" element={<LoginForm />} />
            <Route path="/register" element={<RegisterForm />} />
            <Route
              path="/admin/*"
              element={
                <PrivateRoute roles={['admin']}>
                  <AdminDashboard />
                </PrivateRoute>
              }
            />
            <Route
              path="/team/*"
              element={
                <PrivateRoute roles={['team']}>
                  <TeamDashboard />
                </PrivateRoute>
              }
            />
          </Routes>
          <Footer />
        </div>
        <Chatbot />
      </div>
    </Router>
  );
}

export default App;