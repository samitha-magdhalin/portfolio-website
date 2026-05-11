import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Award, ShieldCheck } from 'lucide-react';
import Tilt from 'react-parallax-tilt';
import { useData } from '../context/DataContext';

const Experience = () => {
  const { experience: timeline, certs } = useData();

  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 max-w-5xl relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Journey & <span className="text-gradient">Experience</span></h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#00f3ff] to-[#9d00ff] rounded-full shadow-[0_0_10px_rgba(0,243,255,0.8)]"></div>
        </motion.div>

        {/* 3D Timeline */}
        <div className="relative border-l-4 border-[#333] ml-4 md:ml-6 perspective-1000">
          {timeline.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -50, rotateX: 10 }}
              whileInView={{ opacity: 1, x: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              className="mb-16 relative w-full pl-10 md:pl-16"
            >
              {/* Timeline Node */}
              <div className={`absolute top-0 w-12 h-12 rounded-full bg-[#050505] border-4 ${item.type === 'education' ? 'border-[#00f3ff]' : item.type === 'leadership' ? 'border-[#ff00ff]' : 'border-[#9d00ff]'} flex items-center justify-center -left-[26px] shadow-[0_0_20px_rgba(0,243,255,0.5)] z-20`}>
                {item.type === 'education' ? <GraduationCap size={20} className="text-[#00f3ff]" /> : item.type === 'leadership' ? <Award size={20} className="text-[#ff00ff]" /> : <Briefcase size={20} className="text-[#9d00ff]" />}
              </div>
              
              <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5} transitionSpeed={2000}>
                <div className="glass-card p-8 relative group transform-style-3d shadow-[0_15px_35px_rgba(0,0,0,0.5)] hover:shadow-[0_15px_35px_rgba(0,243,255,0.15)]">
                  {/* Connective Arrow */}
                  <div className="hidden md:block absolute top-5 -left-3 w-6 h-6 bg-[#111] border-l border-b border-white/10 rotate-45"></div>
                  
                  <span className="text-xs font-black tracking-widest text-[#00f3ff] uppercase mb-3 block drop-shadow-md">{item.date}</span>
                  <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                  <h4 className="text-md font-semibold text-gray-400 mb-5">{item.org}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed translate-z-10">{item.desc}</p>
                </div>
              </Tilt>
            </motion.div>
          ))}
        </div>

        {/* Certifications Section */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-24 perspective-1000"
        >
          <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5}>
            <div className="glass-card p-10 border-t-4 border-t-[#9d00ff] relative overflow-hidden group">
              <div className="absolute -right-20 -top-20 w-64 h-64 bg-[#9d00ff]/10 rounded-full blur-3xl group-hover:bg-[#9d00ff]/20 transition-all duration-700"></div>
              
              <h3 className="text-3xl font-bold mb-8 text-white flex items-center gap-4">
                <ShieldCheck className="text-[#9d00ff]" size={36} /> Certifications & Achievements
              </h3>
              
              <div className="grid md:grid-cols-2 gap-4 relative z-10">
                {certs.map((cert, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-white/20 transition-colors">
                    <div className="mt-1 w-2 h-2 rounded-full bg-[#00f3ff] shadow-[0_0_8px_rgba(0,243,255,0.8)]" />
                    <span className="text-gray-300 text-sm font-medium">{cert}</span>
                  </div>
                ))}
              </div>
            </div>
          </Tilt>
        </motion.div>

      </div>
    </section>
  );
};

export default Experience;
