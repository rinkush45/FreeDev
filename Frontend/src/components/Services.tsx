import React, { useState } from 'react';
import { Code, Palette, Globe, Smartphone, Cloud, Database, Cog, Shield, Brain, Wrench, Cpu, Layout, BarChart, Boxes } from 'lucide-react';
import { ServiceDetailsModal } from './ServiceDetailsModal';
import { serviceDetails } from '../data/serviceDetails';

const services = [
  {
    title: 'Software Development',
    description: 'Custom software solutions tailored to your business needs.',
    icon: Code,
  },
  {
    title: 'Web Development',
    description: 'Modern, responsive web applications built with cutting-edge technologies.',
    icon: Globe,
  },
  {
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile applications for iOS and Android.',
    icon: Smartphone,
  },
  {
    title: 'Cloud Services',
    description: 'Scalable cloud solutions and infrastructure management.',
    icon: Cloud,
  },
  {
    title: 'Database Services',
    description: 'Database design, optimization, and management solutions.',
    icon: Database,
  },
  {
    title: 'DevOps & Infrastructure',
    description: 'Streamlined deployment and infrastructure automation.',
    icon: Cog,
  },
  {
    title: 'Quality Assurance',
    description: 'Comprehensive testing and quality assurance services.',
    icon: Shield,
  },
  {
    title: 'AI & Machine Learning',
    description: 'Intelligent solutions powered by advanced AI algorithms.',
    icon: Brain,
  },
  {
    title: 'Maintenance & Support',
    description: '24/7 maintenance and technical support services.',
    icon: Wrench,
  },
  {
    title: 'Emerging Technologies',
    description: 'Blockchain, IoT, and other cutting-edge solutions.',
    icon: Cpu,
  },
  {
    title: 'UI/UX Design',
    description: 'Beautiful and intuitive user interface designs.',
    icon: Layout,
  },
  {
    title: 'Data Engineering',
    description: 'Big data processing and analytics solutions.',
    icon: BarChart,
  },
  {
    title: 'Domain Solutions',
    description: 'Specialized solutions for specific industry domains.',
    icon: Boxes,
  },
];

export function Services() {
  const [selectedService, setSelectedService] = useState<any>(null);

  const handleServiceClick = (service: any) => {
    setSelectedService(serviceDetails[service.title as keyof typeof serviceDetails]);
  };

  return (
    <section id="services" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">Our Services</h2>
          <p className="mt-4 text-xl text-gray-300">
            Comprehensive software solutions for every business need
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              onClick={() => handleServiceClick(service)}
              className="relative group bg-gray-900 p-6 rounded-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
              <service.icon className="h-8 w-8 text-indigo-400" />
              <h3 className="mt-4 text-lg font-medium text-white">{service.title}</h3>
              <p className="mt-2 text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>
      </div>

      <ServiceDetailsModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
      />
    </section>
  );
}