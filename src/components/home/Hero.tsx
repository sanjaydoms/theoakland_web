import React from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRightIcon, ChevronDownIcon } from 'lucide-react';
import { BRAND, IMAGES } from '../../data/siteData';

export function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 600], [0, 160]);
  const scale = useTransform(scrollY, [0, 600], [1.05, 1.2]);
  const overlayOpacity = useTransform(scrollY, [0, 500], [0.45, 0.7]);
  return (
    <section className="relative h-screen w-full overflow-hidden bg-ink">
      <motion.div
        style={{
          y,
          scale
        }}
        className="absolute inset-0">
        
        <img
          src={IMAGES.hero}
          alt="Oakland Hills living room with oak trees and Bay Area views"
          className="w-full h-full object-cover" />
        
      </motion.div>
      <motion.div
        style={{
          opacity: overlayOpacity
        }}
        className="absolute inset-0 bg-gradient-to-b from-ink/40 via-ink/20 to-ink/70" />
      
      <div className="relative h-full max-w-[1400px] mx-auto px-5 md:px-10 flex flex-col justify-center">
        <motion.span
          initial={{
            opacity: 0,
            y: 20
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 0.8,
            delay: 0.3
          }}
          className="text-white/80 text-xs uppercase tracking-[0.4em] mb-6">
          
          {' Oakland'}
        </motion.span>
        <motion.h1
          initial={{
            opacity: 0,
            y: 30
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 1,
            delay: 0.5,
            ease: [0.22, 1, 0.36, 1]
          }}
          className="font-serif text-white text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.02] max-w-4xl">
          
          Crafting Timeless Spaces for Bay Area Living
        </motion.h1>
        <motion.div
          initial={{
            opacity: 0,
            y: 20
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 0.8,
            delay: 0.9
          }}
          className="mt-10">
          
          <Link
            to="/products"
            className="group inline-flex items-center gap-3 bg-bone text-ink px-8 py-4 text-xs uppercase tracking-[0.2em] hover:bg-terracotta hover:text-white transition-colors">
            
            Explore Collection{' '}
            <ArrowRightIcon className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
      <motion.div
        initial={{
          opacity: 0
        }}
        animate={{
          opacity: 1
        }}
        transition={{
          delay: 1.4
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/70 flex flex-col items-center gap-2">
        
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <motion.div
          animate={{
            y: [0, 8, 0]
          }}
          transition={{
            repeat: Infinity,
            duration: 1.8
          }}>
          
          <ChevronDownIcon className="w-5 h-5" />
        </motion.div>
      </motion.div>
    </section>);

}