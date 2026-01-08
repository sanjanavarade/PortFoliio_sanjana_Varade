
import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { PROJECTS } from '../constants';
import { Project } from '../types';
import ProjectModal from './ProjectModal';
import { ChevronLeft, ChevronRight, Play, Plus, ThumbsUp } from 'lucide-react';

const ProjectCard: React.FC<{ project: Project; onClick: () => void }> = ({ project, onClick }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.1, zIndex: 10, y: -20 }}
      transition={{ duration: 0.3 }}
      onClick={onClick}
      className="relative flex-shrink-0 w-64 md:w-80 h-36 md:h-44 rounded-md overflow-hidden cursor-pointer group bg-zinc-900"
    >
      <img 
        src={project.imageUrl} 
        alt={project.title}
        className="w-full h-full object-cover group-hover:opacity-50 transition-opacity"
      />
      
      {/* Hover Content */}
      <div className="absolute inset-0 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-t from-black via-transparent to-transparent">
        <div className="flex gap-2 mb-3">
          <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-black">
            <Play className="w-4 h-4 fill-black ml-0.5" />
          </div>
          <div className="w-8 h-8 rounded-full border border-zinc-500 bg-zinc-800/50 flex items-center justify-center text-white hover:border-white">
            <Plus className="w-4 h-4" />
          </div>
          <div className="w-8 h-8 rounded-full border border-zinc-500 bg-zinc-800/50 flex items-center justify-center text-white hover:border-white">
            <ThumbsUp className="w-4 h-4" />
          </div>
        </div>
        <div className="flex items-center gap-2 mb-1">
          <span className="text-green-500 text-xs font-bold">98% Match</span>
          <span className="border border-zinc-500 px-1 text-[8px] text-zinc-300">HD</span>
        </div>
        <h4 className="text-sm font-bold text-white mb-1">{project.title}</h4>
        <div className="flex flex-wrap gap-x-2 gap-y-0 text-[10px] text-zinc-400">
           {project.techStack.slice(0, 3).map((t, i) => (
             <span key={t}>
               {t}{i < project.techStack.slice(0, 3).length - 1 && " •"}
             </span>
           ))}
        </div>
      </div>
    </motion.div>
  );
};

const Row: React.FC<{ title: string; projects: Project[]; onProjectSelect: (p: Project) => void }> = ({ title, projects, onProjectSelect }) => {
  const rowRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (rowRef.current) {
      const { scrollLeft, clientWidth } = rowRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      rowRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative group/row mb-12">
      <h3 className="text-xl md:text-2xl font-bold mb-4 px-6 md:px-12 text-zinc-200">{title}</h3>
      
      <div className="relative">
        <button 
          onClick={() => scroll('left')}
          className="absolute left-0 top-0 bottom-0 z-40 bg-black/40 w-12 opacity-0 group-hover/row:opacity-100 transition-opacity hidden md:flex items-center justify-center"
        >
          <ChevronLeft className="w-8 h-8" />
        </button>

        <div 
          ref={rowRef}
          className="flex gap-2 overflow-x-auto no-scrollbar netflix-row px-6 md:px-12 scroll-px-6 md:scroll-px-12 pb-8"
        >
          {projects.map((p) => (
            <ProjectCard key={p.id} project={p} onClick={() => onProjectSelect(p)} />
          ))}
        </div>

        <button 
          onClick={() => scroll('right')}
          className="absolute right-0 top-0 bottom-0 z-40 bg-black/40 w-12 opacity-0 group-hover/row:opacity-100 transition-opacity hidden md:flex items-center justify-center"
        >
          <ChevronRight className="w-8 h-8" />
        </button>
      </div>
    </div>
  );
};

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-12 bg-[#141414] -mt-16 relative z-10">
      <Row title="Trending Now" projects={PROJECTS.slice(0, 3)} onProjectSelect={setSelectedProject} />
      <Row title="New Releases" projects={PROJECTS.slice(3)} onProjectSelect={setSelectedProject} />
      <Row title="Series I've Worked On" projects={[...PROJECTS].reverse()} onProjectSelect={setSelectedProject} />

      <ProjectModal 
        project={selectedProject} 
        isOpen={!!selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </section>
  );
};

export default Projects;
