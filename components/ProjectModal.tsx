
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Play, Plus, ThumbsUp, Check } from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, isOpen, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-0 md:p-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="relative w-full max-w-4xl bg-[#181818] rounded-none md:rounded-xl overflow-y-auto max-h-screen md:max-h-[90vh] shadow-2xl no-scrollbar"
          >
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 z-50 p-2 rounded-full bg-[#181818] text-white hover:bg-white/10"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Header / Banner */}
            <div className="relative h-[300px] md:h-[450px]">
              <img 
                src={project.imageUrl} 
                alt={project.title} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#181818] via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8 md:bottom-12 md:left-12">
                <h3 className="text-4xl md:text-6xl font-black mb-6 font-jakarta tracking-tighter uppercase drop-shadow-xl">{project.title}</h3>
                <div className="flex gap-4">
                  <button className="px-8 py-3 bg-white text-black font-bold rounded flex items-center gap-2 hover:bg-white/90">
                    <Play className="w-5 h-5 fill-black" /> Play Demo
                  </button>
                  <button className="p-3 bg-zinc-800/80 rounded-full border-2 border-zinc-500 text-white hover:border-white">
                    <Plus className="w-5 h-5" />
                  </button>
                  <button className="p-3 bg-zinc-800/80 rounded-full border-2 border-zinc-500 text-white hover:border-white">
                    <ThumbsUp className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Details Content */}
            <div className="p-8 md:p-12">
              <div className="flex flex-col md:flex-row gap-12">
                <div className="w-full md:w-2/3">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-green-500 font-bold">98% Match</span>
                    <span className="text-zinc-400">2024</span>
                    <span className="border border-zinc-500 px-2 py-0.5 text-xs text-zinc-300">S1:E1</span>
                    <span className="text-zinc-300 font-bold border border-zinc-500 px-1 text-[10px]">ULTRA 4K</span>
                  </div>
                  <p className="text-lg text-white mb-8 leading-relaxed">
                    {project.longDescription}
                  </p>
                  
                  <div className="space-y-6">
                    <h4 className="text-2xl font-bold font-jakarta border-b border-zinc-800 pb-2">Episodes</h4>
                    {project.features.map((f, i) => (
                      <div key={i} className="flex gap-6 items-center p-4 hover:bg-[#333] transition-colors rounded-md group">
                        <span className="text-zinc-500 text-2xl font-bold">{i + 1}</span>
                        <div className="flex-1">
                          <h5 className="font-bold text-white mb-1">Feature: {f}</h5>
                          <p className="text-sm text-zinc-400">A detailed implementation of this modular system ensuring high scalability.</p>
                        </div>
                        <span className="text-zinc-400 text-sm hidden md:block">15m</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="w-full md:w-1/3 space-y-4 text-sm">
                   <div>
                     <span className="text-zinc-500">Cast:</span> <span className="text-white">Sanjana Varade, AI, React Native</span>
                   </div>
                   <div>
                     <span className="text-zinc-500">Genres:</span> <span className="text-white">Innovation, Problem Solving, High Performance</span>
                   </div>
                   <div>
                     <span className="text-zinc-500">Stack:</span> 
                     <div className="flex flex-wrap gap-2 mt-2">
                       {project.techStack.map(t => (
                         <span key={t} className="px-2 py-1 bg-zinc-800 rounded text-[10px] text-zinc-300 uppercase font-bold">{t}</span>
                       ))}
                     </div>
                   </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;
