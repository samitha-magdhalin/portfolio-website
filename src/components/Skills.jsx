import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { useData } from '../context/DataContext';

const Skills = () => {
  const { skillsCategories } = useData();

  return (
    <section id="skills" className="py-24 relative">
      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#00f3ff]/20 to-transparent" />
      <div className="absolute bottom-1/4 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#9d00ff]/20 to-transparent" />

      <div className="container mx-auto px-6 md:px-12 relative z-10 perspective-1000">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Technical <span className="text-gradient">Arsenal</span></h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#00f3ff] to-[#9d00ff] mx-auto rounded-full shadow-[0_0_10px_rgba(0,243,255,0.6)]"></div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-10">
          {skillsCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9, rotateY: 15 }}
              whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.2 }}
            >
              <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} transitionSpeed={2000} className="h-full">
                <div className="glass-card p-8 h-full border-t border-white/10 relative overflow-hidden group">
                  {/* Hover Glow */}
                  <div className={`absolute -inset-10 bg-gradient-to-r ${category.color} opacity-0 group-hover:opacity-10 blur-2xl transition-opacity duration-700`} />
                  
                  <h3 className={`text-2xl font-extrabold mb-8 bg-clip-text text-transparent bg-gradient-to-r ${category.color} drop-shadow-lg tracking-wide`}>
                    {category.title}
                  </h3>

                  <div className="space-y-6 relative z-10">
                    {category.skills.map((skill, i) => (
                      <div key={i} className="group/skill">
                        <div className="flex justify-between mb-2">
                          <span className="text-sm font-bold text-gray-300 group-hover/skill:text-white transition-colors">{skill.name}</span>
                          <span className="text-sm font-bold text-gray-400 group-hover/skill:text-white transition-colors">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-[#111] border border-[#333] rounded-full h-3 shadow-inner overflow-hidden">
                          <motion.div 
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.2, delay: 0.3 + (i * 0.1), ease: "easeOut" }}
                            className={`h-full rounded-full bg-gradient-to-r ${category.color} relative`}
                          >
                            {/* Animated dot on the progress bar */}
                            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,1)] translate-x-1/2 scale-0 group-hover/skill:scale-100 transition-transform duration-300"></div>
                          </motion.div>
                        </div>
                      </div>
                    ))}
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

export default Skills;
