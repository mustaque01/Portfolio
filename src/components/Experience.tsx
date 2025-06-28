import React from 'react';
import { Calendar, MapPin } from 'lucide-react';
import { experiences } from '../data/portfolio';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Work Experience
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            My personal journey and key achievements
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-blue-200 transform md:-translate-x-0.5"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-blue-600 rounded-full transform -translate-x-2 md:-translate-x-2 z-10"></div>

                {/* Content */}
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                  <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 ml-8 md:ml-0">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-bold text-gray-900">
                        {exp.position}
                      </h3>
                      <div className="flex items-center text-gray-500 text-sm">
                        <Calendar size={14} className="mr-1" />
                        {exp.duration}
                      </div>
                    </div>
                    
                    <div className="flex items-center mb-4">
                      <MapPin size={16} className="text-blue-600 mr-2" />
                      <span className="text-blue-600 font-medium">{exp.company}</span>
                    </div>

                    <ul className="space-y-2 mb-4">
                      {exp.description.map((item, itemIndex) => (
                        <li key={itemIndex} className="text-gray-600 text-sm">
                          • {item}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Empty space for alternating layout */}
                <div className="hidden md:block w-5/12"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;