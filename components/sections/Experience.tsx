"use client";

import { motion } from "framer-motion";
import { experienceData } from "../../data/portfolioData";

export default function Experience() {
  return (
    <section id="experience" className="py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight mb-4">Experience</h2>
          <div className="w-16 h-1 bg-blue-600 dark:bg-blue-400 mx-auto rounded-full"></div>
        </motion.div>

        <div className="space-y-12">
          {experienceData.map((job, index) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pl-8 md:pl-0"
            >
              <div className="md:grid md:grid-cols-4 md:items-start md:gap-8">
                {/* Timeline dot and connecting line for desktop */}
                <div className="hidden md:flex flex-col items-center justify-start h-full">
                  <div className="text-zinc-500 dark:text-zinc-400 font-medium whitespace-nowrap mt-1">
                    {job.period}
                  </div>
                </div>

                <div className="md:col-span-3 border-l-2 border-zinc-200 dark:border-zinc-800 pl-8 pb-8 relative shadow-sm p-6 bg-white dark:bg-zinc-900 rounded-2xl border-none ring-1 ring-zinc-200 dark:ring-zinc-800">
                  <div className="absolute w-4 h-4 bg-blue-600 dark:bg-blue-400 rounded-full -left-[9px] top-7 ring-4 ring-white dark:ring-zinc-950 md:hidden"></div>
                  
                  <h3 className="text-xl font-bold text-black dark:text-white">
                    {job.role}
                  </h3>
                  <div className="text-blue-600 dark:text-blue-400 font-medium mb-4 mt-1">
                    {job.company}
                  </div>
                  <div className="text-sm text-zinc-500 dark:text-zinc-400 font-medium mb-4 md:hidden">
                    {job.period}
                  </div>
                  <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    {job.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
