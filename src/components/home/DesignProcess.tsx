import React from 'react';
import { motion } from 'framer-motion';
import { PROCESS } from '../../data/siteData';
import { SectionHeading } from '../ui/Section';
export function DesignProcess() {
  return (
    <section className="max-w-[1400px] mx-auto px-5 md:px-10 py-24 md:py-32">
      <SectionHeading
        eyebrow="How We Work"
        title="The Design Process"
        align="center"
        className="mb-20 max-w-2xl" />
      

      <div className="relative max-w-3xl mx-auto">
        <div className="absolute left-[27px] md:left-1/2 top-0 bottom-0 w-px bg-ink/15 md:-translate-x-1/2" />
        <div className="space-y-10">
          {PROCESS.map((step, i) =>
          <motion.div
            key={step}
            initial={{
              opacity: 0,
              x: -20
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{
              once: true,
              margin: '-40px'
            }}
            transition={{
              duration: 0.5
            }}
            className={`relative flex items-center gap-6 md:gap-0 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
            
              <div className="relative z-10 shrink-0 w-14 h-14 rounded-full bg-bone border border-ink/20 flex items-center justify-center font-serif text-xl text-terracotta md:absolute md:left-1/2 md:-translate-x-1/2">
                {i + 1}
              </div>
              <div
              className={`flex-1 md:w-1/2 ${i % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16 md:ml-auto'}`}>
              
                <h3 className="font-serif text-2xl md:text-3xl text-ink">
                  {step}
                </h3>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}