import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  QuoteIcon,
  PlayIcon,
  ArrowLeftIcon,
  ArrowRightIcon } from
'lucide-react';
import { TESTIMONIALS } from '../../data/siteData';
const TREE_RING_ART = "/pasted-image.jpg";

export function Testimonials() {
  const [idx, setIdx] = useState(0);
  const testimonial = TESTIMONIALS[idx];
  const move = (direction: number) =>
  setIdx(
    (current) =>
    (current + direction + TESTIMONIALS.length) % TESTIMONIALS.length
  );
  return (
    <section className="relative overflow-hidden bg-ink py-24 md:py-32 text-bone">
      <svg
        aria-hidden="true"
        viewBox="0 190 576 386"
        preserveAspectRatio="xMidYMid slice"
        className="pointer-events-none absolute -right-24 -bottom-10 hidden h-[500px] w-[740px] lg:block">
        
        <defs>
          <filter
            id="testimonials-tree-ring"
            x="0"
            y="0"
            width="576"
            height="576"
            filterUnits="userSpaceOnUse">
            
            <feColorMatrix
              in="SourceGraphic"
              type="matrix"
              values="0 0 0 0 0
                      0 0 0 0 0
                      0 0 0 0 0
                      -0.299 -0.587 -0.114 0 1"



              result="treeRingMask" />
            
            <feFlood floodColor="#f5f1ea" floodOpacity="0.7" result="cream" />
            <feComposite in="cream" in2="treeRingMask" operator="in" />
          </filter>
        </defs>
        <image
          href={TREE_RING_ART}
          x="0"
          y="0"
          width="576"
          height="576"
          filter="url(#testimonials-tree-ring)" />
        
      </svg>

      <div className="relative z-10 max-w-[1400px] mx-auto px-5 md:px-10 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <span className="block text-xs uppercase tracking-[0.3em] text-terracotta mb-8">
            Client Voices
          </span>
          <QuoteIcon
            className="w-10 h-10 text-terracotta mb-6"
            strokeWidth={1} />
          
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={idx}
              initial={{
                opacity: 0,
                y: 20
              }}
              animate={{
                opacity: 1,
                y: 0
              }}
              exit={{
                opacity: 0,
                y: -20
              }}
              transition={{
                duration: 0.4
              }}>
              
              <p className="font-serif text-3xl md:text-4xl leading-[1.25]">
                {testimonial.quote}
              </p>
              <footer className="mt-8">
                <span className="block text-lg">{testimonial.name}</span>
                <span className="text-bone/50 text-sm">{testimonial.role}</span>
              </footer>
            </motion.blockquote>
          </AnimatePresence>
          <div className="flex gap-3 mt-10">
            <button
              onClick={() => move(-1)}
              aria-label="Previous testimonial"
              className="w-12 h-12 border border-bone/30 flex items-center justify-center hover:bg-bone hover:text-ink transition-colors">
              
              <ArrowLeftIcon className="w-5 h-5" />
            </button>
            <button
              onClick={() => move(1)}
              aria-label="Next testimonial"
              className="w-12 h-12 border border-bone/30 flex items-center justify-center hover:bg-bone hover:text-ink transition-colors">
              
              <ArrowRightIcon className="w-5 h-5" />
            </button>
          </div>
        </div>
        <div className="relative aspect-video overflow-hidden group cursor-pointer">
          <img
            src={testimonial.image}
            alt={testimonial.alt}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
          
          <div className="absolute inset-0 bg-ink/40 flex items-center justify-center">
            <div className="w-20 h-20 rounded-full bg-bone/90 flex items-center justify-center group-hover:scale-110 transition-transform">
              <PlayIcon className="w-7 h-7 text-ink ml-1" fill="currentColor" />
            </div>
          </div>
          <span className="absolute bottom-5 left-5 text-white text-xs uppercase tracking-[0.2em]">
            Watch Client Review
          </span>
        </div>
      </div>
    </section>);

}