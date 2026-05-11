import { createContext, useState, useEffect, useContext } from 'react';
import { auth, db } from '../firebase';
import { signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth';
import { doc, getDoc, setDoc, updateDoc } from 'firebase/firestore';

const DataContext = createContext();

export const useData = () => useContext(DataContext);

export const DataProvider = ({ children }) => {
  // --- Initial Data (used if Firestore is empty) ---
  const initialData = {
    skillsCategories: [
      { title: "Programming", color: "from-[#00f3ff] to-blue-600", skills: [{ name: "Python", level: 90 }, { name: "SQL", level: 85 }, { name: "HTML / CSS", level: 85 }, { name: "Java (Basics)", level: 60 }, { name: "Linux (Basics)", level: 65 }, { name: "Vibe Coding", level: 80 }] },
      { title: "Data & AI", color: "from-[#9d00ff] to-pink-500", skills: [{ name: "Power BI", level: 85 }, { name: "Excel Dashboards", level: 90 }, { name: "Data Visualization", level: 85 }, { name: "Data Analysis", level: 80 }] },
      { title: "Core Areas & DB", color: "from-[#00f3ff] to-[#9d00ff]", skills: [{ name: "Cybersecurity Basics", level: 85 }, { name: "Secure Communication", level: 80 }, { name: "AI Prototyping", level: 75 }, { name: "MySQL / DBMS Concepts", level: 80 }] }
    ],
    projects: [
      { title: 'SecureStego (HoloGuard)', subtitle: 'AI-Driven Secure Communication Platform', desc: 'Developed a secure communication system using Steganography and Cryptography. Enabled hidden message transmission inside images for undetectable communication. Applied encryption techniques before embedding sensitive data.', tech: ['Python', 'Cryptography', 'Steganography', 'AI'], github: '#', demo: '#', color: 'from-[#00f3ff] to-[#0055ff]', featured: true },
      { title: 'Shruanvi Events', subtitle: 'Business Website', desc: 'Built a responsive frontend website for an event management brand. Developed service pages, contact forms, and UI animations to enhance user engagement. Deployed using Vercel for high availability.', tech: ['HTML', 'CSS', 'JavaScript', 'Vercel'], github: '#', demo: '#', color: 'from-[#9d00ff] to-[#ff00ff]', featured: false }
    ],
    experience: [
      { type: 'experience', title: 'IT & Cybersecurity Intern', org: 'DigiSuraksha, Bengaluru', date: 'July 2025 – September 2025', desc: 'Assisted in technical documentation, system log analysis, and network traffic analysis using Wireshark. Supported troubleshooting and automation tasks while gaining real-world cybersecurity exposure.' },
      { type: 'leadership', title: 'Vice President', org: 'Centre for Indian Knowledge Systems (IKS)', date: '2025 – Present', desc: 'Organized inter-college seminars, workshops, and awareness programs. Managed communication, scheduling, and documentation, developing strong leadership and public speaking skills.' },
      { type: 'education', title: 'Bachelor of Computer Applications (BCA)', org: 'Christ Academy Institute for Advanced Studies, Bengaluru', date: '2023 – 2026', desc: 'Core studies in computer applications, programming, and cybersecurity basics. Achieved an 82% score and actively participated in national-level conferences.' }
    ],
    certs: [
      "BCA Score: 82% (Christ Academy)",
      "2nd Prize in Hackathon",
      "Google for Startups – Startup School: Prompt to Prototype",
      "PwC Cybersecurity Simulation – Threat Analysis & Incident Response",
      "Deloitte Cybersecurity Simulation – Risk & Vulnerability Management",
      "Cyber Security Virtual Internship",
      "IoT / OT Hacking & Defensive Security"
    ]
  };

  const [data, setData] = useState(initialData);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  // --- Initialize Firebase Data and Auth ---
  useEffect(() => {
    const docRef = doc(db, 'portfolio', 'data');

    // Auth Listener
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsAuthenticated(!!user);
    });

    // Fetch Data
    const fetchData = async () => {
      try {
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setData(docSnap.data());
        } else {
          // Document doesn't exist, let's create it with initial data!
          await setDoc(docRef, initialData);
        }
      } catch (error) {
        console.error("Error fetching Firestore data. Make sure Firebase is configured properly:", error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchData();

    return () => unsubscribe();
  }, []);

  // --- Auth Mutators ---
  const login = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  };

  const logout = () => signOut(auth);

  // --- Data Mutators ---
  const updateFirebase = async (newData) => {
    setData(newData); // Optimistic UI update
    try {
      const docRef = doc(db, 'portfolio', 'data');
      await updateDoc(docRef, newData);
    } catch (err) {
      console.error("Error updating Firestore:", err);
    }
  };

  const addSkill = (catIdx, newSkill) => {
    const updatedCategories = [...data.skillsCategories];
    updatedCategories[catIdx].skills.push(newSkill);
    updateFirebase({ ...data, skillsCategories: updatedCategories });
  };
  
  const deleteSkill = (catIdx, skillIdx) => {
    const updatedCategories = [...data.skillsCategories];
    updatedCategories[catIdx].skills.splice(skillIdx, 1);
    updateFirebase({ ...data, skillsCategories: updatedCategories });
  };

  const addProject = (newProject) => updateFirebase({ ...data, projects: [...data.projects, newProject] });
  const deleteProject = (idx) => updateFirebase({ ...data, projects: data.projects.filter((_, i) => i !== idx) });

  const addExperience = (newExp) => updateFirebase({ ...data, experience: [newExp, ...data.experience] });
  const deleteExperience = (idx) => updateFirebase({ ...data, experience: data.experience.filter((_, i) => i !== idx) });

  const addCert = (newCert) => updateFirebase({ ...data, certs: [...data.certs, newCert] });
  const deleteCert = (idx) => updateFirebase({ ...data, certs: data.certs.filter((_, i) => i !== idx) });

  return (
    <DataContext.Provider value={{ 
      loading, isAuthenticated, login, logout,
      skillsCategories: data.skillsCategories, addSkill, deleteSkill,
      projects: data.projects, addProject, deleteProject,
      experience: data.experience, addExperience, deleteExperience,
      certs: data.certs, addCert, deleteCert
    }}>
      {children}
    </DataContext.Provider>
  );
};
