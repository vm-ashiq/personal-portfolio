"use client";

import { motion } from "framer-motion";
import { profileData } from "../../data/portfolioData";
import { ArrowDown, Mail } from "lucide-react";

export default function Hero() {
  return (
    <section id="hero" className="flex items-center justify-center min-h-screen pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
              Hi, I'm <span className="text-blue-600 dark:text-blue-400">{profileData.name}</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-zinc-600 dark:text-zinc-400 font-medium mb-6">
              {profileData.role}
            </h2>
            <p className="max-w-lg text-lg text-zinc-600 dark:text-zinc-400 mb-8 leading-relaxed">
              I build scalable, modern web applications that provide seamless user experiences.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a
                href="#projects"
                className="flex items-center justify-center px-6 py-3 bg-black text-white dark:bg-white dark:text-black rounded-lg font-medium hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="flex items-center justify-center px-6 py-3 border border-zinc-200 dark:border-zinc-800 rounded-lg font-medium hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors"
              >
                <Mail className="w-4 h-4 mr-2" />
                Contact Me
              </a>
            </div>
          </motion.div>
          
          <motion.div
            className="flex-1 flex justify-center pb-20 md:pb-0"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {/* Using a structural placeholder instead of an actual image */}
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              <div className="absolute inset-0 bg-blue-100 dark:bg-blue-900/20 rounded-full animate-pulse blur-3xl"></div>
              <div className="absolute inset-4 bg-zinc-100 dark:bg-zinc-900 rounded-full border-8 border-white dark:border-zinc-950 flex items-center justify-center shadow-xl">
                 <span className="text-5xl font-bold text-zinc-300 dark:text-zinc-700">{profileData.name.charAt(0)}</span>
              </div>
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden md:flex flex-col items-center cursor-pointer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, delay: 1 }}
          onClick={() => {
            document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          <span className="text-sm font-medium mb-2 text-zinc-500">Scroll Down</span>
          <ArrowDown className="text-zinc-500 w-5 h-5" />
        </motion.div>
      </div>
    </section>
  );
}
