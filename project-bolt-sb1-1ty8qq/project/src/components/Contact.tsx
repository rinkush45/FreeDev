import React, { useState } from 'react';
import { Send, Mail, User, MessageSquare } from 'lucide-react';
import axios from 'axios';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    try {
      await axios.post('http://localhost:3000/api/contact', formData);
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 3000);
    } catch (error) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 to-purple-900/20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(79,70,229,0.1),transparent_50%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Get in Touch
          </h2>
          <p className="mt-4 text-xl text-gray-300">
            Let's discuss how we can help bring your project to life
          </p>
        </div>

        <div className="mt-20 max-w-lg mx-auto">
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="group">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="block w-full pl-10 pr-3 py-4 bg-gray-800/50 backdrop-blur-sm border-0 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-indigo-500 transition duration-200"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div className="h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 transform scale-x-0 group-focus-within:scale-x-100 transition-transform duration-200" />
            </div>

            <div className="group">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="block w-full pl-10 pr-3 py-4 bg-gray-800/50 backdrop-blur-sm border-0 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-indigo-500 transition duration-200"
                  placeholder="Your Email"
                  required
                />
              </div>
              <div className="h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 transform scale-x-0 group-focus-within:scale-x-100 transition-transform duration-200" />
            </div>

            <div className="group">
              <div className="relative">
                <div className="absolute top-3 left-3 pointer-events-none">
                  <MessageSquare className="h-5 w-5 text-gray-400" />
                </div>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  className="block w-full pl-10 pr-3 py-4 bg-gray-800/50 backdrop-blur-sm border-0 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-indigo-500 transition duration-200"
                  placeholder="Your Message"
                  required
                />
              </div>
              <div className="h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 transform scale-x-0 group-focus-within:scale-x-100 transition-transform duration-200" />
            </div>

            <button
              type="submit"
              disabled={status === 'loading'}
              className={`w-full inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-lg text-white bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transform hover:scale-105 transition-all duration-200 ${
                status === 'loading' ? 'opacity-75 cursor-not-allowed' : ''
              }`}
            >
              {status === 'loading' ? (
                'Sending...'
              ) : (
                <>
                  Send Message
                  <Send className="ml-2 h-5 w-5" />
                </>
              )}
            </button>

            {status === 'success' && (
              <div className="text-green-400 text-center">Message sent successfully!</div>
            )}
            {status === 'error' && (
              <div className="text-red-400 text-center">Failed to send message. Please try again.</div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}