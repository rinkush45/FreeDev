import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { serviceDetails } from '../data/serviceDetails';
import { serviceImages } from '../data/serviceImages';

export function ServicePage() {
  const { serviceId } = useParams();
  const navigate = useNavigate();
  const service = serviceDetails[serviceId as keyof typeof serviceDetails];
  const images = serviceImages[serviceId as keyof typeof serviceImages];

  if (!service) {
    return null;
  }

  return (
    <div className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-gray-300 hover:text-indigo-400 mb-8 transition-colors duration-200"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back to Services
        </button>

        <h1 className="text-4xl font-bold text-white mb-8">{service.title}</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="prose prose-lg text-gray-300">
              <ul className="space-y-4">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="flex-shrink-0 h-6 w-6 text-indigo-400">•</span>
                    <span className="ml-3">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="space-y-6">
            {images.map((image, index) => (
              <div key={index} className="relative group overflow-hidden rounded-lg">
                <img
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="text-white text-sm">{image.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}