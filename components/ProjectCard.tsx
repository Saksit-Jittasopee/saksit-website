import Image, { StaticImageData } from 'next/image';
import { FaGithub } from 'react-icons/fa';

interface ProjectCardProps {
  title: string;       
  description: string; 
  imageSrc: string | StaticImageData; 
  link: string;       
}

const ProjectCard = ({ title, description, imageSrc, link }: ProjectCardProps) => {
  return (
    <div className="flex flex-col m-4 h-full bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden hover:shadow-lg hover:scale-100 transition-shadow duration-300 border border-gray-200 dark:border-gray-700">
      
      <div className="relative h-48 sm:h-56 w-full">
        <Image
          src={imageSrc}
          alt={title}
          fill 
          style={{ objectFit: 'cover' }}
          className="w-full h-full"
        />
      </div>

      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
          {title}
        </h3>
        
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-5 flex-grow line-clamp-3">
          {description}
        </p>

        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline font-medium mt-auto"
        >
          <FaGithub size={20} />
          <span>View on GitHub</span>
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;