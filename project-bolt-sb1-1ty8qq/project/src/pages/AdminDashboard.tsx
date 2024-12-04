import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Users, Briefcase, MessageSquare, Settings } from 'lucide-react';

export function AdminDashboard() {
  return (
    <div className="min-h-screen bg-gray-900">
      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 bg-gray-800 min-h-screen p-4">
          <nav className="space-y-2">
            <Link
              to="/admin/users"
              className="flex items-center space-x-2 text-gray-300 hover:text-white hover:bg-gray-700 px-4 py-2 rounded-lg transition-colors duration-200"
            >
              <Users className="h-5 w-5" />
              <span>Users</span>
            </Link>
            <Link
              to="/admin/projects"
              className="flex items-center space-x-2 text-gray-300 hover:text-white hover:bg-gray-700 px-4 py-2 rounded-lg transition-colors duration-200"
            >
              <Briefcase className="h-5 w-5" />
              <span>Projects</span>
            </Link>
            <Link
              to="/admin/messages"
              className="flex items-center space-x-2 text-gray-300 hover:text-white hover:bg-gray-700 px-4 py-2 rounded-lg transition-colors duration-200"
            >
              <MessageSquare className="h-5 w-5" />
              <span>Messages</span>
            </Link>
            <Link
              to="/admin/settings"
              className="flex items-center space-x-2 text-gray-300 hover:text-white hover:bg-gray-700 px-4 py-2 rounded-lg transition-colors duration-200"
            >
              <Settings className="h-5 w-5" />
              <span>Settings</span>
            </Link>
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8">
          <Routes>
            <Route path="/" element={<AdminOverview />} />
            <Route path="/users" element={<AdminUsers />} />
            <Route path="/projects" element={<AdminProjects />} />
            <Route path="/messages" element={<AdminMessages />} />
            <Route path="/settings" element={<AdminSettings />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

function AdminOverview() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-white mb-8">Dashboard Overview</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Add overview cards here */}
      </div>
    </div>
  );
}

function AdminUsers() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-white mb-8">User Management</h1>
      {/* Add user management interface here */}
    </div>
  );
}

function AdminProjects() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-white mb-8">Project Management</h1>
      {/* Add project management interface here */}
    </div>
  );
}

function AdminMessages() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-white mb-8">Message Center</h1>
      {/* Add message management interface here */}
    </div>
  );
}

function AdminSettings() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-white mb-8">System Settings</h1>
      {/* Add settings interface here */}
    </div>
  );
}