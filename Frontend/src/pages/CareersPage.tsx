import React from 'react';
import { Link } from 'react-router-dom';
import { jobListings } from '../data/jobListings';
import { Briefcase, MapPin, Clock } from 'lucide-react';

export function CareersPage() {
  return (
    <div className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white mb-4">Join Our Team</h1>
          <p className="text-xl text-gray-300">
            Build the future with us. We're looking for talented individuals to join our growing team.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {jobListings.map((job) => (
            <Link
              key={job.id}
              to={`/careers/${job.id}`}
              className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-colors duration-200"
            >
              <h3 className="text-xl font-semibold text-white mb-4">{job.title}</h3>
              <div className="space-y-2 text-gray-300">
                <div className="flex items-center">
                  <Briefcase className="h-5 w-5 text-indigo-400 mr-2" />
                  <span>{job.department}</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 text-indigo-400 mr-2" />
                  <span>{job.location}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-indigo-400 mr-2" />
                  <span>{job.type}</span>
                </div>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {job.skills.slice(0, 3).map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 text-sm bg-indigo-900 text-indigo-200 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}