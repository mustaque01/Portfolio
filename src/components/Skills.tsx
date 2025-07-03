import React from 'react';
import { skills } from '../data/portfolio';
const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Skills & Technologies
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Technologies I work with to bring your ideas to life
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105 group"
            >
              <div className="text-center">
                <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-200">
                  {skill.icon}
                </div>
                <div
                  className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-1000 proficiency-bar"
                  data-width={skill.proficiency}
                ></div>
                <p className="text-sm text-gray-500 mt-1">{skill.proficiency}%</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-8">
            Always learning and exploring new technologies to stay current with industry trends
          </p>
          <div className="flex justify-center space-x-8 text-sm text-gray-500">
            <span>React Ecosystem</span>
            <span>•</span>
            <span>Cloud Platforms</span>
            <span>•</span>
            <span>DevOps Tools</span>
            <span>•</span>
            <span>Testing Frameworks</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;