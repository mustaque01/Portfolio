import React from 'react';
import { Code, Palette, Zap } from 'lucide-react';
// import { experiences } from '../data/portfolio'; // Assuming you have a data file for experiences

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Passionate developer with a love for creating exceptional digital experiences
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="aspect-square bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl p-8 flex items-center justify-center mb-8">
              <div className="text-6xl">👨‍💻</div>
            </div>
          </div>

          <div>
            <p className="text-lg text-gray-700 mb-6">
              I'm a passionate full-stack developer creating 
              web applications that combine beautiful design with robust functionality. 
              I specialize in React, Node.js, and modern web technologies.
            </p>
            
            <p className="text-lg text-gray-700 mb-8">
              When I'm not coding, you can find me exploring new technologies, contributing 
              to open-source projects, or enjoying outdoor adventures. I believe in writing 
              clean, maintainable code and creating user experiences that make a difference.
            </p>

            <div className="grid sm:grid-cols-3 gap-6">
              <div className="text-center p-6 rounded-lg bg-blue-50 hover:bg-blue-100 transition-colors duration-200">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-600 text-white rounded-lg mb-4">
                  <Code size={24} />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Clean Code</h3>
                <p className="text-sm text-gray-600">Writing maintainable and scalable code</p>
              </div>

              <div className="text-center p-6 rounded-lg bg-purple-50 hover:bg-purple-100 transition-colors duration-200">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-600 text-white rounded-lg mb-4">
                  <Palette size={24} />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">UI/UX Design</h3>
                <p className="text-sm text-gray-600">Creating beautiful user interfaces</p>
              </div>

              <div className="text-center p-6 rounded-lg bg-green-50 hover:bg-green-100 transition-colors duration-200">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-green-600 text-white rounded-lg mb-4">
                  <Zap size={24} />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Performance</h3>
                <p className="text-sm text-gray-600">Optimizing for speed and efficiency</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;