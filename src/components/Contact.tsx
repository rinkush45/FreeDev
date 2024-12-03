import React from 'react';
import { Send } from 'lucide-react';

export function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">Get in Touch</h2>
          <p className="mt-4 text-xl text-gray-300">
            Let's discuss how we can help bring your project to life
          </p>
        </div>

        <div className="mt-20 max-w-lg mx-auto">
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="relative">
              <input
                type="text"
                id="name"
                placeholder="Your Name"
                className="w-full bg-gray-800 border-0 rounded-lg py-4 px-6 text-white placeholder-gray-400 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition duration-200"
                required
              />
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 transform scale-x-0 transition-transform duration-200 origin-left group-focus-within:scale-x-100"></div>
            </div>

            <div className="relative">
              <input
                type="email"
                id="email"
                placeholder="Your Email"
                className="w-full bg-gray-800 border-0 rounded-lg py-4 px-6 text-white placeholder-gray-400 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition duration-200"
                required
              />
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 transform scale-x-0 transition-transform duration-200 origin-left group-focus-within:scale-x-100"></div>
            </div>

            <div className="relative">
              <textarea
                id="message"
                rows={4}
                placeholder="Your Message"
                className="w-full bg-gray-800 border-0 rounded-lg py-4 px-6 text-white placeholder-gray-400 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition duration-200"
                required
              />
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 transform scale-x-0 transition-transform duration-200 origin-left group-focus-within:scale-x-100"></div>
            </div>

            <button
              type="submit"
              className="w-full inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-lg text-white bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transform hover:scale-105 transition-all duration-200"
            >
              Send Message
              <Send className="ml-2 h-5 w-5" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}