import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Terminal, ArrowUpRight } from 'lucide-react';

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative bg-slate-900/40 rounded-[32px] border border-white/5 overflow-hidden hover:border-primary/30 transition-all duration-500"
    >
      {/* Image Container */}
      <div className="aspect-[16/10] overflow-hidden relative">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
        
        {/* Hover Overlay Buttons */}
        <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
          <a 
            href={project.link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-4 bg-primary text-white rounded-2xl hover:scale-110 transition-transform shadow-xl shadow-primary/20"
          >
            <Terminal className="w-5 h-5" />
          </a>
          <a 
            href={project.demo} 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-4 bg-white text-background rounded-2xl hover:scale-110 transition-transform shadow-xl"
          >
            <ArrowUpRight className="w-5 h-5" />
          </a>
        </div>
      </div>

      {/* Content */}
      <div className="p-8">
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((t, idx) => (
            <span 
              key={idx} 
              className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-[10px] font-bold text-slate-400 uppercase tracking-widest"
            >
              {t}
            </span>
          ))}
        </div>

        <h4 className="text-2xl font-bold text-white mb-4 group-hover:text-primary transition-colors flex items-center gap-2">
          {project.title}
          <div className="w-0 h-0.5 bg-primary group-hover:w-8 transition-all duration-500"></div>
        </h4>
        
        <p className="text-slate-400 text-sm leading-relaxed mb-6 line-clamp-2">
          {project.description}
        </p>

        <div className="pt-6 border-t border-white/5 flex items-center justify-between">
            <span className="text-xs font-mono text-slate-500">PROJECT_0{project.id}</span>
            <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-white transition-colors" />
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
