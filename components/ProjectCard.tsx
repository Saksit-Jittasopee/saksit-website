import Image, { StaticImageData } from 'next/image';
import { FaGithub } from 'react-icons/fa';
import { FaRegImage } from "react-icons/fa6";

interface ProjectCardProps {
  title: string;
  description: string;
  imageSrc: string | StaticImageData;
  link: string;
  imageFile: string;
  tags: string[];
}

const ProjectCard = ({ title, description, imageSrc, link, imageFile, tags }: ProjectCardProps) => {
  return (
    <div className="flex flex-col m-4 h-full rounded-xl shadow-md overflow-hidden hover:shadow-lg hover:scale-102 transition-all duration-300 border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
      
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
        <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
          {title}
        </h3>
        
        <p className="text-sm mb-4 flex-grow line-clamp-3 text-gray-600 dark:text-gray-300">
          {description}
        </p>

        <div className="flex flex-wrap gap-2 mb-5">
          {tags.map((tag, index) => (
            <span 
              key={index} 
              className="px-2 py-1 text-xs font-semibold text-gray-700 bg-gray-100 rounded-md dark:bg-gray-700 dark:text-gray-200"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className='flex flex-row'>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline font-medium mt-auto"
        >
          <FaGithub size={20} />
          <span>View on GitHub</span>
        </a>

        <a
          href={imageFile}
          target="_blank"
          rel="noopener noreferrer"
          className="ml-5 inline-flex items-center gap-2 text-green-600 dark:text-green-400 hover:underline font-medium mt-auto"
        >
          <FaRegImage size={20} />
          <span>View Picture</span>
        </a>
      </div>
      </div>
    </div>
  );
};

export default ProjectCard;