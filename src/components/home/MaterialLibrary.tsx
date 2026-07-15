import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MATERIALS } from '../../data/siteData';
import { SectionHeading } from '../ui/Section';
export function MaterialLibrary() {
  const [hover, setHover] = useState<number | null>(null);
  return (
    <section className="bg-bone-deep py-24 md:py-32">
      <div className="max-w-[1400px] mx-auto px-5 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <SectionHeading eyebrow="Tactile" title="Material Library" />
          <p className="text-taupe max-w-sm md:text-right">
            An interactive palette of the finishes we work with — hover to
            explore each material.
          </p>
        </div>
        <div className="grid grid-cols-3 lg:grid-cols-3 gap-4">
          {MATERIALS.map((material, i) =>
          <motion.div
            key={material.name}
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
              duration: 0.5,
              delay: i % 3 * 0.06
            }}
            onMouseEnter={() => setHover(i)}
            onMouseLeave={() => setHover(null)}
            className="group relative aspect-square md:aspect-[4/3] overflow-hidden bg-ink cursor-pointer">
            
              <img
              src={material.image}
              alt={material.alt}
              className={`w-full h-full object-cover transition-all duration-700 ${hover === i ? 'scale-110 grayscale-0' : 'grayscale'}`} />
            
              <div className="absolute inset-0 bg-ink/40 group-hover:bg-ink/20 transition-colors" />
              <div className="absolute inset-0 flex items-center justify-center p-3 text-center">
                <h3 className="font-serif text-lg md:text-2xl text-white">
                  {material.name}
                </h3>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}