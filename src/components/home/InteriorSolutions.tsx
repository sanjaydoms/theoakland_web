import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRightIcon } from 'lucide-react';
import { SOLUTIONS } from '../../data/siteData';
export function InteriorSolutions() {
  const [active, setActive] = useState(0);
  const solution = SOLUTIONS[active];
  return (
    <section className="max-w-[1400px] mx-auto px-5 md:px-10 py-24 md:py-32">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div className="relative aspect-[3/4] overflow-hidden bg-bone-deep order-2 lg:order-1">
          <AnimatePresence mode="wait">
            <motion.img
              key={solution.name}
              src={solution.image}
              alt={solution.alt}
              initial={{
                opacity: 0,
                scale: 1.05
              }}
              animate={{
                opacity: 1,
                scale: 1
              }}
              exit={{
                opacity: 0
              }}
              transition={{
                duration: 0.6
              }}
              className="absolute inset-0 w-full h-full object-cover" />
            
          </AnimatePresence>
        </div>
        <div className="order-1 lg:order-2">
          <span className="block text-xs uppercase tracking-[0.3em] text-terracotta mb-4">
            What We Do
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-ink mb-8">
            Interior Solutions
          </h2>
          <ul className="divide-y divide-ink/10 border-t border-ink/10">
            {SOLUTIONS.map((item, i) =>
            <li key={item.name}>
                <button
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                className={`group w-full flex items-center justify-between py-5 text-left transition-colors ${active === i ? 'text-terracotta' : 'text-ink'}`}>
                
                  <span className="font-serif text-2xl md:text-3xl">
                    {item.name}
                  </span>
                  <ArrowRightIcon
                  className={`w-5 h-5 transition-all ${active === i ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'}`} />
                
                </button>
              </li>
            )}
          </ul>
        </div>
      </div>
    </section>);

}