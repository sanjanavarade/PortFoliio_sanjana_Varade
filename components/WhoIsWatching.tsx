
import React from 'react';
import { motion } from 'framer-motion';
import { User, Code, Eye, Compass } from 'lucide-react';

interface Profile {
  id: string;
  name: string;
  color: string;
  icon: React.ReactNode;
}

const PROFILES: Profile[] = [
  {
    id: 'recruiter',
    name: 'Recruiter',
    color: '#00a8e1', // Blue
    icon: <User className="w-16 h-16 md:w-20 md:h-20 text-white opacity-90" />,
  },
  {
    id: 'developer',
    name: 'Developer',
    color: '#a9a9a9', // Gray
    icon: <Code className="w-16 h-16 md:w-20 md:h-20 text-white opacity-90" />,
  },
  {
    id: 'stalker',
    name: 'Stalker',
    color: '#e50914', // Netflix Red
    icon: <Eye className="w-16 h-16 md:w-20 md:h-20 text-white opacity-90" />,
  },
  {
    id: 'adventurer',
    name: 'Adventurer',
    color: '#f5c518', // Yellow
    icon: <Compass className="w-16 h-16 md:w-20 md:h-20 text-white opacity-90" />,
  },
];

interface WhoIsWatchingProps {
  onProfileSelect: (id: string) => void;
}

const WhoIsWatching: React.FC<WhoIsWatchingProps> = ({ onProfileSelect }) => {
  return (
    <div className="fixed inset-0 bg-[#141414] z-[300] flex flex-col items-center justify-center p-4">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-white text-3xl md:text-5xl font-medium mb-8 md:mb-12 font-jakarta tracking-wide text-center"
      >
        Who's watching?
      </motion.h1>

      <div className="flex flex-wrap justify-center gap-4 md:gap-8 max-w-5xl">
        {PROFILES.map((profile, idx) => (
          <ProfileCard
            key={profile.id}
            profile={profile}
            index={idx}
            onClick={() => onProfileSelect(profile.id)}
          />
        ))}
      </div>

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="mt-16 px-6 py-2 border border-zinc-600 text-zinc-500 uppercase tracking-[0.2em] text-sm md:text-base hover:text-white hover:border-white transition-all duration-300"
      >
        Manage Profiles
      </motion.button>
    </div>
  );
};

interface ProfileCardProps {
  profile: Profile;
  index: number;
  onClick: () => void;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ profile, index, onClick }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
      className="group flex flex-col items-center cursor-pointer w-32 md:w-40 lg:w-48"
      onClick={onClick}
    >
      <div className="relative w-full aspect-square rounded overflow-hidden mb-4 transition-all duration-300">
        {/* Animated Background on Hover */}
        <motion.div
          className="absolute inset-0 z-0 transition-all duration-300 border-[3px] border-transparent group-hover:border-white rounded"
          style={{ backgroundColor: profile.color }}
        />
        
        {/* Profile Icon */}
        <div className="relative z-10 w-full h-full flex items-center justify-center">
          {profile.icon}
        </div>
      </div>
      
      <span className="text-zinc-500 group-hover:text-white text-base md:text-lg lg:text-xl font-normal transition-colors duration-300 text-center">
        {profile.name}
      </span>
    </motion.div>
  );
};

export default WhoIsWatching;
