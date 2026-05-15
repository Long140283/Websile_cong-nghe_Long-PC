import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Download, Sparkles } from 'lucide-react';

const HeroSection = () => {
  const roles = ["Python Developer", "AI Automation Engineer", "Tech Specialist"];
  
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Decorative Elements */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-primary/20 rounded-full blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-1/4 -right-20 w-72 h-72 bg-highlight/20 rounded-full blur-[120px] animate-pulse delay-700"></div>

      <div className="container mx-auto px-6 relative z-10 text-center md:text-left grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-accent text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            <span>Welcome to my Tech Universe</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
            I'm <span className="bg-gradient-to-r from-primary via-accent to-highlight bg-clip-text text-transparent">Long</span>
          </h1>
          
          <div className="h-12 mb-8">
            <motion.p 
              className="text-xl md:text-2xl text-slate-400 font-mono"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              &gt; <TypingText text={roles} />
            </motion.p>
          </div>

          <p className="text-slate-400 text-lg mb-10 max-w-lg mx-auto md:mx-0">
            Biến ý tưởng thành hiện thực thông qua Python, AI và Automation. 
            Xây dựng các giải pháp thông minh để tối ưu hóa hiệu suất công việc.
          </p>

          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <button className="px-8 py-4 bg-primary text-white rounded-xl font-bold flex items-center gap-2 hover:scale-105 transition-transform neon-blue group">
              View My Work
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 glass text-white rounded-xl font-bold flex items-center gap-2 hover:bg-white/10 transition-colors">
              <Download className="w-5 h-5" />
              Resume
            </button>
          </div>
        </motion.div>

        {/* Visual Element / Placeholder for Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative hidden md:block"
        >
          <div className="relative w-full aspect-square max-w-md mx-auto">
            {/* Animated Rings */}
            <div className="absolute inset-0 border-2 border-primary/20 rounded-full animate-[spin_10s_linear_infinite]"></div>
            <div className="absolute inset-4 border-2 border-accent/20 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
            
            {/* Center Piece */}
            <div className="absolute inset-12 glass rounded-full flex items-center justify-center neon-blue">
               <div className="text-center">
                  <div className="text-6xl mb-2">🚀</div>
                  <div className="text-sm font-mono text-primary animate-pulse">SYSTEM ACTIVE</div>
               </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const TypingText = ({ text }) => {
  const [index, setIndex] = React.useState(0);
  const [subIndex, setSubIndex] = React.useState(0);
  const [reverse, setReverse] = React.useState(false);

  // typeWriter effect
  React.useEffect(() => {
    if (subIndex === text[index].length + 1 && !reverse) {
      setTimeout(() => setReverse(true), 2000);
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % text.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, Math.max(reverse ? 50 : 100, parseInt(Math.random() * 150)));

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, text]);

  return (
    <span>
      {`${text[index].substring(0, subIndex)}${reverse ? "|" : "_"}`}
    </span>
  );
};

export default HeroSection;
