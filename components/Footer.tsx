
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-zinc-500 text-sm">
          © {new Date().getFullYear()} Sanjana Varade. Built with passion & Next.js/React.
        </p>
        <div className="flex gap-8">
          <a href="#" className="text-zinc-500 hover:text-white transition-colors text-sm">Twitter</a>
          <a href="#" className="text-zinc-500 hover:text-white transition-colors text-sm">Github</a>
          <a href="#" className="text-zinc-500 hover:text-white transition-colors text-sm">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
