import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import Rinku from '/src/components/images/Rinku.png';
import Ramkishan from "/src/components/images/Ramkishan.png";
import Rahul from "/src/components/images/Rahul.png";
import Manikant from "/src/components/images/Manikant.png";
import Anuj from "/src/components/images/Anuj.png";
import Nitish from "/src/components/images/Nitish.png";

const team = [
  {
    name: 'Rinku Sharma',
    role: 'Founder And DevOps & Cloud Engineer',
    image: Rinku,
  },
  {
    name: 'Ramkishan Rohila',
    role: 'Co-Founder And AI & ML Engineer',
    image: Ramkishan,
  },
  {
    name: 'Rahul Raj Yadav',
    role: 'CTO And Data Science & ML Engineer',
    image: Rahul,
  },
  {
    name: 'Manikant',
    role: 'Full Stack Developer',
    image: Manikant,
  },
  {
    name: 'Anuj Gaurave',
    role: 'Java & Web Developer',
    image: Anuj,
  },
  {
    name: 'Nitish Kumar Jha',
    role: 'Full Stack & UI/UX Developer',
    image: Nitish,
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