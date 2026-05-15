import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Tag, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { blogs } from '../../data';

const BlogSection = () => {
  return (
    <section id="blog" className="py-24 bg-slate-900/20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-sm font-mono text-primary uppercase tracking-widest mb-4">Insights</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white">Tech <span className="text-accent">Blog</span></h3>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Link 
              to="/blog"
              className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors group"
            >
              <span>View All Articles</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {blogs.slice(0, 3).map((blog, idx) => (
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
              
              <Link 
                to={`/blog/${blog.id}`}
                className="flex items-center gap-2 text-white font-bold text-sm group/btn"
              >
                Read More
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-2 transition-transform text-primary" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
