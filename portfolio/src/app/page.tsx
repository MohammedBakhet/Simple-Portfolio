'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import AnimatedImage from './components/AnimatedImage';
import Navbar from './components/Navbar';
import { Typewriter } from 'react-simple-typewriter';
import { FaDownload, FaGithub, FaLinkedin, FaEnvelope, FaCode, FaServer, FaTools, FaLightbulb } from 'react-icons/fa';
import ContactForm from './components/ContactForm';

type SkillCategory = 'Frontend Development' | 'Backend Development' | 'Development Tools' | 'Additional Skills';

export default function HomePage() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
      offset: 50,
      easing: 'ease-out-cubic',
      delay: 100,
    });
  }, []);

  const skillCategories = {
    'Frontend Development': [
      'HTML/CSS',
      'JavaScript',
      'TypeScript',
      'React',
      'Next.js',
      'Tailwind CSS'
    ],
    'Backend Development': [
      'Node.js',
      'Express.js',
      'MongoDB',
      'RESTful APIs',
      'GraphQL',
      'C++'
    ],
    'Development Tools': [
      'Git',
      'Docker',
      'Kubernetes',
      'VS Code',
      'Postman',
      'Cursor'
    ],
    'Additional Skills': [
      'Responsive Design',
      'UI/UX Design',
      'Testing',
      'Agile/Scrum',
      'Jira',
    ]
  } as const;

  const projects = [
    {
      title: "E-commerce Platform (Group Project)",
      description: "Collaborated in a larger team using Agile methodology to develop a full-featured e-commerce platform. Worked in sprints with daily stand-ups and regular retrospectives to deliver a scalable and user-friendly shopping experience.",
      technologies: ["React", "Node.js", "MongoDB", "Express","Jira", "GitHub"],
      highlights: [
        "Implemented user authentication and authorization",
        "Developed shopping cart functionality and checkout process",
        "Collaborated using Git workflow and code reviews",
        "Participated in daily stand-ups and sprint planning",
        "Worked with Jira for task management and sprint tracking"
      ]
    },
    {
      title: "BnB Management Platform",
      description: "Developed a comprehensive BnB management system that helps property owners manage their rentals, bookings, and guest communications efficiently. Features include automated booking management, payment processing, and guest communication tools.",
      technologies: ["Next.js", "TypeScript", "Node.js", "MongoDB", "Express"],
      highlights: [
        "Automated booking and availability management",
        "Real-time messaging system for host-guest communication",
        "Property analytics and reporting dashboard"
      ]
    },
    {
      title: "Content Management System",
      description: "Built a modern headless CMS platform allowing users to manage and publish digital content across multiple channels. The system provides an intuitive interface for content creation, management, and distribution.",
      technologies: ["Next.js", "TypeScript", "PostgreSQL", "GraphQL", "AWS"],
      highlights: [
        "Custom content type builder",
        "Role-based access control",
        "Media asset management",
        "API-first architecture"
      ]
    }
    
  ];

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section id="home" className="min-h-screen flex items-center pt-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto w-full">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
              <div className="w-full md:w-1/2 space-y-4 md:space-y-6 text-center md:text-left">
                <h1 
                  className="text-4xl md:text-6xl font-bold text-gray-900" 
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  Hi,<br />
                  I'm <span className="text-purple-600">Mohammed</span><br />
                  Full-Stack Developer
                </h1>
                <p 
                  className="text-lg md:text-xl text-gray-600" 
                  data-aos="fade-up" 
                  data-aos-delay="200"
                  data-aos-duration="1200"
                >
                  <Typewriter
                    words={[
                      "Full-Stack Developer passionate about creating modern web applications",
                      "Building efficient and innovative solutions with the latest technologies",
                      "Transforming ideas into seamless digital experiences",
                      "Crafting responsive and user-friendly web applications"
                    ]}
                    loop={true}
                    cursor
                    cursorStyle="|"
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={2000}
                  />
                </p>
                <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-center md:items-start">
                  <button 
                    className="px-6 md:px-8 py-3 bg-purple-600 text-white rounded-full font-medium hover:bg-purple-700 transition-colors flex items-center justify-center gap-2 min-w-[140px]"
                    data-aos="fade-up"
                    data-aos-delay="400"
                    data-aos-duration="1200"
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Contact
                  </button>
                  <a 
                    href="/MOHAMMED_BAKHET_CV.pdf" 
                    download="MOHAMMED_BAKHET_CV.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 md:px-8 py-3 bg-white text-purple-600 border-2 border-purple-600 rounded-full font-medium hover:bg-purple-50 transition-colors flex items-center justify-center gap-2 min-w-[140px]"
                    data-aos="fade-up"
                    data-aos-delay="500"
                    data-aos-duration="1200"
                  >
                    Resume <FaDownload className="w-4 h-4" />
                  </a>
                </div>
              </div>
              <div 
                className="w-full md:w-1/2 flex justify-center items-center mt-8 md:mt-0" 
                data-aos="fade-left"
                data-aos-duration="1200"
              >
                <div className="max-w-[250px] md:max-w-[350px] w-full">
                  <AnimatedImage
                    src="/images/profile.png"
                    alt="Mohammed Bakhet"
                    width={350}
                    height={350}
                    className="w-full h-auto"
                    loading="lazy"
                    sizes="(max-width: 768px) 250px, 350px"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50" data-aos="fade-up">
          <div className="max-w-5xl mx-auto">
            <p 
              className="text-purple-600 font-medium text-center mb-2" 
              data-aos="fade-down"
              data-aos-duration="600"
            >
              ABOUT ME
            </p>
            <h2 
              className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-8 md:mb-12" 
              data-aos="fade-down"
              data-aos-duration="800"
            >
              Get to know me
              <div className="w-24 h-1 bg-purple-600 mx-auto mt-4"></div>
            </h2>
            <div 
              className="bg-white rounded-2xl p-6 md:p-8 shadow-sm" 
              data-aos="zoom-in"
              data-aos-delay="100"
              data-aos-duration="800"
            >
              <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                I am an <span className="text-purple-600 font-medium">active and positive person</span> in all aspects of life. As a Full-Stack Developer, I am passionate about creating <span className="text-purple-600 font-medium">efficient and innovative web solutions</span>. My constructive approach and strong learning capabilities position me as a valuable asset across diverse professional environments. I am actively seeking opportunities to apply my <span className="text-purple-600 font-medium">technical expertise</span> and dedication to meaningful projects. With a solid foundation in both frontend and backend technologies, I am ready to contribute to a dynamic team and take on challenging projects that drive business growth and technological advancement.
              </p>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-16 md:py-20 px-4 sm:px-6 lg:px-8" data-aos="fade-up">
          <div className="max-w-5xl mx-auto">
            <h2 
              className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4" 
              data-aos="fade-down"
              data-aos-duration="1200"
            >
              Skills & Technologies
            </h2>
            <div className="w-24 h-1 bg-purple-600 mx-auto mb-16"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {Object.entries(skillCategories).map(([category, skills], categoryIndex) => {
                const icons: Record<SkillCategory, JSX.Element> = {
                  'Frontend Development': <FaCode className="w-8 h-8 text-purple-600" />,
                  'Backend Development': <FaServer className="w-8 h-8 text-purple-600" />,
                  'Development Tools': <FaTools className="w-8 h-8 text-purple-600" />,
                  'Additional Skills': <FaLightbulb className="w-8 h-8 text-purple-600" />
                };

                const descriptions: Record<SkillCategory, string> = {
                  'Frontend Development': 'Building responsive and interactive user interfaces',
                  'Backend Development': 'Creating robust server-side applications and APIs',
                  'Development Tools': 'Utilizing industry-standard tools for efficient development',
                  'Additional Skills': 'Complementary skills to enhance development workflow'
                };

                return (
                  <div
                    key={category}
                    className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300"
                    data-aos="flip-up"
                    data-aos-delay={categoryIndex * 100}
                    data-aos-duration="1000"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      {icons[category as SkillCategory]}
                      <h3 className="text-xl md:text-2xl font-semibold text-gray-900">{category}</h3>
                    </div>
                    
                    <p className="text-gray-600 mb-6">{descriptions[category as SkillCategory]}</p>

                    <div className="flex flex-wrap gap-2">
                      {skills.map((skill, index) => (
                        <div
                          key={skill}
                          className="group"
                          data-aos="fade-up"
                          data-aos-delay={index * 50}
                          data-aos-duration="800"
                        >
                          <span className="inline-block px-4 py-2 bg-gray-50 rounded-full text-sm font-medium text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                            {skill}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50" data-aos="fade-up">
          <div className="max-w-5xl mx-auto">
            <h2 
              className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-8 md:mb-12" 
              data-aos="fade-down"
              data-aos-duration="800"
            >
              Projects
            </h2>
            <div className="space-y-6 md:space-y-8">
              {projects.map((project, index) => (
                <div
                  key={project.title}
                  className="bg-white rounded-2xl p-6 md:p-8 shadow-sm"
                  data-aos="fade-right"
                  data-aos-delay={index * 100}
                  data-aos-duration="800"
                >
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">{project.title}</h3>
                  <p className="text-base md:text-lg text-gray-600 mb-6">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-purple-50 text-purple-600 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    {project.highlights.map((highlight, index) => (
                      <li key={index}>{highlight}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 md:py-20 px-4 sm:px-6 lg:px-8" data-aos="fade-up">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 
                className="text-3xl md:text-4xl font-bold text-gray-900 mb-6" 
                data-aos="fade-down"
                data-aos-duration="800"
              >
                Contact
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Feel free to reach out to me for collaborations or opportunities.
              </p>
              <div className="w-24 h-px bg-purple-600 mx-auto mt-6"></div>
            </div>
            
            <div 
              className="bg-white/50 backdrop-blur-sm p-8 md:p-12" 
              data-aos="zoom-in"
              data-aos-delay="100"
              data-aos-duration="800"
            >
              <ContactForm />
            </div>
          </div>
        </section>

      
        {/* Footer */}
        <footer className="relative py-8 bg-gray-100">
          <div className="max-w-7xl mx-auto px-8 flex flex-col min-h-[120px]">
            <div className="flex justify-between items-start">
              <div className="absolute left-1/2 -translate-x-1/2">
                <div className="flex flex-col items-center gap-1 md:gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                  <svg
                    className="w-3 h-3 md:w-4 md:h-4 text-purple-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 10l7-7m0 0l7 7m-7-7v18"
                    />
                  </svg>
                  <span className="text-xs md:text-sm tracking-[0.2em] uppercase font-medium text-purple-600">Back to top</span>
                </div>
              </div>

              <div className="flex gap-4 ml-auto">
                <a
                  href="https://github.com/MohammedBakhet"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 md:w-12 md:h-12 bg-white rounded-full border-2 border-white flex items-center justify-center relative overflow-hidden group"
                >
                  <FaGithub className="w-4 h-4 md:w-6 md:h-6 text-[#262626] relative z-10 transition-all duration-500 group-hover:text-white group-hover:rotate-[360deg]" />
                  <div className="absolute top-full left-0 w-full h-full bg-[#262626] transition-all duration-500 group-hover:top-0 z-0" />
                </a>
                <a
                  href="https://www.linkedin.com/in/mohammed-bakhet-5461412a9/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 md:w-12 md:h-12 bg-white rounded-full border-2 border-white flex items-center justify-center relative overflow-hidden group"
                >
                  <FaLinkedin className="w-4 h-4 md:w-6 md:h-6 text-[#262626] relative z-10 transition-all duration-500 group-hover:text-white group-hover:rotate-[360deg]" />
                  <div className="absolute top-full left-0 w-full h-full bg-[#0077b5] transition-all duration-500 group-hover:top-0 z-0" />
                </a>
                <a
                  href="mailto:Mohammed.bakhet011@gmail.com"
                  className="w-8 h-8 md:w-12 md:h-12 bg-white rounded-full border-2 border-white flex items-center justify-center relative overflow-hidden group"
                >
                  <FaEnvelope className="w-4 h-4 md:w-6 md:h-6 text-[#262626] relative z-10 transition-all duration-500 group-hover:text-white group-hover:rotate-[360deg]" />
                  <div className="absolute top-full left-0 w-full h-full bg-purple-600 transition-all duration-500 group-hover:top-0 z-0" />
                </a>
              </div>
            </div>
            
            <p className="text-gray-600 text-xs md:text-sm mt-8 md:absolute md:bottom-8 md:left-8">
              © 2025 Mohammed Bakhet. All rights reserved.
            </p>
          </div>
        </footer>
      </main>
    </>
  );
}
