import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Menu, X, Shield, Code, User, Briefcase, Mail } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', to: 'about', icon: <User size={18} /> },
    { name: 'Projects', to: 'projects', icon: <Code size={18} /> },
    { name: 'Skills', to: 'skills', icon: <Shield size={18} /> },
    { name: 'Journey', to: 'experience', icon: <Briefcase size={18} /> },
    { name: 'Contact', to: 'contact', icon: <Mail size={18} /> },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'glass py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        
        {/* Logo */}
        <Link to="hero" smooth={true} duration={500} className="cursor-pointer flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#00f3ff] to-[#9d00ff] p-[2px] transform group-hover:rotate-180 transition-all duration-700">
            <div className="w-full h-full bg-[#050505] rounded-full flex items-center justify-center">
              <span className="font-bold text-lg text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#00f3ff] group-hover:to-[#9d00ff] transition-all">SM</span>
            </div>
          </div>
          <span className="font-bold text-xl tracking-wider hidden sm:block text-gradient">Samitha</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              smooth={true}
              duration={500}
              spy={true}
              activeClass="text-[#00f3ff] drop-shadow-[0_0_10px_rgba(0,243,255,0.8)]"
              className="flex items-center gap-2 text-gray-300 hover:text-[#00f3ff] hover:-translate-y-1 transition-all cursor-pointer text-sm font-medium uppercase tracking-wider"
            >
              {link.name}
            </Link>
          ))}
          <a 
            href="/resume.pdf" 
            download="Samitha_Muthyala_Resume.pdf"
            className="px-5 py-2 rounded-full border border-[#00f3ff]/50 text-[#00f3ff] hover:bg-[#00f3ff]/10 hover:shadow-[0_0_20px_rgba(0,243,255,0.6)] transform hover:scale-105 transition-all duration-300 text-sm font-medium uppercase tracking-wider"
          >
            Resume
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white hover:text-[#00f3ff] transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <div className={`md:hidden absolute top-full left-0 w-full glass-card border-t-0 rounded-none overflow-hidden transition-all duration-300 ${mobileMenuOpen ? 'max-h-[400px] py-4' : 'max-h-0 py-0'}`}>
        <div className="flex flex-col items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              smooth={true}
              duration={500}
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-3 text-gray-300 hover:text-[#00f3ff] transition-colors cursor-pointer font-medium uppercase tracking-wider"
            >
              {link.icon}
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
