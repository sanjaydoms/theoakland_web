import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRightIcon } from 'lucide-react';
import { IMAGES } from '../../data/siteData';
export function FinalCTA() {
  return (
    <section className="relative overflow-hidden">
      <img
        src={IMAGES.hillsideProject}
        alt="Oakland Hills residence opening onto the Bay"
        className="absolute inset-0 w-full h-full object-cover" />
      
      <div className="absolute inset-0 bg-ink/70" />
      <div className="relative max-w-4xl mx-auto px-5 md:px-10 py-32 md:py-44 text-center">
        <motion.h2
          initial={{
            opacity: 0,
            y: 30
          }}
          whileInView={{
            opacity: 1,
            y: 0
          }}
          viewport={{
            once: true
          }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1]
          }}
          className="font-serif text-4xl md:text-6xl lg:text-7xl text-bone leading-[1.05]">
          
          Let&apos;s Design Your Oakland Home
        </motion.h2>
        <motion.div
          initial={{
            opacity: 0,
            y: 20
          }}
          whileInView={{
            opacity: 1,
            y: 0
          }}
          viewport={{
            once: true
          }}
          transition={{
            duration: 0.6,
            delay: 0.2
          }}
          className="mt-10">
          
          <Link
            to="/contact"
            className="group inline-flex items-center gap-3 bg-bone text-ink px-9 py-4 text-xs uppercase tracking-[0.2em] hover:bg-terracotta hover:text-white transition-colors">
            
            Book Consultation{' '}
            <ArrowRightIcon className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>);

}