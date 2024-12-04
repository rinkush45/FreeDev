import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Briefcase, MessageSquare, Users, Clock } from 'lucide-react';

export function TeamDashboard() {
  return (
    <div className="min-h-screen bg-gray-900">
      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 bg-gray-800 min-h-screen p-4">
          <nav className="space-y-2">
            <Link
              to="/team/projects"
              className="flex items-center space-x-2 text-gray-300 hover:text-white hover:bg-gray-700 px-4 py-2 rounded-lg transition-colors duration-200"
            >
              <Briefcase className="h-5 w-5" />
              <span>My Projects</span>
            </Link>
            <Link
              to="/team/chat"
              className="flex items-center space-x-2 text-gray-300 hover:text-white hover:bg-gray-700 px-4 py-2 rounded-lg transition-colors duration-200"
            >
              <MessageSquare className="h-5 w-5" />
              <span>Team Chat</span>
            </Link>
            <Link
              to="/team/members"
              className="flex items-center space-x-2 text-gray-300 hover:text-white hover:bg-gray-700 px-4 py-2 rounded-lg transition-colors duration-200"
            >
              <Users className="h-5 w-5" />
              <span>Team Members</span>
            </Link>
            <Link
              to="/team/timesheet"
              className="flex items-center space-x-2 text-gray-300 hover:text-white hover:bg-gray-700 px-4 py-2 rounded-lg transition-colors duration-200"
            >
              <Clock className="h-5 w-5" />
              <span>Timesheet</span>
            </Link>
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8">
          <Routes>
            <Route path="/" element={<TeamOverview />} />
            <Route path="/projects" element={<TeamProjects />} />
            <Route path="/chat" element={<TeamChat />} />
            <Route path="/members" element={<TeamMembers />} />
            <Route path="/timesheet" element={<TeamTimesheet />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

function TeamOverview() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-white mb-8">Team Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Add overview cards here */}
      </div>
    </div>
  );
}

function TeamProjects() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-white mb-8">My Projects</h1>
      {/* Add project list and management interface here */}
    </div>
  );
}

function TeamChat() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-white mb-8">Team Chat</h1>
      {/* Add team chat interface here */}
    </div>
  );
}

function TeamMembers() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-white mb-8">Team Members</h1>
      {/* Add team members list and management interface here */}
    </div>
  );
}

function TeamTimesheet() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-white mb-8">Timesheet</h1>
      {/* Add timesheet interface here */}
    </div>
  );
}