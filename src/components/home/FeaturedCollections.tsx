import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRightIcon, ArrowLeftIcon } from 'lucide-react';
import { COLLECTIONS } from '../../data/siteData';
import { SectionHeading } from '../ui/Section';
export function FeaturedCollections() {
  const scroller = useRef<HTMLDivElement>(null);
  const scroll = (dir: number) =>
  scroller.current?.scrollBy({
    left: dir * 420,
    behavior: 'smooth'
  });
  return (
    <section className="bg-bone-deep py-24 md:py-32">
      <div className="max-w-[1400px] mx-auto px-5 md:px-10">
        <div className="flex items-end justify-between mb-14">
          <SectionHeading eyebrow="Editorial" title="Featured Collections" />
          <div className="hidden md:flex gap-3">
            <button
              onClick={() => scroll(-1)}
              aria-label="Previous collection"
              className="w-12 h-12 border border-ink/20 flex items-center justify-center hover:bg-ink hover:text-bone transition-colors">
              
              <ArrowLeftIcon className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll(1)}
              aria-label="Next collection"
              className="w-12 h-12 border border-ink/20 flex items-center justify-center hover:bg-ink hover:text-bone transition-colors">
              
              <ArrowRightIcon className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
      <div
        ref={scroller}
        className="no-scrollbar flex gap-6 overflow-x-auto px-5 md:px-10 snap-x snap-mandatory pb-2">
        
        {COLLECTIONS.map((collection, i) =>
        <motion.div
          key={collection.name}
          initial={{
            opacity: 0,
            x: 40
          }}
          whileInView={{
            opacity: 1,
            x: 0
          }}
          viewport={{
            once: true
          }}
          transition={{
            duration: 0.6,
            delay: i * 0.05
          }}
          className="snap-start shrink-0 w-[300px] md:w-[380px]">
          
            <Link to="/products" className="group block">
              <div className="relative aspect-[3/4] overflow-hidden bg-ink">
                <img
                src={collection.image}
                alt={collection.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              
                <div className="absolute inset-0 bg-gradient-to-t from-ink/60 to-transparent" />
                <span className="absolute top-5 left-5 text-white/70 text-xs">
                  {String(i + 1).padStart(2, '0')} /{' '}
                  {String(COLLECTIONS.length).padStart(2, '0')}
                </span>
              </div>
              <div className="pt-5">
                <h3 className="font-serif text-3xl text-ink">
                  {collection.name}
                </h3>
                <p className="text-taupe text-sm mt-1">{collection.desc}</p>
                <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-terracotta mt-4 group-hover:gap-3 transition-all">
                  Explore <ArrowRightIcon className="w-4 h-4" />
                </span>
              </div>
            </Link>
          </motion.div>
        )}
      </div>
    </section>);

}