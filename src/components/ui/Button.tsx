import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { buttonHover } from '@/utils/animations';

interface ButtonProps {
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
  children: React.ReactNode;
  download?: boolean;
  target?: string;
  rel?: string;
  type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = ({
  href,
  onClick,
  variant = 'primary',
  className = '',
  children,
  download,
  target,
  rel,
  type = 'button',
}) => {
  // Base styles for all buttons
  const baseStyles = 'inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium transition-all duration-300 text-sm md:text-base';
  
  // Variant-specific styles
  const variantStyles = {
    primary: 'bg-gradient-to-r from-purple-600 to-blue-500 text-white hover:from-purple-700 hover:to-blue-600 shadow-lg',
    secondary: 'bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 shadow-md',
    outline: 'border-2 border-purple-500 text-purple-500 hover:bg-purple-500/10',
  };
  
  // Combine all styles
  const buttonStyles = `${baseStyles} ${variantStyles[variant]} ${className}`;
  
  // If href is provided, render as Link
  if (href) {
    return (
      <motion.div
        initial="initial"
        whileHover="hover"
        variants={buttonHover}
      >
        <Link 
          href={href}
          className={buttonStyles}
          download={download}
          target={target}
          rel={rel}
        >
          {children}
        </Link>
      </motion.div>
    );
  }
  
  // Otherwise, render as button
  return (
    <motion.button
      type={type}
      onClick={onClick}
      className={buttonStyles}
      initial="initial"
      whileHover="hover"
      variants={buttonHover}
    >
      {children}
    </motion.button>
  );
};

export default Button;