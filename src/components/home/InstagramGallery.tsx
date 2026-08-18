import React from 'react';
import { motion } from 'framer-motion';
import { InstagramIcon } from 'lucide-react';
import { BRAND, INSTAGRAM_POSTS } from '../../data/siteData';
import { SectionHeading } from '../ui/Section';
export function InstagramGallery() {
  return (
    <section className="max-w-[1400px] mx-auto px-5 md:px-10 py-24 md:py-32">
      <div className="flex flex-col items-center text-center mb-14">
        <SectionHeading
          eyebrow="Follow Along"
          title={BRAND.socialHandle}
          align="center" />
        
      </div>
      <div className="grid grid-cols-3 gap-2 md:gap-4">
        {INSTAGRAM_POSTS.map((post, i) =>
        <motion.a
          key={post.alt}
          href="#"
          aria-label={`View ${post.alt}`}
          initial={{
            opacity: 0
          }}
          whileInView={{
            opacity: 1
          }}
          viewport={{
            once: true
          }}
          transition={{
            duration: 0.4,
            delay: i % 3 * 0.05
          }}
          className="group relative aspect-square overflow-hidden bg-bone-deep">
          
            <img
            src={post.image}
            alt={post.alt}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
          
            <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/40 flex items-center justify-center transition-colors">
              <InstagramIcon
              className="w-7 h-7 text-white opacity-0 group-hover:opacity-100 transition-opacity"
              strokeWidth={1.5} />
            
            </div>
          </motion.a>
        )}
      </div>
    </section>);

}