"use client";

import { motion } from "framer-motion";
import { profileData } from "../../data/portfolioData";
import { Mail, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold tracking-tight mb-4">Get In Touch</h2>
          <div className="w-16 h-1 bg-blue-600 dark:bg-blue-400 mx-auto rounded-full mb-12"></div>
          
          <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-12 max-w-2xl mx-auto">
            Although I'm not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-16">
            <div className="flex items-center text-zinc-600 dark:text-zinc-400">
              <Mail className="w-6 h-6 mr-3 text-blue-600 dark:text-blue-400" />
              <a href={`mailto:${profileData.email}`} className="text-lg hover:text-black dark:hover:text-white transition-colors">
                {profileData.email}
              </a>
            </div>
            <div className="flex items-center text-zinc-600 dark:text-zinc-400">
              <MapPin className="w-6 h-6 mr-3 text-blue-600 dark:text-blue-400" />
              <span className="text-lg">San Francisco, CA</span>
            </div>
          </div>

          <a
            href={`mailto:${profileData.email}`}
            className="inline-flex items-center px-8 py-4 bg-black text-white dark:bg-white dark:text-black rounded-lg font-medium text-lg hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors"
          >
            Say Hello
          </a>
        </motion.div>
      </div>
    </section>
  );
}
