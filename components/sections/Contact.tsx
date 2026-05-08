"use client";

import { motion } from "framer-motion";
import { profileData } from "../../data/portfolioData";
import { Mail, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="w-full bg-white text-zinc-900 relative font-sans border-b border-zinc-100">
      {/* Background Dots */}
      <div 
        className="absolute inset-0 z-0 opacity-40"
        style={{
          backgroundImage: "radial-gradient(#d4d4d8 1px, transparent 1px)",
          backgroundSize: "24px 24px"
        }}
      ></div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="border-x border-zinc-100 bg-white/40 backdrop-blur-sm px-8 lg:px-16 py-32 flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="text-center w-full max-w-3xl"
          >
            <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-600 rounded-full font-bold text-sm mb-8 shadow-sm">
              Say Hello
            </div>
            
            <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">Get In Touch</h2>
            
            <p className="text-xl text-zinc-500 font-medium mb-12 max-w-2xl mx-auto leading-relaxed">
              Although I'm not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
              <div className="flex items-center bg-white px-6 py-4 rounded-2xl border-2 border-zinc-100 shadow-sm">
                <Mail className="w-6 h-6 mr-3 text-pink-500" />
                <a href={`mailto:${profileData.email}`} className="text-lg font-bold text-zinc-900 hover:opacity-70 transition-opacity">
                  {profileData.email}
                </a>
              </div>
              <div className="flex items-center bg-white px-6 py-4 rounded-2xl border-2 border-zinc-100 shadow-sm">
                <MapPin className="w-6 h-6 mr-3 text-yellow-500" />
                <span className="text-lg font-bold text-zinc-900">New York, USA</span>
              </div>
            </div>

            <a
              href={`mailto:${profileData.email}`}
              className="inline-block px-12 py-5 bg-zinc-900 text-white rounded-xl font-bold text-lg shadow-lg hover:bg-zinc-800 transition-colors"
            >
              Send an Email
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
