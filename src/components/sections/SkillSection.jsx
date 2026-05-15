import React from 'react';
import { motion } from 'framer-motion';
import { Code, Terminal, Layers, Database, Cpu, Search } from 'lucide-react';

const SkillSection = () => {
  const skillCategories = [
    {
      title: "Core Languages",
      icon: <Code className="w-6 h-6" />,
      skills: ["Python", "JavaScript", "SQL", "HTML/CSS"],
      color: "text-blue-400"
    },
    {
      title: "AI & Automation",
      icon: <Cpu className="w-6 h-6" />,
      skills: ["Ollama", "Claude Code", "Google Sheets API", "Selenium"],
      color: "text-purple-400"
    },
    {
      title: "Data & Workflow",
      icon: <Database className="w-6 h-6" />,
      skills: ["Power Query", "Excel Automation", "Pandas", "SQLite"],
      color: "text-cyan-400"
    },
    {
      title: "Frontend & UI",
      icon: <Layers className="w-6 h-6" />,
      skills: ["ReactJS", "Vite", "TailwindCSS", "Framer Motion"],
      color: "text-pink-400"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <section id="skills" className="py-24 bg-slate-900/30">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-sm font-mono text-highlight uppercase tracking-widest mb-4">Expertise</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">Technical <span className="text-primary">Skills</span></h3>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Hệ sinh thái công nghệ tôi sử dụng để xây dựng các giải pháp tối ưu cho khách hàng và dự án cá nhân.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="p-8 rounded-2xl glass border border-white/5 hover:border-primary/30 transition-all group hover:-translate-y-2"
            >
              <div className={`mb-6 p-3 rounded-xl bg-white/5 inline-block ${category.color} group-hover:scale-110 transition-transform`}>
                {category.icon}
              </div>
              <h4 className="text-xl font-bold text-white mb-6">{category.title}</h4>
              <div className="flex flex-wrap gap-2 justify-center">
                {category.skills.map((skill, sIdx) => (
                  <span 
                    key={sIdx}
                    className="px-3 py-1 rounded-full bg-slate-800 text-slate-300 text-xs font-medium border border-white/5 group-hover:border-primary/20 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillSection;
