import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import { scaleOnHover } from '@/utils/animations';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  year: string;
  githubLink: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  technologies,
  year,
  githubLink,
}) => {
  return (
    <motion.div
      className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden shadow-xl"
      initial="initial"
      whileHover="hover"
      variants={scaleOnHover}
    >
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-bold text-white">{title}</h3>
          <span className="text-sm text-purple-300 bg-purple-900/30 px-2 py-1 rounded-full">
            {year}
          </span>
        </div>
        
        <p className="text-gray-300 mb-4 text-sm">
          {description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <span 
              key={index}
              className="text-xs bg-blue-900/30 text-blue-300 px-2 py-1 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex justify-end">
          <a 
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/70 hover:text-white transition-colors"
            aria-label={`View ${title} on GitHub`}
          >
            <FaGithub size={20} />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;