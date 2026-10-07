import React from 'react';

interface SkillIconProps {
  name: string;
  href: string;
  icon: React.ReactNode;
  colorClass?: string;
}

const SkillIcon: React.FC<SkillIconProps> = ({
  name,
  href,
  icon,
  colorClass = "hover:text-blue-500",
}) => {
  return (
    <div className="relative group flex items-center justify-center">
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={name}
        className={`p-2 rounded-xl text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700/60 ${colorClass} transition-all duration-200 hover:scale-110 flex items-center justify-center cursor-pointer`}
      >
        {icon}
      </a>

      {/* Floating Tooltip Box */}
      <div 
        role="tooltip"
        className="pointer-events-none absolute bottom-full left-1/2 -translate-x-1/2 mb-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible translate-y-1 group-hover:translate-y-0 transition-all duration-200 z-30 flex flex-col items-center"
      >
        <span className="whitespace-nowrap rounded-md bg-slate-900 dark:bg-slate-100 px-2.5 py-1 text-xs font-semibold text-white dark:text-slate-900 shadow-lg">
          {name}
        </span>
        <span className="w-0 h-0 border-x-4 border-x-transparent border-t-4 border-t-slate-900 dark:border-t-slate-100 -mt-[1px]" />
      </div>
    </div>
  );
};

export default SkillIcon;
