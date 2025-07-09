import React from 'react';
import { skills } from '../data/portfolio';
const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
            Skills & Technologies
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            Technologies I work with to bring your ideas to life
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="flex flex-col items-center justify-center p-6 transition bg-white rounded-lg shadow hover:bg-gray-100"
            >
              <span className="mb-2 text-4xl">{skill.icon}</span>
              <span className="mb-1 font-semibold text-gray-800">{skill.name}</span>
              <span className="text-sm text-gray-500">{skill.proficiency}%</span>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="mb-8 text-gray-600">
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