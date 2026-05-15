import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative rounded-2xl overflow-hidden glass border border-white/5 hover:border-primary/30 transition-all duration-500"
    >
      {/* Project Image */}
      <div className="relative h-56 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-80 group-hover:opacity-60 transition-opacity"></div>
        
        {/* Hover Links Overlay */}
        <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <a 
            href={project.link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 bg-white text-background rounded-full hover:scale-110 transition-transform"
          >
            <Github className="w-5 h-5" />
          </a>
          <a 
            href={project.demo} 
            className="p-3 bg-primary text-white rounded-full hover:scale-110 transition-transform"
          >
            <ExternalLink className="w-5 h-5" />
          </a>
        </div>
      </div>

      {/* Project Info */}
      <div className="p-6">
        <h4 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
          {project.title}
        </h4>
        <p className="text-slate-400 text-sm mb-6 line-clamp-2">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech, idx) => (
            <span 
              key={idx} 
              className="text-[10px] uppercase tracking-wider font-bold px-2 py-1 rounded bg-primary/10 text-primary border border-primary/20"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
