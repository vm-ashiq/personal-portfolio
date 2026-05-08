"use client";

import { motion } from "framer-motion";
import { profileData } from "../../data/portfolioData";

export default function About() {
  return (
    <section id="about" className="w-full bg-white text-zinc-900 relative overflow-hidden font-sans border-b border-zinc-100">
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
            <div className="inline-flex items-center px-4 py-2 bg-pink-100 text-pink-600 rounded-full font-bold text-sm mb-6 shadow-sm">
              Discover More
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-zinc-900">About Me</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-3xl font-bold mb-6">Get to know me!</h3>
              <p className="text-zinc-600 text-lg font-medium leading-relaxed mb-6">
                {profileData.bio}
              </p>
              <p className="text-zinc-600 text-lg font-medium leading-relaxed mb-10">
                I'm open to job opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to contact me.
              </p>
              <a
                href="#contact"
                className="inline-block px-8 py-4 bg-zinc-900 text-white rounded-lg font-bold shadow-lg hover:bg-zinc-800 transition-colors"
              >
                Contact Me
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h3 className="text-3xl font-bold mb-6">My Skills</h3>
              <div className="flex flex-wrap gap-4">
                {profileData.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-6 py-3 bg-white border-2 border-zinc-100 rounded-xl text-base font-bold text-zinc-800 shadow-sm hover:border-zinc-300 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
