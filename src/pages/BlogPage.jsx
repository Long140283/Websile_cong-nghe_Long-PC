import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Tag, ArrowLeft, ArrowRight, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import { blogs } from '../data';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

const BlogPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="mb-16">
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 text-slate-500 hover:text-primary transition-colors mb-8 group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Back to Home
            </Link>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Tech <span className="text-primary">Insights</span>
            </h1>
            <p className="text-slate-400 max-w-2xl text-lg">
              Khám phá thế giới Python, AI Automation và các giải pháp công nghệ thông minh để tối ưu hóa hiệu suất công việc của bạn.
            </p>
          </div>

          {/* Search & Categories (Placeholder) */}
          <div className="flex flex-col md:flex-row gap-6 mb-12 items-center justify-between">
             <div className="relative w-full md:w-96">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                <input 
                   type="text" 
                   placeholder="Search articles..." 
                   className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                />
             </div>
             <div className="flex gap-4 overflow-x-auto pb-2 w-full md:w-auto">
                {['All', 'Python', 'AI', 'Automation', 'Tips'].map(cat => (
                   <button key={cat} className="px-4 py-2 rounded-lg glass text-sm text-slate-300 hover:text-primary whitespace-nowrap">
                      {cat}
                   </button>
                ))}
             </div>
          </div>

          {/* Blog Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog, idx) => (
              <motion.div
                key={blog.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="group glass rounded-2xl p-8 border border-white/5 hover:border-primary/20 transition-all flex flex-col h-full"
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
                
                <h4 className="text-2xl font-bold text-white mb-4 group-hover:text-primary transition-colors line-clamp-2 leading-tight">
                  {blog.title}
                </h4>
                
                <p className="text-slate-400 text-sm mb-8 line-clamp-3 flex-grow leading-relaxed">
                  {blog.excerpt}
                </p>
                
                <Link 
                  to={`/blog/${blog.id}`}
                  className="flex items-center gap-2 text-white font-bold text-sm group/btn"
                >
                  Read Full Article
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-2 transition-transform text-primary" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
      
      {/* Background Mesh Gradient */}
      <div className="fixed inset-0 z-[-1] pointer-events-none opacity-20">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-highlight/10 rounded-full blur-[120px]"></div>
      </div>
    </div>
  );
};

export default BlogPage;
