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
    company: "Tech Innovations Inc.",
    position: "Senior Frontend Developer",
    duration: "2022 - Present",
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
    company: "Digital Solutions LLC",
    position: "Full Stack Developer",
    duration: "2020 - 2022",
    description: [
      "Developed and maintained full-stack web applications using MERN stack",
      "Built RESTful APIs and integrated third-party services",
      "Optimized database queries and improved application performance",
      "Participated in agile development processes and sprint planning"
    ],
    technologies: ["React", "Node.js", "MongoDB", "Express.js", "AWS"]
  },
  {
    id: 3,
    company: "StartupXYZ",
    position: "Frontend Developer",
    duration: "2019 - 2020",
    description: [
      "Created responsive web interfaces for mobile and desktop platforms",
      "Implemented state management solutions and component libraries",
      "Worked closely with designers to create intuitive user experiences",
      "Contributed to open-source projects and team documentation"
    ],
    technologies: ["React", "Redux", "JavaScript", "SCSS", "Webpack"]
  }
];

export const skills: Skill[] = [
  { name: "React", icon: "⚛️", proficiency: 95 },
  { name: "TypeScript", icon: "📘", proficiency: 90 },
  { name: "JavaScript", icon: "💛", proficiency: 95 },
  { name: "Node.js", icon: "🟢", proficiency: 85 },
  { name: "Python", icon: "🐍", proficiency: 80 },
  { name: "PostgreSQL", icon: "🐘", proficiency: 75 },
  { name: "MongoDB", icon: "🍃", proficiency: 80 },
  { name: "AWS", icon: "☁️", proficiency: 70 },
  { name: "Docker", icon: "🐳", proficiency: 75 },
  { name: "Git", icon: "📚", proficiency: 90 }
];