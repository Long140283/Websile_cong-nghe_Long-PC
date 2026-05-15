import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Terminal, Sparkles } from 'lucide-react';

const HeroSection = () => {
  const [text, setText] = useState('');
  const fullText = "Python, AI & Automation_";
  
  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) i = 0;
    }, 150);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-[100px] animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-highlight/10 rounded-full blur-[120px] animate-float"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold mb-8">
              <Sparkles className="w-3 h-3" />
              <span>Available for New Projects</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-black text-white mb-6 tracking-tighter leading-none">
              I'm <span className="text-gradient">Long</span>
            </h1>
            
            <div className="h-12 mb-8">
              <span className="text-2xl md:text-3xl font-mono text-slate-400">
                &gt; {text}
              </span>
            </div>

            <p className="text-slate-400 text-lg md:text-xl mb-12 max-w-lg leading-relaxed">
              Biến ý tưởng thành hiện thực thông qua Python và AI. 
              Xây dựng các giải pháp thông minh để tối ưu hóa hiệu suất công việc của bạn.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-4 bg-primary text-white rounded-2xl font-bold flex items-center gap-2 hover:scale-105 transition-all neon-glow group">
                View My Work
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 glass rounded-2xl text-white font-bold flex items-center gap-2 hover:bg-white/10 transition-all">
                <Download className="w-5 h-5" />
                Resume
              </button>
            </div>
          </motion.div>

          {/* Right Visual (Abstract Tech) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="hidden lg:block relative"
          >
            <div className="relative w-full aspect-square flex items-center justify-center">
               {/* Animated Rings */}
               <div className="absolute inset-0 border border-white/5 rounded-full animate-slow-spin"></div>
               <div className="absolute inset-10 border border-primary/10 rounded-full animate-slow-spin [animation-direction:reverse]"></div>
               <div className="absolute inset-20 border border-highlight/5 rounded-full animate-slow-spin"></div>
               
               {/* Center Icon */}
               <div className="w-40 h-40 glass rounded-3xl flex flex-col items-center justify-center border border-white/10 shadow-2xl animate-float">
                  <Terminal className="w-16 h-16 text-primary mb-4" />
                  <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">System Active</span>
               </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
