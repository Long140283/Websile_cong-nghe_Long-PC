import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Cpu, Globe, Rocket } from 'lucide-react';

const AboutSection = () => {
  const stats = [
    { label: "Years Experience", value: "3+", icon: <Code2 className="w-5 h-5" /> },
    { label: "Projects Completed", value: "50+", icon: <Rocket className="w-5 h-5" /> },
    { label: "Technologies", value: "15+", icon: <Cpu className="w-5 h-5" /> },
    { label: "Happy Clients", value: "20+", icon: <Globe className="w-5 h-5" /> },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Image / Visual Side */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden border border-white/10 glass p-2 group">
              <div className="aspect-[4/5] bg-slate-900 rounded-xl flex items-center justify-center text-slate-700 text-6xl">
                 {/* Placeholder for actual image */}
                 👨‍💻
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60"></div>
            </div>
            
            {/* Decorative Boxes */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/20 rounded-2xl blur-2xl -z-10"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-highlight/20 rounded-2xl blur-2xl -z-10"></div>
          </motion.div>

          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-sm font-mono text-primary uppercase tracking-widest mb-4">Discovery</h2>
            <h3 className="text-4xl md:text-5xl font-bold mb-8 text-white">
              About <span className="text-accent">Me</span>
            </h3>
            
            <p className="text-slate-400 text-lg leading-relaxed mb-8">
              Chào bạn! Tôi là một chuyên gia công nghệ đam mê việc xây dựng các giải pháp tự động hóa thông minh. 
              Với nền tảng vững chắc về <span className="text-white font-semibold">Python</span> và <span className="text-white font-semibold">AI Automation</span>, 
              tôi tập trung vào việc giúp các doanh nghiệp và cá nhân tối ưu hóa quy trình làm việc thông qua mã nguồn hiệu quả.
            </p>
            
            <p className="text-slate-400 text-lg leading-relaxed mb-10">
              Tôi không chỉ viết code, tôi xây dựng những công cụ giúp tiết kiệm hàng trăm giờ làm việc mỗi tháng. 
              Từ việc tích hợp Google Sheets API đến phát triển các hệ thống quản lý bệnh viện phức tạp, mục tiêu của tôi luôn là: 
              <span className="italic text-highlight"> "Thông minh hơn, không phải vất vả hơn."</span>
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, idx) => (
                <div key={idx} className="p-4 rounded-xl border border-white/5 bg-white/5 hover:bg-white/10 transition-colors">
                  <div className="text-primary mb-2">{stat.icon}</div>
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-sm text-slate-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
