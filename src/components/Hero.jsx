import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import { Link } from 'react-scroll';
import { ChevronDown } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import Tilt from 'react-parallax-tilt';

const Hero = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesOptions = {
    background: { color: { value: "transparent" } },
    fpsLimit: 60,
    interactivity: {
      events: {
        onHover: { enable: true, mode: "grab" },
        resize: true,
      },
      modes: {
        grab: { distance: 140, links: { opacity: 1 } },
      },
    },
    particles: {
      color: { value: ["#00f3ff", "#9d00ff"] },
      links: {
        color: "#ffffff",
        distance: 150,
        enable: true,
        opacity: 0.1,
        width: 1,
      },
      move: {
        direction: "none",
        enable: true,
        outModes: { default: "bounce" },
        speed: 1,
      },
      number: { density: { enable: true, area: 800 }, value: 80 },
      opacity: { value: 0.5 },
      shape: { type: "circle" },
      size: { value: { min: 1, max: 4 } },
    },
    detectRetina: true,
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 perspective-1000">
      {/* Particles Background */}
      {init && (
        <Particles
          id="tsparticles"
          options={particlesOptions}
          className="absolute inset-0 z-0"
        />
      )}

      {/* 3D Floating Orbs */}
      <motion.div 
        animate={{ y: [0, -30, 0], rotate: [0, 45, 0] }} 
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-gradient-to-br from-[#00f3ff]/40 to-transparent blur-xl z-0"
      />
      <motion.div 
        animate={{ y: [0, 40, 0], rotate: [0, -45, 0] }} 
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/4 right-1/4 w-48 h-48 rounded-full bg-gradient-to-br from-[#9d00ff]/30 to-transparent blur-2xl z-0"
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-24">
          
          <Tilt 
            tiltMaxAngleX={15} 
            tiltMaxAngleY={15} 
            perspective={1000}
            transitionSpeed={1500}
            className="w-full lg:w-1/2 flex justify-center lg:justify-end"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotateY: -30 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 1, type: "spring", stiffness: 100 }}
              className="glass-card p-8 border-t border-l border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#00f3ff]/20 to-transparent rounded-bl-full" />
              
              <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-sm font-medium text-[#00f3ff] shadow-[0_0_10px_rgba(0,243,255,0.2)]">
                AI & Cybersecurity Enthusiast
              </div>

              <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4 drop-shadow-2xl">
                I'm <span className="text-gradient inline-block hover:scale-105 transition-transform cursor-default">Samitha</span><br/>Muthyala
              </h1>

              <div className="text-xl md:text-2xl font-semibold text-gray-300 mb-6 h-12">
                Specializing in{' '}
                <span className="text-[#9d00ff] drop-shadow-[0_0_8px_rgba(157,0,255,0.6)]">
                  <Typewriter
                    words={['Cybersecurity', 'AI Development', 'Secure Software', 'Data Visualization']}
                    loop={true}
                    cursor
                    cursorStyle='_'
                    typeSpeed={50}
                    deleteSpeed={30}
                    delaySpeed={2000}
                  />
                </span>
              </div>

              <p className="text-gray-400 text-lg leading-relaxed mb-8 relative z-10">
                Motivated BCA student with hands-on experience in building AI-based tools and secure communication systems. Seeking opportunities to grow and innovate.
              </p>

              <div className="flex items-center gap-6">
                <a href="https://github.com/samitha-muthyala" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-[#00f3ff] transform hover:scale-125 hover:rotate-12 transition-all duration-300 drop-shadow-[0_0_10px_rgba(0,243,255,0)] hover:drop-shadow-[0_0_10px_rgba(0,243,255,0.8)]"><FaGithub size={28} /></a>
                <a href="https://linkedin.com/in/samitha-muthyala" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-[#00f3ff] transform hover:scale-125 hover:-rotate-12 transition-all duration-300 drop-shadow-[0_0_10px_rgba(0,243,255,0)] hover:drop-shadow-[0_0_10px_rgba(0,243,255,0.8)]"><FaLinkedin size={28} /></a>
              </div>
            </motion.div>
          </Tilt>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-full lg:w-1/2 flex flex-col gap-8 items-center lg:items-center"
          >
            
            <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} scale={1.02} transitionSpeed={2000} className="w-full max-w-md flex justify-center">
              <div className="relative group w-64 h-64 lg:w-80 lg:h-80">
                {/* Glowing background */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#00f3ff] to-[#9d00ff] rounded-full blur-2xl opacity-40 group-hover:opacity-70 transition-opacity duration-500"></div>
                
                {/* Image container */}
                <div className="relative w-full h-full rounded-full p-2 glass-card z-10 border border-white/20 shadow-[0_0_30px_rgba(0,243,255,0.3)] transform-style-3d">
                  <img 
                    src="/profile.png" 
                    alt="Samitha Muthyala" 
                    className="w-full h-full object-cover rounded-full filter contrast-110 brightness-90 group-hover:brightness-110 transition-all duration-500 translate-z-10"
                  />
                </div>
              </div>
            </Tilt>

            <div className="flex gap-4 mt-2 w-full max-w-sm">
              <Link to="projects" smooth={true} duration={500} className="w-full">
                <button className="w-full px-8 py-4 rounded-xl bg-gradient-to-r from-[#00f3ff] to-[#9d00ff] text-white font-bold tracking-wide hover:shadow-[0_0_30px_rgba(0,243,255,0.5)] transform hover:-translate-y-1 transition-all duration-300">
                  Explore Projects
                </button>
              </Link>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer z-20"
      >
        <Link to="about" smooth={true} duration={500}>
          <ChevronDown size={36} className="text-gray-400 hover:text-[#00f3ff] drop-shadow-[0_0_8px_rgba(0,243,255,0.5)] transition-all" />
        </Link>
      </motion.div>
    </section>
  );
};

export default Hero;
