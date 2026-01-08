
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhoIsWatching from './components/WhoIsWatching';
import { AnimatePresence, motion } from 'framer-motion';

const App: React.FC = () => {
  const [view, setView] = useState<'gatekeeper' | 'portfolio'>('gatekeeper');
  const [selectedRole, setSelectedRole] = useState<string>('');

  const handleProfileSelect = (role: string) => {
    setSelectedRole(role);
    // Smooth transition to portfolio
    setTimeout(() => {
      setView('portfolio');
      window.scrollTo(0, 0);
    }, 600);
  };

  return (
    <div className="relative bg-[#141414] min-h-screen text-white overflow-x-hidden">
      <AnimatePresence mode="wait">
        {view === 'gatekeeper' ? (
          <motion.div
            key="gatekeeper"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.1, filter: 'blur(10px)' }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <WhoIsWatching onProfileSelect={handleProfileSelect} />
          </motion.div>
        ) : (
          <motion.div
            key="portfolio"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <Navbar />
            <main>
              <Hero />
              <Projects />
              <About />
              <Experience />
              <Skills />
              <Contact />
            </main>
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
