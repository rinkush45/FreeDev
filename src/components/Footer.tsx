import React from 'react';
import { Code2, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center">
              <Code2 className="h-8 w-8 text-indigo-400" />
              <span className="ml-2 text-xl font-bold text-white">FreeDev</span>
            </div>
            <p className="mt-4 text-gray-400">
              Empowering businesses through innovative software solutions. We transform ideas into powerful, scalable applications.
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Quick Links</h3>
            <ul className="mt-4 space-y-4">
              <li>
                <a href="#services" className="text-base text-gray-300 hover:text-white transition-colors duration-200">
                  Services
                </a>
              </li>
              <li>
                <a href="#team" className="text-base text-gray-300 hover:text-white transition-colors duration-200">
                  Team
                </a>
              </li>
              <li>
                <a href="#reviews" className="text-base text-gray-300 hover:text-white transition-colors duration-200">
                  Reviews
                </a>
              </li>
              <li>
                <a href="#contact" className="text-base text-gray-300 hover:text-white transition-colors duration-200">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Connect</h3>
            <div className="mt-4 flex space-x-6">
              <Facebook className="h-6 w-6 text-gray-400 hover:text-white cursor-pointer transition-colors duration-200" />
              <Twitter className="h-6 w-6 text-gray-400 hover:text-white cursor-pointer transition-colors duration-200" />
              <Instagram className="h-6 w-6 text-gray-400 hover:text-white cursor-pointer transition-colors duration-200" />
              <Linkedin className="h-6 w-6 text-gray-400 hover:text-white cursor-pointer transition-colors duration-200" />
            </div>
          </div>
        </div>
        
        <div className="mt-8 border-t border-gray-700 pt-8">
          <p className="text-base text-gray-400 text-center">
            © {new Date().getFullYear()} FreeDev. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}