
import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-[#141414]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2">
             <h2 className="text-xl md:text-3xl font-bold mb-6 text-zinc-200 uppercase tracking-widest">About the Creator</h2>
             <p className="text-xl md:text-2xl text-zinc-400 leading-relaxed mb-8">
               "Sanjana Varade is a software architect who transforms complex requirements into elegant code. With a 99% success rate in high-pressure sprint environments, she is the lead developer recruiters have been waiting for."
             </p>
             <div className="flex gap-12">
               <div>
                 <p className="text-3xl font-bold text-white mb-1">4+</p>
                 <p className="text-zinc-500 uppercase text-xs font-bold tracking-widest">Major Releases</p>
               </div>
               <div>
                 <p className="text-3xl font-bold text-white mb-1">100%</p>
                 <p className="text-zinc-500 uppercase text-xs font-bold tracking-widest">Uptime Delivery</p>
               </div>
               <div>
                 <p className="text-3xl font-bold text-white mb-1">20+</p>
                 <p className="text-zinc-500 uppercase text-xs font-bold tracking-widest">Tech Languages</p>
               </div>
             </div>
          </div>
          <div className="w-full lg:w-1/2">
            <div className="relative aspect-video rounded-lg overflow-hidden shadow-2xl border border-zinc-800 bg-zinc-900 group">
               <img 
                 src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=1976" 
                 alt="Sanjana's Studio"
                 className="w-full h-full object-cover brightness-50 group-hover:scale-105 transition-transform duration-1000"
               />
               <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
                     <div className="w-0 h-0 border-l-[15px] border-l-white border-y-[10px] border-y-transparent ml-2" />
                  </div>
               </div>
               <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center text-xs font-bold text-white uppercase tracking-widest bg-black/40 p-2 backdrop-blur-sm">
                  <span>Development Reel</span>
                  <span>02:45</span>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
