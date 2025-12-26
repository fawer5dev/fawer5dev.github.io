import React, { useState } from "react";
import { projects } from "@/lib/data";
import {
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Github, ExternalLink, Image as ImageIcon } from "lucide-react";
import { GlassCard } from "./ui/glass-card";
import MotionWrapper from "./MotionWrapper";
import { motion } from "framer-motion";
import ImageModal from "./ImageModal";
import { useLanguage } from "@/lib/LanguageContext";
import { translations } from "@/lib/translations";

export default function ProjectsSection() {
  const [selectedImage, setSelectedImage] = useState<{ src: string; title: string } | null>(null);
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section id="projects" className="py-12 relative">
      <div className="container max-w-4xl mx-auto px-6 md:px-4">
        <MotionWrapper>
          <h2 className="text-2xl font-bold mb-8 text-center md:text-left">
            {t.sections.projects}
          </h2>
        </MotionWrapper>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => {
            const translatedProject = t.projects[index];
            return (
            <MotionWrapper key={project.title} delay={index * 0.2}>
              <GlassCard className="group overflow-hidden dark:border-purple-500/10 h-full flex flex-col">
                <CardHeader className="bg-gradient-to-r from-purple-500/5 to-pink-500/5">
                  <CardTitle className="text-center md:text-left group-hover:text-purple-500 transition-colors duration-300">
                    {translatedProject.title}
                  </CardTitle>
                </CardHeader>
                
                {/* Image Preview */}
                {project.image && (
                  <div 
                    className="relative overflow-hidden cursor-pointer group/image"
                    onClick={() => setSelectedImage({ src: project.image!, title: translatedProject.title })}
                  >
                    <motion.img
                      src={project.image}
                      alt={`${translatedProject.title} screenshot`}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover/image:scale-105"
                      whileHover={{ scale: 1.05 }}
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover/image:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                      <ImageIcon className="h-8 w-8 text-white opacity-0 group-hover/image:opacity-100 transition-opacity duration-300" />
                    </div>
                  </div>
                )}
                
                <CardContent className="flex-grow">
                  <ul className="list-disc ml-4 space-y-1 text-sm group-hover:space-y-2 transition-all duration-300">
                    {translatedProject.description.map((desc, i) => (
                      <motion.li
                        key={i}
                        className="text-muted-foreground"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        viewport={{ once: true }}
                      >
                        {desc}
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="flex flex-wrap gap-4 justify-center md:justify-start items-center border-t border-border/30 bg-gradient-to-r from-purple-500/5 to-pink-500/5 pt-4">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-sm text-muted-foreground hover:text-purple-500 transition-colors group/link"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github className="h-4 w-4 mr-2 group-hover/link:rotate-12 transition-transform duration-300" />
                    {t.buttons.viewCode}
                  </motion.a>
                  
                  {project.live && (
                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-sm text-muted-foreground hover:text-pink-500 transition-colors group/link"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink className="h-4 w-4 mr-2 group-hover/link:rotate-12 transition-transform duration-300" />
                      {t.buttons.viewProject}
                    </motion.a>
                  )}
                </CardFooter>
              </GlassCard>
            </MotionWrapper>
          );})}
        </div>
      </div>
      
      {/* Image Modal */}
      <ImageModal
        isOpen={!!selectedImage}
        onClose={() => setSelectedImage(null)}
        imageSrc={selectedImage?.src || ""}
        title={selectedImage?.title || ""}
      />
    </section>
  );
}
