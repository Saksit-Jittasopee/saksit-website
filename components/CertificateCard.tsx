"use client";

import { useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import { FaShieldAlt } from "react-icons/fa";
import { FaRegFilePdf } from "react-icons/fa6";
import { LuMaximize2 } from "react-icons/lu";
import ImageModal from './ImageModal';

interface CertificateCardProps {
  title: string;
  description: string;
  imageSrc: string | StaticImageData;
  link: string;
  imageFile: string;
}

const CertificateCard = ({ title, description, imageSrc, link, imageFile }: CertificateCardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="flex flex-col h-full rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-slate-200 dark:border-slate-700/80 bg-white dark:bg-slate-800/90 overflow-hidden group/card">
        
        {/* Full Image Container - contain fit so certificates are 100% visible without cropping */}
        <div 
          onClick={() => setIsModalOpen(true)}
          className="relative h-56 sm:h-64 w-full bg-slate-50 dark:bg-slate-900/60 p-3 flex items-center justify-center overflow-hidden border-b border-slate-100 dark:border-slate-700/50 cursor-pointer group"
          title="Click to view full certificate"
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
          
          <p className="text-sm mb-5 flex-grow text-slate-600 dark:text-slate-300 line-clamp-3 leading-relaxed">
            {description}
          </p>

          {/* Action Links */}
          <div className="flex flex-wrap items-center gap-3 pt-3 border-t border-slate-100 dark:border-slate-700/50 mt-auto">
            {link && (
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg bg-rose-50 hover:bg-rose-100 text-rose-700 dark:bg-rose-950/40 dark:hover:bg-rose-900/50 dark:text-rose-300 transition-colors"
              >
                <FaShieldAlt size={14} />
                <span>Credential Badge</span>
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

export default CertificateCard;