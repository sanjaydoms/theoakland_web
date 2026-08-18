import React from 'react';
import { motion } from 'framer-motion';
interface PageHeroProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
  image: string;
  imageAlt: string;
}
export function PageHero({
  eyebrow,
  title,
  subtitle,
  image,
  imageAlt
}: PageHeroProps) {
  return (
    <section className="relative h-[70vh] min-h-[480px] w-full overflow-hidden bg-ink">
      <img
        src={image}
        alt={imageAlt}
        className="absolute inset-0 w-full h-full object-cover" />
      
      <div className="absolute inset-0 bg-ink/55" />
      <div className="relative h-full max-w-[1400px] mx-auto px-5 md:px-10 flex flex-col justify-end pb-16">
        <motion.span
          initial={{
            opacity: 0,
            y: 16
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 0.6
          }}
          className="text-white/80 text-xs uppercase tracking-[0.35em] mb-4">
          
          {eyebrow}
        </motion.span>
        <motion.h1
          initial={{
            opacity: 0,
            y: 24
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 0.8,
            delay: 0.1,
            ease: [0.22, 1, 0.36, 1]
          }}
          className="font-serif text-white text-5xl md:text-7xl leading-[1.03] max-w-3xl">
          
          {title}
        </motion.h1>
        {subtitle &&
        <motion.p
          initial={{
            opacity: 0
          }}
          animate={{
            opacity: 1
          }}
          transition={{
            duration: 0.6,
            delay: 0.3
          }}
          className="text-white/80 max-w-xl mt-6 text-lg">
          
            {subtitle}
          </motion.p>
        }
      </div>
    </section>);

}