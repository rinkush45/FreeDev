import React from 'react';
import { Star } from 'lucide-react';

const reviews = [
  {
    name: 'John Doe',
    company: 'Tech Startup',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    content: 'Working with this team was an absolute pleasure. They delivered our project on time and exceeded our expectations.',
    rating: 5,
  },
  {
    name: 'Lisa Anderson',
    company: 'E-commerce Platform',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    content: 'Their attention to detail and technical expertise helped us launch our online store successfully.',
    rating: 5,
  },
  {
    name: 'Mark Wilson',
    company: 'Digital Agency',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    content: 'Outstanding service and communication throughout the entire development process.',
    rating: 5,
  },
];

export function Reviews() {
  return (
    <section id="reviews" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl transition-colors duration-200">Customer Reviews</h2>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300 transition-colors duration-200">
            Don't just take our word for it - hear from our satisfied clients
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review) => (
            <div
              key={review.name}
              className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-8 transform hover:scale-105 transition-all duration-200"
            >
              <div className="flex items-center">
                <img
                  className="h-12 w-12 rounded-full"
                  src={review.image}
                  alt={review.name}
                />
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-gray-900 dark:text-white transition-colors duration-200">{review.name}</h4>
                  <p className="text-sm text-indigo-600 dark:text-indigo-400 transition-colors duration-200">{review.company}</p>
                </div>
              </div>
              <div className="mt-4 flex">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="mt-4 text-gray-600 dark:text-gray-300 transition-colors duration-200">{review.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}