import React from 'react';
import { Github, Linkedin, Mail, ArrowDown, Code2 } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <div className="mb-8">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Hi, I'm{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Md Mustak
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8">
              Full Stack Developer & UI/UX Enthusiast
            </p>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-12">
              I create beautiful, functional, and user-centered digital experiences. 
              Passionate about coding, design, and making the web a better place.
            </p>
          </div>

          <div className="flex justify-center space-x-6 mb-12">
            <a
              href="https://github.com/mustaque01"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
            >
              <Github size={24} className="text-gray-700" />
            </a>
            <a
              href="https://www.linkedin.com/in/md-mustak-dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
            >
              <Linkedin size={24} className="text-blue-600" />
            </a>
            <a
              href="mailto:mustakarman560@gmail.com"
              className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
            >
              <Mail size={24} className="text-green-600" />
            </a>
            <a
              href="https://leetcode.com/u/mustak_11/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
            >
              <Code2 size={24} className="text-blue-600" />
            </a>
          </div>

          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button
              onClick={() => scrollToAbout()}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              Learn More About Me
            </button>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'})}
              className="bg-white text-blue-600 border-2 border-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              Get In Touch
            </button>
          </div>

          <div className="mt-16 animate-bounce">
            <button onClick={scrollToAbout} className="text-gray-400 hover:text-gray-600 transition-colors duration-200">
              <ArrowDown size={32} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;