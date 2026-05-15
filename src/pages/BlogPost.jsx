import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Tag, User, Share2 } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { blogs } from '../data';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

const BlogPost = () => {
  const { id } = useParams();
  const blog = blogs.find(b => b.id === parseInt(id));

  if (!blog) {
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center text-white">
        <h2 className="text-3xl font-bold mb-4 text-primary">Post Not Found</h2>
        <Link to="/blog" className="text-slate-400 hover:text-white flex items-center gap-2">
          <ArrowLeft className="w-4 h-4" /> Back to Blog
        </Link>
      </div>
    );
  }

  // Placeholder content if blog.content is missing
  const content = blog.content || `
# ${blog.title}

Chào mừng bạn đến với bài viết chi tiết về **${blog.category}**. 

Trong bài viết này, chúng ta sẽ khám phá những khía cạnh quan trọng nhất của công nghệ này và cách nó có thể giúp bạn tối ưu hóa công việc hàng ngày.

## Nội dung chính
1. Khám phá các khái niệm cơ bản.
2. Hướng dẫn cài đặt và cấu hình.
3. Các mẹo và thủ thuật nâng cao.

> "Công nghệ là công cụ, mục tiêu cuối cùng vẫn là giá trị thực tiễn."

Hãy theo dõi blog của tôi để cập nhật những kiến thức mới nhất!
  `;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-32 pb-24">
        <div className="container mx-auto px-6 max-w-4xl">
          {/* Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <Link 
              to="/blog" 
              className="inline-flex items-center gap-2 text-slate-500 hover:text-primary transition-colors mb-8 group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Back to Articles
            </Link>
            
            <div className="flex items-center gap-4 mb-6">
              <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider">
                {blog.category}
              </span>
              <span className="text-slate-500 text-sm flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {blog.date}
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
              {blog.title}
            </h1>

            <div className="flex items-center justify-between py-6 border-y border-white/5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">L</div>
                <div>
                  <div className="text-white font-medium">Long Tech</div>
                  <div className="text-slate-500 text-xs">Author & Tech Specialist</div>
                </div>
              </div>
              <button className="p-2 text-slate-500 hover:text-white transition-colors">
                <Share2 className="w-5 h-5" />
              </button>
            </div>
          </motion.div>

          {/* Content */}
          <motion.article 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="prose prose-invert prose-primary max-w-none prose-headings:text-white prose-p:text-slate-400 prose-strong:text-white prose-blockquote:border-primary prose-a:text-primary"
          >
            <ReactMarkdown>{content}</ReactMarkdown>
          </motion.article>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BlogPost;
