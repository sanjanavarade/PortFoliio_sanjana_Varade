
import React from 'react';
import { motion } from 'framer-motion';
import { SKILL_GROUPS } from '../constants';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 bg-zinc-950/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-[0.2em] text-indigo-500 uppercase mb-4">Expertise</h2>
          <h3 className="text-4xl font-bold font-jakarta">Mastered Technologies</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SKILL_GROUPS.map((group, groupIdx) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: groupIdx * 0.1 }}
              className="p-8 rounded-3xl bg-zinc-900/30 border border-zinc-800/50 hover:border-zinc-700/50 transition-all group"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-xl bg-zinc-800 group-hover:bg-zinc-700 transition-colors">
                  {group.icon}
                </div>
                <h4 className="text-xl font-bold font-jakarta">{group.category}</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span 
                    key={skill}
                    className="px-3 py-1.5 rounded-lg bg-zinc-800/50 text-zinc-400 text-sm font-medium hover:text-white hover:bg-zinc-800 transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
