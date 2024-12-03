import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Code2 } from 'lucide-react';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

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
            <Link to="/#contact" className="bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600 transition-colors duration-200">
              Contact Us
            </Link>
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
            <Link to="/#contact" className="block px-3 py-2 text-gray-300 hover:text-indigo-400">Contact Us</Link>
          </div>
        </div>
      )}
    </nav>
  );
}