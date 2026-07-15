import React from 'react';
import { motion } from 'framer-motion';
interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  align?: 'left' | 'center';
  className?: string;
}
export function SectionHeading({
  eyebrow,
  title,
  align = 'left',
  className = ''
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 24
      }}
      whileInView={{
        opacity: 1,
        y: 0
      }}
      viewport={{
        once: true,
        margin: '-80px'
      }}
      transition={{
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1]
      }}
      className={`${align === 'center' ? 'text-center mx-auto' : ''} ${className}`}>
      
      {eyebrow &&
      <span className="block text-xs uppercase tracking-[0.3em] text-terracotta mb-4">
          {eyebrow}
        </span>
      }
      <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-ink">
        {title}
      </h2>
    </motion.div>);

}
interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}
export function Reveal({ children, delay = 0, className = '' }: RevealProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 28
      }}
      whileInView={{
        opacity: 1,
        y: 0
      }}
      viewport={{
        once: true,
        margin: '-60px'
      }}
      transition={{
        duration: 0.7,
        delay,
        ease: [0.22, 1, 0.36, 1]
      }}
      className={className}>
      
      {children}
    </motion.div>);

}