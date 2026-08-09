import Image, { StaticImageData } from 'next/image';
import { FaGithub } from 'react-icons/fa';
import { FaRegImage } from "react-icons/fa6";

interface ActivityCardProps {
  title: string;
  description: string;
  imageSrc: string | StaticImageData;
}

const ActivityCard = ({ title, description, imageSrc }: ActivityCardProps) => {
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
      </div>
      </div>
  );
};

export default ActivityCard;