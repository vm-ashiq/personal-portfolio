"use client";

import { motion } from "framer-motion";
import { projectsData } from "../../data/portfolioData";
import { Code2, ExternalLink } from "lucide-react";

export default function Projects() {
  return (
    <section id="projects" className="w-full bg-white text-zinc-900 relative font-sans border-b border-zinc-100">
      {/* Background Dots */}
      <div 
        className="absolute inset-0 z-0 opacity-40"
        style={{
          backgroundImage: "radial-gradient(#d4d4d8 1px, transparent 1px)",
          backgroundSize: "24px 24px"
        }}
      ></div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="border-x border-zinc-100 bg-zinc-50/50 backdrop-blur-sm px-8 lg:px-16 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <div className="inline-flex items-center px-4 py-2 bg-indigo-100 text-indigo-600 rounded-full font-bold text-sm mb-6 shadow-sm">
              Portfolio
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-zinc-900">Featured Projects</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectsData.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white border-2 border-zinc-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:border-indigo-200 transition-all flex flex-col h-full group"
              >
                <div 
                  className="h-48 w-full bg-cover bg-center border-b-2 border-zinc-100 group-hover:scale-105 transition-transform duration-500"
                  style={{ backgroundImage: `url(${project.image})` }}
                ></div>
                <div className="p-8 flex flex-col flex-grow relative bg-white z-10">
                  <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                  <p className="text-zinc-500 font-medium mb-6 flex-grow leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-8 mt-auto">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="text-xs font-bold px-3 py-1.5 bg-zinc-100 text-zinc-600 rounded-lg"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4 pt-4 border-t border-zinc-100">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-1 justify-center items-center py-3 text-sm font-bold bg-white border-2 border-zinc-100 hover:border-zinc-300 rounded-xl transition-all"
                      >
                        <Code2 className="w-5 h-5 mr-2 text-zinc-900" />
                        Code
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-1 justify-center items-center py-3 text-sm font-bold bg-zinc-900 text-white rounded-xl shadow-lg hover:bg-zinc-800 transition-all"
                      >
                        <ExternalLink className="w-5 h-5 mr-2" />
                        Live Demo
                      </a>
                    )}
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
