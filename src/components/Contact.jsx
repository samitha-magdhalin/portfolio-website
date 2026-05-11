import { motion } from 'framer-motion';
import { Send, MapPin, Mail, Phone } from 'lucide-react';
import { useState } from 'react';
import Tilt from 'react-parallax-tilt';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent successfully!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* 3D Decorative Elements */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-[#9d00ff] rounded-full blur-[150px] opacity-10 z-0 pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Get In <span className="text-gradient">Touch</span></h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#00f3ff] to-[#9d00ff] mx-auto rounded-full shadow-[0_0_10px_rgba(157,0,255,0.8)]"></div>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 perspective-1000">
          <motion.div 
            initial={{ opacity: 0, x: -50, rotateY: 15 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2 space-y-8"
          >
            <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} transitionSpeed={2000} className="h-full">
              <div className="glass-card p-8 h-full shadow-[0_20px_40px_rgba(0,0,0,0.4)]">
                <h3 className="text-3xl font-bold text-white mb-6 tracking-wide">Let's connect</h3>
                <p className="text-gray-400 leading-relaxed mb-10 text-lg">
                  I'm seeking entry-level roles or internships in Cybersecurity, AI, or Software Development. Feel free to reach out for opportunities or collaborations!
                </p>

                <div className="space-y-8">
                  <div className="flex items-center gap-5 group">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#111] to-[#222] border border-white/10 flex items-center justify-center text-[#00f3ff] group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(0,243,255,0.4)] transition-all">
                      <Mail size={24} />
                    </div>
                    <div>
                      <h4 className="text-sm text-gray-500 uppercase tracking-widest font-bold mb-1">Email</h4>
                      <p className="text-white font-medium">samithamuthyala@gmail.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-5 group">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#111] to-[#222] border border-white/10 flex items-center justify-center text-[#ff00ff] group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(255,0,255,0.4)] transition-all">
                      <Phone size={24} />
                    </div>
                    <div>
                      <h4 className="text-sm text-gray-500 uppercase tracking-widest font-bold mb-1">Phone</h4>
                      <p className="text-white font-medium">+91 6281767382</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-5 group">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#111] to-[#222] border border-white/10 flex items-center justify-center text-[#9d00ff] group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(157,0,255,0.4)] transition-all">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <h4 className="text-sm text-gray-500 uppercase tracking-widest font-bold mb-1">Location</h4>
                      <p className="text-white font-medium">Bengaluru, India</p>
                    </div>
                  </div>
                </div>
              </div>
            </Tilt>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50, rotateY: -15 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-3"
          >
            <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5} transitionSpeed={2000} className="h-full">
              <form onSubmit={handleSubmit} className="glass-card p-8 md:p-12 shadow-[0_20px_40px_rgba(0,0,0,0.4)] transform-style-3d">
                <div className="grid md:grid-cols-2 gap-6 mb-8 translate-z-10">
                  <div>
                    <label htmlFor="name" className="block text-sm font-bold text-gray-400 mb-3 tracking-wide">Your Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-[#00f3ff] focus:shadow-[0_0_15px_rgba(0,243,255,0.2)] transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-bold text-gray-400 mb-3 tracking-wide">Your Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-[#9d00ff] focus:shadow-[0_0_15px_rgba(157,0,255,0.2)] transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                <div className="mb-8 translate-z-10">
                  <label htmlFor="message" className="block text-sm font-bold text-gray-400 mb-3 tracking-wide">Message</label>
                  <textarea 
                    id="message" 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-[#00f3ff] focus:shadow-[0_0_15px_rgba(0,243,255,0.2)] transition-all resize-none"
                    placeholder="Hello Samitha, I would like to discuss..."
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  className="w-full flex items-center justify-center gap-3 py-5 rounded-xl bg-gradient-to-r from-[#00f3ff] to-[#9d00ff] text-white font-bold text-lg uppercase tracking-wider hover:shadow-[0_0_30px_rgba(0,243,255,0.5)] hover:-translate-y-1 transition-all duration-300 translate-z-10"
                >
                  Send Message <Send size={22} />
                </button>
              </form>
            </Tilt>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
