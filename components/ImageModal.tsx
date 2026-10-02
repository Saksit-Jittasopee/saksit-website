"use client";

import { useEffect } from "react";
import Image, { StaticImageData } from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { IoClose, IoOpenOutline } from "react-icons/io5";

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string | StaticImageData;
  title: string;
  subtitle?: string;
}

export default function ImageModal({
  isOpen,
  onClose,
  imageSrc,
  title,
  subtitle,
}: ImageModalProps) {
  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const imageUri = typeof imageSrc === "string" ? imageSrc : imageSrc.src;

  return (
    <AnimatePresence>
      <div 
        className="fixed inset-0 z-[100000] flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 10 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          onClick={(e) => e.stopPropagation()}
          className="relative max-w-5xl w-full max-h-[92vh] flex flex-col bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-5 py-3 border-b border-slate-800 bg-slate-900/90 text-white">
            <div className="pr-4 overflow-hidden">
              <h3 className="font-semibold text-base sm:text-lg truncate text-slate-100">{title}</h3>
              {subtitle && <p className="text-xs text-slate-400 truncate">{subtitle}</p>}
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <a
                href={imageUri}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
                title="Open image in new tab"
              >
                <IoOpenOutline size={18} />
              </a>
              <button
                onClick={onClose}
                className="p-2 rounded-lg bg-slate-800 hover:bg-red-600/80 text-slate-300 hover:text-white transition-colors cursor-pointer"
                title="Close (Esc)"
              >
                <IoClose size={20} />
              </button>
            </div>
          </div>

          {/* Full Image Container */}
          <div className="relative w-full h-[60vh] sm:h-[70vh] max-h-[75vh] p-2 sm:p-4 flex items-center justify-center bg-black/60">
            <Image
              src={imageSrc}
              alt={title}
              fill
              sizes="90vw"
              priority
              style={{ objectFit: "contain" }}
              className="select-none"
            />
          </div>

          {/* Footer note */}
          <div className="px-5 py-2.5 bg-slate-950/80 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
            <span>Viewing full resolution image</span>
            <span className="hidden sm:inline">Press Esc or click outside to close</span>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

