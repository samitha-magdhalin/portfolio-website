import { motion } from 'framer-motion';
import { Target, Lightbulb, Cpu } from 'lucide-react';
import Tilt from 'react-parallax-tilt';

const About = () => {
  const highlights = [
    {
      icon: <Target size={32} className="text-[#00f3ff]" />,
      title: 'Objective',
      desc: 'Seeking entry-level roles or internships to grow in Cybersecurity, AI, or Software Development.'
    },
    {
      icon: <Cpu size={32} className="text-[#9d00ff]" />,
      title: 'AI & Tools',
      desc: 'Hands-on experience in building AI-based tools and secure communication systems.'
    },
    {
      icon: <Lightbulb size={32} className="text-[#00f3ff]" />,
      title: 'Problem Solving',
      desc: 'Passionate about secure software development and protecting digital environments.'
    }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* 3D Background Gradients */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#9d00ff]/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#00f3ff]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">About <span className="text-gradient">Me</span></h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#00f3ff] to-[#9d00ff] mx-auto rounded-full shadow-[0_0_10px_rgba(0,243,255,0.8)]"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center perspective-1000">
          <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5} transitionSpeed={2000}>
            <motion.div
              initial={{ opacity: 0, x: -50, rotateY: 20 }}
              whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="glass-card p-8 md:p-12 border-l-4 border-l-[#00f3ff] relative shadow-[10px_20px_50px_rgba(0,0,0,0.5)] transform-style-3d"
            >
              <h3 className="text-3xl font-bold mb-6 text-white tracking-wide">Who am I?</h3>
              <p className="text-gray-300 mb-6 leading-relaxed text-lg">
                I am a highly motivated Bachelor of Computer Applications (BCA) student at Christ Academy Institute for Advanced Studies, Bengaluru. With an impressive academic track record (82% in BCA, 100% in Class X), I have a strong foundation in computer science and problem-solving.
              </p>
              <p className="text-gray-300 mb-8 leading-relaxed text-lg">
                My passion lies at the intersection of <strong className="text-[#00f3ff]">Cybersecurity</strong>, <strong className="text-[#9d00ff]">Artificial Intelligence</strong>, and <strong className="text-[#00f3ff]">Secure Software Development</strong>. I am constantly building tools that integrate AI with security protocols, such as my AI-driven secure communication platform.
              </p>
              
              <div className="p-6 bg-white/5 rounded-xl border border-white/10 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-[#00f3ff]/20 to-[#9d00ff]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <p className="italic text-white relative z-10 font-medium">
                  "I am actively seeking entry-level roles or internships to apply my skills and grow in the fields of Cybersecurity, AI, or Software Development."
                </p>
              </div>
            </motion.div>
          </Tilt>

          <div className="grid gap-6 perspective-1000">
            {highlights.map((card, idx) => (
              <Tilt key={idx} tiltMaxAngleX={15} tiltMaxAngleY={15} scale={1.03}>
                <motion.div
                  initial={{ opacity: 0, x: 50, rotateX: -20 }}
                  whileInView={{ opacity: 1, x: 0, rotateX: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.2 }}
                  className="glass-card p-6 flex gap-6 items-center hover:shadow-[0_10px_30px_rgba(0,243,255,0.15)] transition-all duration-300 group"
                >
                  <div className="flex-shrink-0 w-20 h-20 rounded-2xl bg-gradient-to-br from-[#111] to-[#222] border border-white/10 flex items-center justify-center group-hover:bg-white/10 transition-colors shadow-inner">
                    <div className="transform group-hover:scale-125 transition-transform duration-300 drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]">
                      {card.icon}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2 text-white group-hover:text-[#00f3ff] transition-colors">{card.title}</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">{card.desc}</p>
                  </div>
                </motion.div>
              </Tilt>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
