"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="hero" className="w-full bg-white text-zinc-900 relative overflow-hidden font-sans border-b border-zinc-100">
      {/* Background Dots */}
      <div 
        className="absolute inset-0 z-0 opacity-40"
        style={{
          backgroundImage: "radial-gradient(#d4d4d8 1px, transparent 1px)",
          backgroundSize: "24px 24px"
        }}
      ></div>

      <div className="max-w-7xl mx-auto w-full relative z-10 pt-24">
        <div className="flex flex-col lg:flex-row min-h-screen border-x border-zinc-100 relative bg-white/70 backdrop-blur-sm -mt-24 pt-24">
          
          {/* Faint Horizontal Line across */}
          <div className="absolute top-1/2 left-0 w-full h-px bg-zinc-100 -z-10 hidden lg:block"></div>
          
          {/* Left Column */}
          <div className="flex-1 px-8 lg:px-16 py-12 lg:py-20 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-zinc-100">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center px-4 py-2 bg-yellow-400 text-zinc-900 rounded-full font-bold text-sm mb-8 shadow-sm">
                Hi, Dr. Ashiq V M Here <span className="ml-2 text-base">👋</span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight mb-8 leading-[1.1] text-zinc-900">
                A <span className="text-zinc-400">PhD-qualified AI Researcher</span> who creates experiences that are meant to be lived.
              </h1>
              
              <p className="text-zinc-500 text-lg md:text-xl font-medium max-w-lg mb-10 leading-relaxed">
                Currently an Assistant Professor of Computer Science at Kerala, India, specializing in AI, NLP, Deep Learning, and Computer Vision.
              </p>
              
              <div className="flex flex-wrap items-center gap-4">
                <button className="px-8 py-4 bg-gradient-to-r from-pink-500 to-yellow-500 text-white rounded-lg font-bold shadow-lg shadow-pink-500/20 hover:opacity-90 transition-opacity">
                  Hire Me!
                </button>
                <button className="px-8 py-4 bg-zinc-900 text-white rounded-lg font-bold shadow-lg hover:bg-zinc-800 transition-colors">
                  See My Portfolio
                </button>
              </div>
            </motion.div>
          </div>
          
          {/* Right Column (Image & Floating Elements) */}
          <div className="flex-1 relative hidden lg:flex items-center justify-center min-h-[600px] border-zinc-100">
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative w-full h-full flex items-center justify-center p-12"
            >
                {/* Image Placeholder -> Real Image */}
                <div className="relative w-full max-w-[360px] h-[480px] bg-indigo-100 rounded-b-full rounded-t-[180px] overflow-hidden shadow-xl border-4 border-white flex flex-col items-center justify-end">
                   <img src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=600&auto=format&fit=crop" alt="Alex Travis" className="w-full h-full object-cover object-top" />
                </div>

                {/* Floating Tag: Available */}
                <motion.div 
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-20 left-12 bg-white px-4 py-2.5 rounded-full shadow-md shadow-zinc-200/50 flex items-center gap-2.5 z-20 font-bold text-sm text-zinc-900 border border-zinc-100"
                >
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500 shadow-sm shadow-green-400"></div>
                  Available for work
                </motion.div>

                {/* Floating Tag: Location */}
                <motion.div 
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-20 right-12 bg-lime-300 px-4 py-2.5 rounded-full shadow-md flex items-center gap-2 z-20 font-bold text-sm text-zinc-900"
                >
                  <span>�🇳</span> Kerala, India
                </motion.div>
                
                {/* Testimonial left */}
                <motion.div 
                  animate={{ y: [0, 15, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white p-5 rounded-2xl shadow-xl shadow-zinc-200/50 w-[260px] z-20 border border-zinc-100"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <img src="https://i.pravatar.cc/100?img=11" alt="Dominic Ramsdale" className="w-10 h-10 rounded-full object-cover shrink-0" />
                    <div>
                      <p className="text-sm font-bold text-zinc-900 leading-tight">Dominic Ramsdale</p>
                      <p className="text-[11px] text-zinc-400 font-semibold mt-0.5">Co Founder Dorgu</p>
                    </div>
                  </div>
                  <p className="text-[13px] text-zinc-700 font-medium leading-relaxed">
                    "Working with Alex transformed accounting software into a sleek, intuitive experience."
                  </p>
                </motion.div>

                {/* Testimonial right */}
                <motion.div 
                  animate={{ y: [0, -15, 0] }}
                  transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  className="absolute right-4 bottom-28 bg-yellow-300 p-5 rounded-2xl shadow-xl w-[260px] z-20"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <p className="text-sm font-bold text-zinc-900 leading-tight">Paul Cris</p>
                      <p className="text-[11px] text-zinc-800/70 font-semibold mt-0.5">Co Founder Crispatex</p>
                    </div>
                    <img src="https://i.pravatar.cc/100?img=12" alt="Paul Cris" className="w-8 h-8 rounded-full object-cover shrink-0" />
                  </div>
                  <p className="text-[13px] text-zinc-900 font-medium leading-relaxed">
                    "Working withtransformed accounting, intuitive experience."
                  </p>
                </motion.div>
            </motion.div>
          </div>
        </div>
        
        {/* Bottom Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 border-x border-b border-zinc-100 bg-white relative z-20">
          <div className="px-8 py-12 md:py-16 border-b md:border-b-0 md:border-r border-zinc-100 flex flex-col justify-center gap-2">
            <h3 className="text-5xl font-bold text-zinc-900 flex items-baseline">99<span className="text-3xl text-zinc-300 font-medium ml-1">%</span></h3>
            <p className="text-[15px] text-zinc-500 font-medium leading-tight max-w-[140px]">OCR classification accuracy</p>
          </div>
          <div className="px-8 py-12 md:py-16 border-b md:border-b-0 md:border-r border-zinc-100 flex flex-col justify-center gap-2">
            <h3 className="text-5xl font-bold text-zinc-900 flex items-baseline">6<span className="text-4xl text-zinc-300 font-medium ml-1">+</span></h3>
            <p className="text-[15px] text-zinc-500 font-medium leading-tight max-w-[140px]">Years teaching experience</p>
          </div>
          <div className="px-8 py-12 md:py-16 border-b md:border-b-0 md:border-r md:border-zinc-100 border-zinc-100 flex flex-col justify-center gap-2">
            <h3 className="text-5xl font-bold text-zinc-900">2020</h3>
            <p className="text-[15px] text-zinc-500 font-medium leading-tight max-w-[140px]">Started academic leadership</p>
          </div>
          <div className="px-8 py-12 md:py-16 flex flex-col justify-center gap-2">
            <h3 className="text-5xl font-bold text-zinc-900 flex items-baseline">3<span className="text-4xl text-zinc-300 font-medium ml-1">+</span></h3>
            <p className="text-[15px] text-zinc-500 font-medium leading-tight max-w-[140px]">Scopus indexed publications</p>
          </div>
        </div>
        
        {/* Extra filler space pattern matched */}
        <div className="h-32 border-x border-b border-zinc-100 bg-white/70 backdrop-blur-sm relative">
           <div className="absolute inset-0 z-0 opacity-40" style={{ backgroundImage: "radial-gradient(#d4d4d8 1px, transparent 1px)", backgroundSize: "24px 24px" }}></div>
        </div>
      </div>
    </section>
  );
}
