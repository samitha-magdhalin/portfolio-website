import { useState } from 'react';
import { useData } from '../context/DataContext';
import { Link } from 'react-router-dom';
import { Trash2, Plus, ArrowLeft, Lock, LogOut, Code, Briefcase, Award, Shield, Loader } from 'lucide-react';

const AdminDashboard = () => {
  const { 
    loading, isAuthenticated, login, logout,
    skillsCategories, addSkill, deleteSkill,
    projects, addProject, deleteProject,
    experience, addExperience, deleteExperience,
    certs, addCert, deleteCert
  } = useData();
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [activeTab, setActiveTab] = useState('skills');

  // Form states
  const [newSkill, setNewSkill] = useState({ name: '', level: 50 });
  const [selectedCategory, setSelectedCategory] = useState(0);
  
  const [newProject, setNewProject] = useState({ title: '', subtitle: '', desc: '', tech: '', github: '', demo: '', featured: false });
  const [newExp, setNewExp] = useState({ type: 'experience', title: '', org: '', date: '', desc: '' });
  const [newCert, setNewCert] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    const success = await login(email, password);
    if (!success) setError('Invalid email or password. Please try again.');
  };

  const handleAddSkill = (e) => {
    e.preventDefault();
    if (!newSkill.name) return;
    addSkill(selectedCategory, { name: newSkill.name, level: parseInt(newSkill.level) });
    setNewSkill({ name: '', level: 50 });
  };

  const handleAddProject = (e) => {
    e.preventDefault();
    if (!newProject.title) return;
    addProject({
      ...newProject,
      tech: newProject.tech.split(',').map(t => t.trim()),
      color: 'from-[#00f3ff] to-[#9d00ff]'
    });
    setNewProject({ title: '', subtitle: '', desc: '', tech: '', github: '', demo: '', featured: false });
  };

  const handleAddExp = (e) => {
    e.preventDefault();
    if (!newExp.title) return;
    addExperience(newExp);
    setNewExp({ type: 'experience', title: '', org: '', date: '', desc: '' });
  };

  const handleAddCert = (e) => {
    e.preventDefault();
    if (!newCert) return;
    addCert(newCert);
    setNewCert('');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#050505] flex items-center justify-center">
        <Loader className="w-10 h-10 text-[#00f3ff] animate-spin" />
      </div>
    )
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#050505] flex items-center justify-center p-6">
        <div className="glass-card p-8 max-w-md w-full relative overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#9d00ff]/20 to-transparent rounded-bl-full pointer-events-none" />
          <div className="text-center mb-8 relative z-10">
             <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#111] to-[#222] border border-white/10 flex items-center justify-center text-[#9d00ff] mx-auto mb-4 shadow-[0_0_15px_rgba(157,0,255,0.3)]"><Lock size={28} /></div>
             <h2 className="text-2xl font-bold text-white tracking-wide">Firebase Admin</h2>
             <p className="text-gray-400 text-sm mt-2">Enter your Firebase Auth credentials</p>
          </div>
          <form onSubmit={handleLogin} className="space-y-5 relative z-10">
            <div>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl px-5 py-4 text-white focus:border-[#00f3ff] focus:shadow-[0_0_10px_rgba(0,243,255,0.2)] focus:outline-none transition-all" placeholder="Email Address" required />
            </div>
            <div>
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl px-5 py-4 text-white focus:border-[#9d00ff] focus:shadow-[0_0_10px_rgba(157,0,255,0.2)] focus:outline-none transition-all" placeholder="Password" required />
            </div>
            {error && <p className="text-red-400 text-sm font-medium bg-red-400/10 p-3 rounded-lg border border-red-400/20">{error}</p>}
            <button type="submit" className="w-full py-4 rounded-xl bg-gradient-to-r from-[#00f3ff] to-[#9d00ff] text-white font-bold tracking-wider uppercase hover:shadow-[0_0_20px_rgba(157,0,255,0.4)] hover:-translate-y-1 transition-all duration-300">Login to Admin</button>
          </form>
          <div className="mt-8 text-center relative z-10">
            <Link to="/" className="inline-flex items-center gap-2 text-gray-500 hover:text-[#00f3ff] text-sm font-medium transition-colors"><ArrowLeft size={16} /> Back to Portfolio</Link>
          </div>
        </div>
      </div>
    );
  }

  const tabs = [
    { id: 'skills', label: 'Skills', icon: <Shield size={18} /> },
    { id: 'projects', label: 'Projects', icon: <Code size={18} /> },
    { id: 'experience', label: 'Experience', icon: <Briefcase size={18} /> },
    { id: 'certs', label: 'Certifications', icon: <Award size={18} /> },
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-white flex flex-col md:flex-row">
      {/* Sidebar */}
      <div className="w-full md:w-64 bg-[#111] border-r border-white/10 flex flex-col">
        <div className="p-6 border-b border-white/10">
          <Link to="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-[#00f3ff] transition-colors text-sm font-semibold uppercase tracking-wider"><ArrowLeft size={16} /> Portfolio</Link>
          <h1 className="text-2xl font-bold mt-4">Admin <span className="text-gradient">Panel</span></h1>
        </div>
        <div className="p-4 flex-grow space-y-2">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors font-medium ${activeTab === tab.id ? 'bg-[#00f3ff]/10 text-[#00f3ff]' : 'text-gray-400 hover:bg-white/5 hover:text-white'}`}
            >
              {tab.icon} {tab.label}
            </button>
          ))}
        </div>
        <div className="p-4 border-t border-white/10">
          <button onClick={logout} className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-red-500/10 text-red-400 border border-red-500/20 rounded-lg hover:bg-red-500/20 transition-colors font-medium">
            <LogOut size={18} /> Logout
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-grow p-6 md:p-10 max-h-screen overflow-y-auto">
        <div className="max-w-5xl mx-auto">

          {/* SKILLS TAB */}
          {activeTab === 'skills' && (
            <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-1 glass-card p-6 sticky top-0 h-fit">
                <h2 className="text-xl font-bold mb-6 flex items-center gap-2"><Plus size={20} className="text-[#00f3ff]" /> Add Skill</h2>
                <form onSubmit={handleAddSkill} className="space-y-4">
                  <select value={selectedCategory} onChange={(e) => setSelectedCategory(parseInt(e.target.value))} className="w-full bg-[#111] border border-white/10 rounded-lg px-4 py-3 text-white focus:border-[#00f3ff] focus:outline-none">
                    {skillsCategories.map((cat, idx) => <option key={idx} value={idx}>{cat.title}</option>)}
                  </select>
                  <input type="text" required value={newSkill.name} onChange={(e) => setNewSkill({...newSkill, name: e.target.value})} className="w-full bg-[#111] border border-white/10 rounded-lg px-4 py-3 text-white focus:border-[#00f3ff] focus:outline-none" placeholder="Skill Name" />
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">Proficiency ({newSkill.level}%)</label>
                    <input type="range" min="0" max="100" value={newSkill.level} onChange={(e) => setNewSkill({...newSkill, level: e.target.value})} className="w-full accent-[#00f3ff]" />
                  </div>
                  <button type="submit" className="w-full py-3 rounded-lg bg-gradient-to-r from-[#00f3ff] to-[#9d00ff] text-white font-bold hover:shadow-[0_0_15px_rgba(0,243,255,0.4)]">Add Skill</button>
                </form>
              </div>
              <div className="md:col-span-2 space-y-6">
                {skillsCategories.map((category, catIdx) => (
                  <div key={catIdx} className="glass-card p-6">
                    <h3 className={`text-lg font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r ${category.color}`}>{category.title}</h3>
                    <div className="space-y-2">
                      {category.skills.map((skill, skillIdx) => (
                        <div key={skillIdx} className="flex justify-between items-center bg-[#111] border border-white/5 p-3 rounded-lg">
                          <span className="font-semibold text-gray-300 w-1/3">{skill.name}</span>
                          <span className="text-xs text-gray-500">{skill.level}%</span>
                          <button onClick={() => deleteSkill(catIdx, skillIdx)} className="text-gray-500 hover:text-red-500"><Trash2 size={16} /></button>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* PROJECTS TAB */}
          {activeTab === 'projects' && (
            <div className="grid md:grid-cols-2 gap-8">
              <div className="glass-card p-6 h-fit">
                <h2 className="text-xl font-bold mb-6 flex items-center gap-2"><Plus size={20} className="text-[#00f3ff]" /> Add Project</h2>
                <form onSubmit={handleAddProject} className="space-y-4">
                  <input type="text" required value={newProject.title} onChange={(e) => setNewProject({...newProject, title: e.target.value})} className="w-full bg-[#111] border border-white/10 rounded-lg px-4 py-3 text-white focus:border-[#00f3ff] focus:outline-none" placeholder="Project Title" />
                  <input type="text" required value={newProject.subtitle} onChange={(e) => setNewProject({...newProject, subtitle: e.target.value})} className="w-full bg-[#111] border border-white/10 rounded-lg px-4 py-3 text-white focus:border-[#00f3ff] focus:outline-none" placeholder="Subtitle / Short desc" />
                  <textarea required value={newProject.desc} onChange={(e) => setNewProject({...newProject, desc: e.target.value})} className="w-full bg-[#111] border border-white/10 rounded-lg px-4 py-3 text-white focus:border-[#00f3ff] focus:outline-none" placeholder="Detailed Description"></textarea>
                  <input type="text" required value={newProject.tech} onChange={(e) => setNewProject({...newProject, tech: e.target.value})} className="w-full bg-[#111] border border-white/10 rounded-lg px-4 py-3 text-white focus:border-[#00f3ff] focus:outline-none" placeholder="Tech Stack (comma separated)" />
                  <div className="flex gap-4">
                    <input type="text" value={newProject.github} onChange={(e) => setNewProject({...newProject, github: e.target.value})} className="w-full bg-[#111] border border-white/10 rounded-lg px-4 py-3 text-white focus:border-[#00f3ff] focus:outline-none" placeholder="GitHub URL" />
                    <input type="text" value={newProject.demo} onChange={(e) => setNewProject({...newProject, demo: e.target.value})} className="w-full bg-[#111] border border-white/10 rounded-lg px-4 py-3 text-white focus:border-[#00f3ff] focus:outline-none" placeholder="Demo URL" />
                  </div>
                  <label className="flex items-center gap-2 text-gray-400">
                    <input type="checkbox" checked={newProject.featured} onChange={(e) => setNewProject({...newProject, featured: e.target.checked})} />
                    Featured Project
                  </label>
                  <button type="submit" className="w-full py-3 rounded-lg bg-gradient-to-r from-[#00f3ff] to-[#9d00ff] text-white font-bold hover:shadow-[0_0_15px_rgba(0,243,255,0.4)]">Add Project</button>
                </form>
              </div>
              <div className="space-y-4">
                {projects.map((project, idx) => (
                  <div key={idx} className="glass-card p-5 relative group">
                    <button onClick={() => deleteProject(idx)} className="absolute top-4 right-4 text-gray-500 hover:text-red-500"><Trash2 size={18} /></button>
                    <h3 className="font-bold text-white text-lg">{project.title}</h3>
                    <p className="text-gray-400 text-sm mt-1">{project.subtitle}</p>
                    <div className="flex flex-wrap gap-2 mt-3">
                      {project.tech.map((t, i) => <span key={i} className="text-xs px-2 py-1 bg-white/5 rounded text-gray-300">{t}</span>)}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* EXPERIENCE TAB */}
          {activeTab === 'experience' && (
            <div className="grid md:grid-cols-2 gap-8">
              <div className="glass-card p-6 h-fit">
                <h2 className="text-xl font-bold mb-6 flex items-center gap-2"><Plus size={20} className="text-[#00f3ff]" /> Add Experience</h2>
                <form onSubmit={handleAddExp} className="space-y-4">
                  <select value={newExp.type} onChange={(e) => setNewExp({...newExp, type: e.target.value})} className="w-full bg-[#111] border border-white/10 rounded-lg px-4 py-3 text-white focus:border-[#00f3ff] focus:outline-none">
                    <option value="experience">Experience</option>
                    <option value="leadership">Leadership</option>
                    <option value="education">Education</option>
                  </select>
                  <input type="text" required value={newExp.title} onChange={(e) => setNewExp({...newExp, title: e.target.value})} className="w-full bg-[#111] border border-white/10 rounded-lg px-4 py-3 text-white focus:border-[#00f3ff] focus:outline-none" placeholder="Title (e.g. Intern)" />
                  <input type="text" required value={newExp.org} onChange={(e) => setNewExp({...newExp, org: e.target.value})} className="w-full bg-[#111] border border-white/10 rounded-lg px-4 py-3 text-white focus:border-[#00f3ff] focus:outline-none" placeholder="Organization" />
                  <input type="text" required value={newExp.date} onChange={(e) => setNewExp({...newExp, date: e.target.value})} className="w-full bg-[#111] border border-white/10 rounded-lg px-4 py-3 text-white focus:border-[#00f3ff] focus:outline-none" placeholder="Date (e.g. 2024 - Present)" />
                  <textarea required value={newExp.desc} onChange={(e) => setNewExp({...newExp, desc: e.target.value})} className="w-full bg-[#111] border border-white/10 rounded-lg px-4 py-3 text-white focus:border-[#00f3ff] focus:outline-none" placeholder="Description"></textarea>
                  <button type="submit" className="w-full py-3 rounded-lg bg-gradient-to-r from-[#00f3ff] to-[#9d00ff] text-white font-bold hover:shadow-[0_0_15px_rgba(0,243,255,0.4)]">Add Experience</button>
                </form>
              </div>
              <div className="space-y-4">
                {experience.map((exp, idx) => (
                  <div key={idx} className="glass-card p-5 relative group">
                    <button onClick={() => deleteExperience(idx)} className="absolute top-4 right-4 text-gray-500 hover:text-red-500"><Trash2 size={18} /></button>
                    <span className="text-xs font-bold text-[#00f3ff] uppercase">{exp.date}</span>
                    <h3 className="font-bold text-white text-lg mt-1">{exp.title}</h3>
                    <h4 className="text-gray-400 text-sm">{exp.org}</h4>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* CERTS TAB */}
          {activeTab === 'certs' && (
            <div className="max-w-2xl mx-auto glass-card p-8">
              <h2 className="text-xl font-bold mb-6 flex items-center gap-2"><Award size={20} className="text-[#00f3ff]" /> Manage Certifications</h2>
              <form onSubmit={handleAddCert} className="flex gap-4 mb-8">
                <input type="text" required value={newCert} onChange={(e) => setNewCert(e.target.value)} className="flex-grow bg-[#111] border border-white/10 rounded-lg px-4 py-3 text-white focus:border-[#00f3ff] focus:outline-none" placeholder="Certification Name" />
                <button type="submit" className="px-6 rounded-lg bg-gradient-to-r from-[#00f3ff] to-[#9d00ff] text-white font-bold hover:shadow-[0_0_15px_rgba(0,243,255,0.4)]">Add</button>
              </form>
              <div className="space-y-2">
                {certs.map((cert, idx) => (
                  <div key={idx} className="flex items-center justify-between bg-[#111] border border-white/5 p-4 rounded-lg">
                    <span className="text-gray-300 font-medium">{cert}</span>
                    <button onClick={() => deleteCert(idx)} className="text-gray-500 hover:text-red-500"><Trash2 size={18} /></button>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
