import React from 'react';
import { Terminal, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-12 border-t border-white/5 bg-slate-950">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Logo */}
          <div className="flex items-center gap-2 group cursor-pointer">
            <Terminal className="text-primary w-5 h-5" />
            <span className="text-lg font-bold tracking-tighter text-white">
              LONG<span className="text-primary">.TECH</span>
            </span>
          </div>

          {/* Quick Links */}
          <div className="flex gap-8 text-sm font-medium text-slate-500">
            <a href="#about" className="hover:text-primary transition-colors">About</a>
            <a href="#projects" className="hover:text-primary transition-colors">Projects</a>
            <a href="#blog" className="hover:text-primary transition-colors">Blog</a>
            <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
          </div>

          {/* Copyright */}
          <div className="text-sm text-slate-500 text-center">
            <p>&copy; {new Date().getFullYear()} Long Tech Portfolio. All rights reserved.</p>
            <p className="flex items-center justify-center gap-1 mt-1 text-[10px] uppercase tracking-widest">
              Built with <Heart className="w-2 h-2 text-red-500 fill-red-500" /> by Antigravity AI
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
