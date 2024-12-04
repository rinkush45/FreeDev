import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const team = [
  {
    name: 'Sarah Johnson',
    role: 'Lead Developer',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Michael Chen',
    role: 'UI/UX Designer',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Emily Rodriguez',
    role: 'Full Stack Developer',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
];

export function Team() {
  return (
    <section id="team" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">Meet Our Team</h2>
          <p className="mt-4 text-xl text-gray-300">
            Talented professionals committed to delivering excellence
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((member) => (
            <div key={member.name} className="text-center">
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full opacity-75 blur"></div>
                <img
                  className="relative mx-auto h-48 w-48 rounded-full object-cover"
                  src={member.image}
                  alt={member.name}
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-b from-transparent to-black opacity-0 group-hover:opacity-75 transition-opacity">
                  <div className="absolute bottom-0 left-0 right-0 p-4 flex justify-center space-x-4">
                    <Github className="h-6 w-6 text-white cursor-pointer hover:text-indigo-400" />
                    <Linkedin className="h-6 w-6 text-white cursor-pointer hover:text-indigo-400" />
                    <Mail className="h-6 w-6 text-white cursor-pointer hover:text-indigo-400" />
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-medium text-white">{member.name}</h3>
                <p className="text-indigo-400">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}