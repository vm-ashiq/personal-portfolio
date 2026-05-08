"use client";

import { motion } from "framer-motion";
import { experienceData } from "../../data/portfolioData";

export default function Experience() {
  return (
    <section id="experience" className="w-full bg-white text-zinc-900 relative font-sans border-b border-zinc-100">
      {/* Background Dots */}
      <div 
        className="absolute inset-0 z-0 opacity-40"
        style={{
          backgroundImage: "radial-gradient(#d4d4d8 1px, transparent 1px)",
          backgroundSize: "24px 24px"
        }}
      ></div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="border-x border-zinc-100 bg-white/80 backdrop-blur-sm px-8 lg:px-16 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <div className="inline-flex items-center px-4 py-2 bg-yellow-100 text-yellow-600 rounded-full font-bold text-sm mb-6 shadow-sm">
              My Journey
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-zinc-900">Experience</h2>
          </motion.div>

          <div className="space-y-8 max-w-4xl">
            {experienceData.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <div className="md:grid md:grid-cols-4 md:items-start md:gap-8">
                  {/* Timeline section */}
                  <div className="hidden md:flex flex-col items-start justify-start h-full pt-6">
                    <div className="text-zinc-500 font-bold whitespace-nowrap bg-white border border-zinc-200 px-4 py-2 rounded-lg shadow-sm">
                      {job.period}
                    </div>
                  </div>

                  <div className="md:col-span-3 border-2 border-zinc-100 p-8 bg-white/60 rounded-3xl shadow-sm hover:border-yellow-400 hover:shadow-md transition-all">
                    
                    <h3 className="text-2xl font-bold text-zinc-900">
                      {job.role}
                    </h3>
                    <div className="text-pink-500 font-bold mb-4 mt-2">
                      @ {job.company}
                    </div>
                    <div className="text-sm text-zinc-500 font-bold mb-4 md:hidden border border-zinc-200 px-3 py-1.5 rounded-lg inline-block bg-white">
                      {job.period}
                    </div>
                    <p className="text-zinc-600 font-medium text-lg leading-relaxed">
                      {job.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
