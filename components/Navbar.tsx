
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { NAV_LINKS } from '../constants';
import { Search, Bell, User } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-[100] transition-colors duration-500 py-4 px-4 md:px-12 flex items-center justify-between ${
        isScrolled ? 'bg-[#141414]' : 'bg-transparent'
      }`}
    >
      <div className="flex items-center gap-6 md:gap-12">
        <a 
          href="#home"
          className="text-2xl md:text-3xl font-extrabold text-[#e50914] font-jakarta tracking-tighter"
        >
          SANJANA
        </a>
        
        <div className="hidden lg:flex items-center gap-5">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-normal text-zinc-200 hover:text-zinc-400 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <span className="text-sm font-normal text-zinc-200 cursor-pointer hover:text-zinc-400">My List</span>
        </div>
      </div>

      <div className="flex items-center gap-5 text-white">
        <Search className="w-5 h-5 cursor-pointer hover:scale-110 transition-transform hidden sm:block" />
        <Bell className="w-5 h-5 cursor-pointer hover:scale-110 transition-transform hidden sm:block" />
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="w-8 h-8 rounded bg-blue-600 flex items-center justify-center">
            <User className="w-5 h-5" />
          </div>
          <div className="w-0 h-0 border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent border-t-[5px] border-t-white group-hover:rotate-180 transition-transform" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
