"use client";

import { useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import { FaGithub } from 'react-icons/fa';
import { FaRegFilePdf } from "react-icons/fa6";
import { LuMaximize2 } from "react-icons/lu";
import ImageModal from './ImageModal';

interface ProjectCardProps {
  title: string;
  description: string;
  imageSrc: string | StaticImageData;
  link: string;
  imageFile: string;
  tags: string[];
}

const ProjectCard = ({ title, description, imageSrc, link, imageFile, tags }: ProjectCardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="flex flex-col h-full rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-slate-200 dark:border-slate-700/80 bg-white dark:bg-slate-800/90 overflow-hidden group/card">
        
        {/* Full Image Container - contain fit to show 100% of the image */}
        <div 
          onClick={() => setIsModalOpen(true)}
          className="relative h-56 sm:h-64 w-full bg-slate-50 dark:bg-slate-900/60 p-3 flex items-center justify-center overflow-hidden border-b border-slate-100 dark:border-slate-700/50 cursor-pointer group"
          title="Click to view full image"
        >
          <Image
            src={imageSrc}
            alt={title}
            fill 
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            style={{ objectFit: 'contain' }}
            className="p-1 transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute top-3 right-3 bg-slate-900/70 hover:bg-slate-900 text-white px-2.5 py-1 rounded-full text-xs font-medium flex items-center gap-1.5 opacity-90 group-hover:opacity-100 transition-opacity backdrop-blur-xs shadow-sm">
            <LuMaximize2 size={13} />
            <span>Full Image</span>
          </div>
        </div>

        {/* Content */}
        <div className="p-5 sm:p-6 flex flex-col flex-grow">
          <h3 className="text-xl font-bold mb-2.5 text-slate-900 dark:text-white line-clamp-2">
            {title}
          </h3>
          
          <div className="h-28 sm:h-32 overflow-y-auto card-scroll pr-1.5 mb-4 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            <p>{description}</p>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 mb-5">
            {tags.map((tag, index) => (
              <span 
                key={index} 
                className="px-2.5 py-0.5 text-xs font-medium text-blue-700 bg-blue-50 border border-blue-200 rounded-md dark:bg-blue-950/40 dark:border-blue-800/50 dark:text-blue-300"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Action Links */}
          <div className="flex flex-wrap items-center gap-3 pt-3 border-t border-slate-100 dark:border-slate-700/50 mt-auto">
            {link && (
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 dark:bg-slate-700 dark:hover:bg-slate-600 dark:text-slate-200 transition-colors"
              >
                <FaGithub size={14} />
                <span>GitHub</span>
              </a>
            )}

            {imageFile && (
              <a
                href={imageFile}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg bg-blue-50 hover:bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:hover:bg-blue-900/50 dark:text-blue-300 transition-colors"
              >
                <FaRegFilePdf size={14} />
                <span>Document</span>
              </a>
            )}

            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg bg-emerald-50 hover:bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:hover:bg-emerald-900/50 dark:text-emerald-300 transition-colors cursor-pointer"
            >
              <LuMaximize2 size={13} />
              <span>Full Image</span>
            </button>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      <ImageModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        imageSrc={imageSrc}
        title={title}
        subtitle={description}
      />
    </>
  );
};

export default ProjectCard;