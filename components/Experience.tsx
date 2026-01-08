
import React from 'react';
import { motion } from 'framer-motion';
import { EXPERIENCES } from '../constants';
import { Briefcase } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 bg-zinc-950/50">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-[0.2em] text-purple-500 uppercase mb-4">Trajectory</h2>
          <h3 className="text-4xl font-bold font-jakarta">Career & Education</h3>
        </div>

        <div className="space-y-12">
          {EXPERIENCES.map((exp, idx) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative pl-12 border-l border-zinc-800 pb-4"
            >
              <div className="absolute left-[-21px] top-0 w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-purple-400 shadow-xl">
                <Briefcase className="w-5 h-5" />
              </div>
              
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                <h4 className="text-2xl font-bold font-jakarta">{exp.company}</h4>
                <span className="text-sm font-semibold px-3 py-1 bg-zinc-900 border border-zinc-800 rounded-full text-zinc-400">
                  {exp.period}
                </span>
              </div>
              <h5 className="text-lg text-blue-400 font-semibold mb-3">{exp.role}</h5>
              <p className="text-zinc-500 text-lg leading-relaxed">
                {exp.description}
              </p>
            </motion.div>
          ))}

          {/* Academic Item */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative pl-12 border-l border-zinc-800 pb-4"
          >
             <div className="absolute left-[-21px] top-0 w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-blue-400 shadow-xl">
                <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
              </div>
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                <h4 className="text-2xl font-bold font-jakarta">Bachelor of Technology</h4>
                <span className="text-sm font-semibold px-3 py-1 bg-zinc-900 border border-zinc-800 rounded-full text-zinc-400">
                  2020 - 2024
                </span>
              </div>
              <p className="text-zinc-500 text-lg leading-relaxed">
                Focused on Computer Science & Engineering with a strong emphasis on Decentralized Systems and Algorithms.
              </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
