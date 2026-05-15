import React from 'react';
import Navbar from '../components/layout/Navbar';
import HeroSection from '../components/sections/HeroSection';
import AboutSection from '../components/sections/AboutSection';
import SkillSection from '../components/sections/SkillSection';
import ProjectSection from '../components/sections/ProjectSection';
import BlogSection from '../components/sections/BlogSection';
import ContactSection from '../components/sections/ContactSection';
import Footer from '../components/layout/Footer';

function Home() {
  return (
    <div className="relative min-h-screen bg-[#030712] overflow-x-hidden">
      {/* Dynamic Global Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/10 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] bg-highlight/5 rounded-full blur-[100px] animate-float"></div>
        <div className="absolute top-[40%] left-[20%] w-[20%] h-[20%] bg-accent/5 rounded-full blur-[80px]"></div>
      </div>

      <div className="relative z-10">
        <Navbar />
        
        <main>
          <HeroSection />
          
          <div className="space-y-24 pb-24">
            <AboutSection />
            <SkillSection />
            <ProjectSection />
            <BlogSection />
            <ContactSection />
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default Home;
