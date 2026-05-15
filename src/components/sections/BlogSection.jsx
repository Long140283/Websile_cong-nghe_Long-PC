import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Tag, ArrowRight } from 'lucide-react';
import { blogs } from '../../data';

const BlogSection = () => {
  return (
    <section id="blog" className="py-24 bg-slate-900/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-mono text-primary uppercase tracking-widest mb-4"
          >
            Insights
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-white"
          >
            Tech <span className="text-accent">Blog</span>
          </motion.h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {blogs.map((blog, idx) => (
            <motion.div
              key={blog.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group glass rounded-2xl p-6 border border-white/5 hover:border-primary/20 transition-all flex flex-col h-full"
            >
              <div className="flex items-center gap-4 mb-6">
                <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-wider flex items-center gap-1">
                  <Tag className="w-3 h-3" />
                  {blog.category}
                </span>
                <span className="text-slate-500 text-xs flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  {blog.date}
                </span>
              </div>
              
              <h4 className="text-xl font-bold text-white mb-4 group-hover:text-primary transition-colors line-clamp-2">
                {blog.title}
              </h4>
              
              <p className="text-slate-400 text-sm mb-8 line-clamp-3 flex-grow">
                {blog.excerpt}
              </p>
              
              <a 
                href={blog.link}
                className="flex items-center gap-2 text-white font-bold text-sm group/btn"
              >
                Read More
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-2 transition-transform text-primary" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
