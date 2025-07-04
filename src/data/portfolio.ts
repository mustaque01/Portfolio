import { Project, Experience, Skill } from '../types';

export const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with React, Node.js, and PostgreSQL. Features include user authentication, payment processing, inventory management, and admin dashboard.",
    technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "JWT", "Tailwind CSS"],
    image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
    liveUrl: "https://demo-ecommerce.com",
    githubUrl: "https://github.com/username/ecommerce-platform",
    featured: true
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates, team collaboration, and project tracking capabilities.",
    technologies: ["React", "TypeScript", "Firebase", "Material-UI", "Socket.io"],
    image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800",
    liveUrl: "https://taskmanager-app.com",
    githubUrl: "https://github.com/username/task-manager",
    featured: true
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description: "A responsive weather application with location-based forecasts, interactive maps, and weather alerts using OpenWeather API.",
    technologies: ["React", "OpenWeather API", "Chart.js", "Geolocation"],
    image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800",
    liveUrl: "https://weather-dashboard.com",
    githubUrl: "https://github.com/username/weather-app",
    featured: false
  },
  {
    id: 4,
    title: "Portfolio Website",
    description: "A modern, responsive portfolio website built with React and TypeScript, featuring smooth animations and optimal performance.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
    liveUrl: "https://portfolio.com",
    githubUrl: "https://github.com/username/portfolio",
    featured: false
  }
];

export const experiences: Experience[] = [
  {
    id: 1,
    company: "Hackathone project Inc.",
    position: "Senior Frontend Developer",
    duration: "2 months",
    description: [
      "Lead development of customer-facing web applications using React and TypeScript",
      "Implemented responsive design systems and improved page load times by 40%",
      "Mentored junior developers and conducted code reviews",
      "Collaborated with UX/UI teams to deliver pixel-perfect implementations"
    ],
    technologies: ["React", "TypeScript", "Next.js", "Tailwind CSS", "GraphQL"]
  },
  {
    id: 2,
    company: "Mental Wellness Companion Web App",
    position: "Full Stack Developer",
    duration: "May 2025 - Present",
    description: [
      //"Developed and maintained full-stack web applications using MERN stack",
      //"Built RESTful APIs and integrated third-party services",
      //"Optimized database queries and improved application performance",
      //"Participated in agile development processes and sprint planning"
      "working on a mental wellness companion web app that provides personalized mental health resources and support through a user-friendly interface. The app includes features such as mood tracking, guided meditation, and access to professional resources.",
    ],
    technologies: ["React", "Node.js", "MongoDB", "Express.js", "AWS" , "vercel"]
  }
  // Add more experiences as needed
];

export const skills: Skill[] = [
  { name: "React", icon: "⚛️", proficiency: 95 },
  { name: "TypeScript", icon: "📘", proficiency: 90 },
  { name: "JavaScript", icon: "💛", proficiency: 92 },
  { name: "Node.js", icon: "🟢", proficiency: 85 },
  { name: "DSA", icon: "📊", proficiency: 88 },
  { name: "Express.js", icon: "🚂", proficiency: 85 },
  { name: "Python", icon: "🐍", proficiency: 80 },
  { name: "PostgreSQL", icon: "🐘", proficiency: 75 },
  { name: "MongoDB", icon: "🍃", proficiency: 80 },
  { name: "AWS", icon: "☁️", proficiency: 70 },
  { name: "Docker", icon: "🐳", proficiency: 75 },
  { name: "Git", icon: "📚", proficiency: 90 },
  { name: "C++", icon: "🟦", proficiency: 90 },
  { name: "MySQL", icon: "🐬", proficiency: 96 },
  { name: "RESTful APIs", icon: "🔗", proficiency: 92 }
];