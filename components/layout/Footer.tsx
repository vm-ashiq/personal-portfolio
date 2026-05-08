import { profileData } from "../../data/portfolioData";
import { Code2, Briefcase, MessageSquare, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 text-zinc-600 dark:text-zinc-400 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <h3 className="text-lg font-semibold text-black dark:text-white">{profileData.name}</h3>
            <p className="mt-1 text-sm">{profileData.role}</p>
          </div>
          
          <div className="flex space-x-6">
            <a href={profileData.github} target="_blank" rel="noopener noreferrer" className="hover:text-black dark:hover:text-white transition-colors">
              <span className="sr-only">GitHub</span>
              <Code2 size={20} />
            </a>
            <a href={profileData.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-black dark:hover:text-white transition-colors">
              <span className="sr-only">LinkedIn</span>
              <Briefcase size={20} />
            </a>
            {profileData.twitter && (
              <a href={profileData.twitter} target="_blank" rel="noopener noreferrer" className="hover:text-black dark:hover:text-white transition-colors">
                <span className="sr-only">Twitter</span>
                <MessageSquare size={20} />
              </a>
            )}
            <a href={`mailto:${profileData.email}`} className="hover:text-black dark:hover:text-white transition-colors">
              <span className="sr-only">Email</span>
              <Mail size={20} />
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-zinc-200 dark:border-zinc-800 text-sm text-center">
          <p>&copy; {currentYear} {profileData.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
