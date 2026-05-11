import { Heart } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-[#050505] pt-16 pb-8 relative z-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8 mb-12">
          
          <div className="text-center md:text-left max-w-sm">
            <ScrollLink to="hero" smooth={true} duration={500} className="cursor-pointer inline-flex items-center gap-2 group mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#00f3ff] to-[#9d00ff] p-[2px] transform group-hover:rotate-180 transition-all duration-700">
                <div className="w-full h-full bg-[#050505] rounded-full flex items-center justify-center">
                  <span className="font-bold text-sm text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#00f3ff] group-hover:to-[#9d00ff] transition-all">SM</span>
                </div>
              </div>
              <span className="font-bold text-xl tracking-wider text-gradient">Samitha</span>
            </ScrollLink>
            <p className="text-gray-400 text-sm leading-relaxed">
              Motivated BCA student with a strong interest in Cybersecurity, AI, and Secure Software Development.
            </p>
          </div>

          <div className="flex gap-4">
            <a href="https://github.com/samitha-muthyala" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-[#00f3ff] hover:bg-white/10 hover:shadow-[0_0_15px_rgba(0,243,255,0.4)] hover:-translate-y-1 transition-all">
              <FaGithub size={22} />
            </a>
            <a href="https://linkedin.com/in/samitha-muthyala" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-[#9d00ff] hover:bg-white/10 hover:shadow-[0_0_15px_rgba(157,0,255,0.4)] hover:-translate-y-1 transition-all">
              <FaLinkedin size={22} />
            </a>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500 font-medium">
          <p>© {new Date().getFullYear()} Samitha Muthyala. All rights reserved. <RouterLink to="/admin" className="ml-4 hover:text-[#00f3ff] transition-colors">Admin Login</RouterLink></p>
          <p className="flex items-center gap-1">
            Built with <Heart size={12} className="text-[#00f3ff] inline animate-pulse" /> using React, Tailwind & Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
