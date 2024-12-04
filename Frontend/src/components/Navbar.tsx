import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, Code2, LogIn, UserPlus } from 'lucide-react';
import { useAuth } from '../hooks/useAuth';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav className="bg-gray-900 shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Code2 className="h-8 w-8 text-indigo-400" />
              <span className="ml-2 text-xl font-bold text-white">FreeDev</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/#services" className="text-gray-300 hover:text-indigo-400 transition-colors duration-200">Services</Link>
            <Link to="/#team" className="text-gray-300 hover:text-indigo-400 transition-colors duration-200">Our Team</Link>
            <Link to="/careers" className="text-gray-300 hover:text-indigo-400 transition-colors duration-200">Careers</Link>
            {user ? (
              <>
                <Link 
                  to={user.role === 'admin' ? '/admin' : '/team'} 
                  className="text-gray-300 hover:text-indigo-400 transition-colors duration-200"
                >
                  Dashboard
                </Link>
                <button
                  onClick={handleLogout}
                  className="bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600 transition-colors duration-200"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link 
                  to="/login"
                  className="flex items-center text-gray-300 hover:text-indigo-400 transition-colors duration-200"
                >
                  <LogIn className="h-5 w-5 mr-1" />
                  Login
                </Link>
                <Link 
                  to="/register"
                  className="flex items-center bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600 transition-colors duration-200"
                >
                  <UserPlus className="h-5 w-5 mr-1" />
                  Sign Up
                </Link>
              </>
            )}
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-indigo-400"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-900">
            <Link to="/#services" className="block px-3 py-2 text-gray-300 hover:text-indigo-400">Services</Link>
            <Link to="/#team" className="block px-3 py-2 text-gray-300 hover:text-indigo-400">Our Team</Link>
            <Link to="/careers" className="block px-3 py-2 text-gray-300 hover:text-indigo-400">Careers</Link>
            {user ? (
              <>
                <Link 
                  to={user.role === 'admin' ? '/admin' : '/team'}
                  className="block px-3 py-2 text-gray-300 hover:text-indigo-400"
                >
                  Dashboard
                </Link>
                <button
                  onClick={handleLogout}
                  className="block w-full text-left px-3 py-2 text-gray-300 hover:text-indigo-400"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className="block px-3 py-2 text-gray-300 hover:text-indigo-400">Login</Link>
                <Link to="/register" className="block px-3 py-2 text-gray-300 hover:text-indigo-400">Sign Up</Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}