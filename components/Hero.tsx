
import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Info } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-[85vh] md:h-[95vh] w-full overflow-hidden">
      {/* Background Billboard with Ken Burns Effect */}
      <div className="absolute inset-0">
        <motion.img 
          initial={{ scale: 1 }}
          animate={{ scale: 1.1 }}
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            repeatType: "reverse", 
            ease: "linear" 
          }}
          src="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=2832" 
          alt="Featured Cinematic Background"
          className="w-full h-full object-cover brightness-[0.5]"
        />
        
        {/* Animated Light Leaks */}
        <motion.div 
          animate={{ 
            x: [-20, 20], 
            y: [-20, 20],
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity, 
            repeatType: "reverse",
            ease: "easeInOut" 
          }}
          className="absolute top-1/4 -left-20 w-96 h-96 bg-red-600/20 rounded-full blur-[120px] pointer-events-none"
        />
        <motion.div 
          animate={{ 
            x: [20, -20], 
            y: [20, -20],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ 
            duration: 12, 
            repeat: Infinity, 
            repeatType: "reverse",
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[150px] pointer-events-none"
        />

        <div className="absolute inset-0 billboard-vignette" />
        <div className="absolute inset-0 billboard-bottom-vignette" />
      </div>

      <div className="relative h-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <div className="flex items-center gap-2 mb-4">
             <div className="w-6 h-6 bg-[#e50914] rounded-sm flex items-center justify-center font-bold text-[10px]">S</div>
             <span className="text-zinc-400 text-xs font-bold uppercase tracking-widest">A Sanjana Original Series</span>
          </div>
          
          <h1 className="text-5xl md:text-8xl font-black mb-6 font-jakarta tracking-tighter drop-shadow-2xl">
            SANJANA VARADE
          </h1>

          <p className="text-lg md:text-xl text-white font-medium mb-8 drop-shadow-lg line-clamp-3 md:line-clamp-none">
            Full-Stack Developer and Blockchain Enthusiast dedicated to building high-performance, secure, and intuitive web applications. Turning complex vision into reality through clean code and innovative architectural design.
          </p>

          <div className="flex items-center gap-3">
            <a 
              href="#" 
              className="px-6 md:px-8 py-2 md:py-3 bg-white text-black font-bold rounded flex items-center gap-3 hover:bg-opacity-80 transition-all text-lg cursor-pointer"
            >
              <FileText className="w-6 h-6" />
              Resume
            </a>
            <a 
              href="#about"
              className="px-6 md:px-8 py-2 md:py-3 bg-zinc-500/50 text-white font-bold rounded flex items-center gap-3 hover:bg-zinc-500/70 transition-all text-lg backdrop-blur-md cursor-pointer"
            >
              <span className="bg-white/20 rounded-full p-1"><Info className="w-4 h-4" /></span>
              More Info
            </a>
          </div>
        </motion.div>
      </div>

      {/* Maturity Rating Badge */}
      <div className="absolute right-0 bottom-32 bg-zinc-800/50 border-l-4 border-zinc-400 py-2 pl-4 pr-12 text-sm font-medium backdrop-blur-sm">
        Seniors '24
      </div>
    </section>
  );
};

export default Hero;
