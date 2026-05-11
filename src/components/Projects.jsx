import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { useData } from '../context/DataContext';

const Projects = () => {
  const { projects } = useData();

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10 perspective-1000">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Key <span className="text-gradient">Projects</span></h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#00f3ff] to-[#9d00ff] mx-auto rounded-full shadow-[0_0_10px_rgba(157,0,255,0.8)]"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40, rotateX: 10 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              className="h-full"
            >
              <Tilt 
                tiltMaxAngleX={12} 
                tiltMaxAngleY={12} 
                perspective={1000}
                scale={1.03} 
                transitionSpeed={2000}
                className="h-full transform-style-3d"
              >
                <div className={`glass-card h-full p-[2px] group overflow-hidden relative ${project.featured ? 'shadow-[0_15px_40px_rgba(0,243,255,0.2)]' : 'shadow-[0_15px_40px_rgba(157,0,255,0.2)]'}`}>
                  {/* Animated Border Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.color || 'from-[#00f3ff] to-[#9d00ff]'} opacity-40 group-hover:opacity-100 transition-opacity duration-500 animate-pulse`} />
                  
                  <div className="bg-[#0a0a0a] backdrop-blur-2xl h-full rounded-[14px] p-8 flex flex-col relative z-10 transform translate-z-10 group-hover:-translate-y-2 transition-transform duration-500">
                    
                    {project.featured && (
                      <div className="absolute top-0 right-8 -translate-y-1/2 bg-gradient-to-r from-[#00f3ff] to-[#0055ff] text-xs font-bold px-4 py-1 rounded-full text-white shadow-[0_0_15px_rgba(0,243,255,0.6)]">
                        Featured Project
                      </div>
                    )}

                    <h3 className="text-3xl font-extrabold mb-1 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all">{project.title}</h3>
                    <h4 className={`text-sm font-semibold mb-5 bg-clip-text text-transparent bg-gradient-to-r ${project.color || 'from-[#00f3ff] to-[#9d00ff]'}`}>{project.subtitle}</h4>
                    
                    <p className="text-gray-400 mb-8 flex-grow leading-relaxed text-lg">{project.desc}</p>
                    
                    <div className="flex flex-wrap gap-3 mb-8">
                      {(project.tech || []).map((tech, i) => (
                        <span key={i} className="text-sm font-medium px-4 py-1.5 rounded-lg bg-[#1a1a1a] border border-[#333] text-gray-300 shadow-inner group-hover:border-white/20 transition-colors">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-6 mt-auto border-t border-white/10 pt-6">
                      <a href={project.github} className="flex items-center gap-2 font-bold text-gray-300 hover:text-white transition-colors group/link">
                        <FaGithub size={20} className="group-hover/link:rotate-12 transition-transform" /> Source Code
                      </a>
                      <a href={project.demo} className="flex items-center gap-2 font-bold text-[#00f3ff] hover:text-white transition-colors group/link">
                        <ExternalLink size={20} className="group-hover/link:-translate-y-1 group-hover/link:translate-x-1 transition-transform" /> Live Demo
                      </a>
                    </div>
                  </div>
                </div>
              </Tilt>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
