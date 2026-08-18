import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRightIcon } from 'lucide-react';
import { CATEGORIES } from '../../data/siteData';
import { SectionHeading } from '../ui/Section';
export function Categories() {
  return (
    <section className="max-w-[1400px] mx-auto px-5 md:px-10 py-24 md:py-32">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
        <SectionHeading eyebrow="Browse" title="Product Categories" />
        <p className="text-taupe max-w-sm md:text-right">
          Everything you need to compose a complete, considered interior —
          organised by category.
        </p>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {CATEGORIES.map((cat, i) =>
        <motion.div
          key={cat.slug}
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
            duration: 0.6,
            delay: i % 4 * 0.08
          }}>
          
            <Link
            to="/products"
            className="group block relative bg-ink aspect-[4/5] overflow-hidden">
            
              <img
              src={cat.image}
              alt={cat.alt}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            
              <div className="absolute inset-0 bg-ink/35 group-hover:bg-ink/55 transition-colors" />
              <div className="relative h-full flex flex-col justify-between p-6 text-white">
                <span className="text-white/70 text-xs">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div className="translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
                  <ArrowUpRightIcon className="w-6 h-6 text-white mb-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <h3 className="font-serif text-2xl md:text-3xl">
                    {cat.name}
                  </h3>
                  <p className="text-white/75 text-sm mt-1 max-h-0 group-hover:max-h-20 overflow-hidden transition-all duration-500">
                    {cat.blurb}
                  </p>
                </div>
              </div>
            </Link>
          </motion.div>
        )}
      </div>
    </section>);

}