
import React from 'react';
import { motion } from 'framer-motion';
import { Send, MapPin, Mail, Phone } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-gradient-to-br from-zinc-900 to-black border border-zinc-800 rounded-[3rem] overflow-hidden p-8 md:p-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-sm font-bold tracking-[0.2em] text-blue-500 uppercase mb-4">Connect</h2>
              <h3 className="text-5xl font-bold font-jakarta mb-8 leading-tight">Let's build something <span className="text-zinc-500 italic">impactful</span> together.</h3>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4 text-zinc-400">
                  <div className="w-12 h-12 rounded-2xl bg-zinc-800 flex items-center justify-center">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest font-bold text-zinc-600">Email Me</p>
                    <p className="text-lg font-medium text-white">sanjana.varade@email.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-zinc-400">
                  <div className="w-12 h-12 rounded-2xl bg-zinc-800 flex items-center justify-center">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest font-bold text-zinc-600">Location</p>
                    <p className="text-lg font-medium text-white">Pune, Maharashtra, India</p>
                  </div>
                </div>
              </div>
            </div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-zinc-950/50 p-8 rounded-3xl border border-zinc-800/50 shadow-2xl"
            >
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-zinc-500 uppercase ml-2">Name</label>
                    <input 
                      type="text" 
                      placeholder="John Doe"
                      className="w-full px-6 py-4 bg-zinc-900 border border-zinc-800 rounded-2xl focus:border-blue-500 outline-none transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-zinc-500 uppercase ml-2">Email</label>
                    <input 
                      type="email" 
                      placeholder="john@example.com"
                      className="w-full px-6 py-4 bg-zinc-900 border border-zinc-800 rounded-2xl focus:border-blue-500 outline-none transition-all"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-zinc-500 uppercase ml-2">Message</label>
                  <textarea 
                    rows={4}
                    placeholder="Tell me about your project..."
                    className="w-full px-6 py-4 bg-zinc-900 border border-zinc-800 rounded-2xl focus:border-blue-500 outline-none transition-all resize-none"
                  />
                </div>
                <button 
                  type="submit"
                  className="w-full py-5 bg-white text-black font-extrabold rounded-2xl flex items-center justify-center gap-3 hover:bg-zinc-200 transition-all shadow-lg"
                >
                  Send Message
                  <Send className="w-5 h-5" />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
