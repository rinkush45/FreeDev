import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Briefcase, MapPin, Clock, Send } from 'lucide-react';
import { jobListings } from '../data/jobListings';

export function JobDetailsPage() {
  const { jobId } = useParams();
  const navigate = useNavigate();
  const job = jobListings.find((j) => j.id === jobId);

  if (!job) {
    return null;
  }

  return (
    <div className="py-20 bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-gray-300 hover:text-indigo-400 mb-8 transition-colors duration-200"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back to Careers
        </button>

        <div className="bg-gray-800 rounded-lg p-8">
          <h1 className="text-3xl font-bold text-white mb-6">{job.title}</h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="flex items-center text-gray-300">
              <Briefcase className="h-5 w-5 text-indigo-400 mr-2" />
              <span>{job.department}</span>
            </div>
            <div className="flex items-center text-gray-300">
              <MapPin className="h-5 w-5 text-indigo-400 mr-2" />
              <span>{job.location}</span>
            </div>
            <div className="flex items-center text-gray-300">
              <Clock className="h-5 w-5 text-indigo-400 mr-2" />
              <span>{job.type}</span>
            </div>
          </div>

          <div className="prose prose-lg text-gray-300">
            <h2 className="text-xl font-semibold text-white mb-4">About the Role</h2>
            <p>{job.description}</p>

            <h2 className="text-xl font-semibold text-white mt-8 mb-4">Requirements</h2>
            <ul className="space-y-2">
              {job.requirements.map((req, index) => (
                <li key={index} className="flex items-start">
                  <span className="flex-shrink-0 h-6 w-6 text-indigo-400">•</span>
                  <span className="ml-3">{req}</span>
                </li>
              ))}
            </ul>

            <h2 className="text-xl font-semibold text-white mt-8 mb-4">Required Skills</h2>
            <div className="flex flex-wrap gap-2">
              {job.skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-3 py-1 text-sm bg-indigo-900 text-indigo-200 rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>

            <div className="mt-8">
              <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition-colors duration-200">
                Apply Now
                <Send className="ml-2 h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}