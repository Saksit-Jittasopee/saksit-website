import { FaDownload, FaEye } from "react-icons/fa";

const CV = () => {
  return (
    <div className="flex flex-wrap items-center gap-4 mt-6">
      <a 
        href="Saksit_CV.pdf" 
        download="Saksit_CV.pdf" 
        target="_blank" 
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm text-white bg-blue-600 hover:bg-blue-700 shadow-md hover:shadow-blue-500/25 transition-all duration-200 cursor-pointer"
      >
        <FaDownload size={14} />
        <span>Download CV</span>
      </a>

      <a 
        href="Saksit_CV.pdf" 
        target="_blank" 
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/50 hover:bg-emerald-100 dark:hover:bg-emerald-900/40 shadow-xs transition-all duration-200 cursor-pointer"
      >
        <FaEye size={14} />
        <span>View CV (PDF)</span>
      </a>
    </div>
  );
};

export default CV;