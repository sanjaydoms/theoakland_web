import React from 'react';
import { motion } from 'framer-motion';
import {
  GemIcon,
  PenToolIcon,
  WrenchIcon,
  LifeBuoyIcon,
  ShieldCheckIcon } from
'lucide-react';
import { WHY_US } from '../../data/siteData';
import { SectionHeading } from '../ui/Section';
const ICONS = [GemIcon, PenToolIcon, WrenchIcon, LifeBuoyIcon, ShieldCheckIcon];
export function WhyChooseUs() {
  return (
    <section className="max-w-[1400px] mx-auto px-5 md:px-10 py-24 md:py-32">
      <SectionHeading
        eyebrow="Our Promise"
        title="Why Choose Us"
        align="center"
        className="mb-16 max-w-2xl" />
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-px bg-ink/10 border border-ink/10">
        {WHY_US.map((item, i) => {
          const Icon = ICONS[i];
          return (
            <motion.div
              key={item.title}
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
                delay: i * 0.08
              }}
              className="bg-bone p-8 text-center group hover:bg-bone-deep transition-colors">
              
              <Icon
                className="w-8 h-8 text-terracotta mx-auto mb-5 group-hover:scale-110 transition-transform"
                strokeWidth={1.2} />
              
              <h3 className="font-serif text-xl text-ink mb-2">{item.title}</h3>
              <p className="text-taupe text-sm leading-relaxed">{item.desc}</p>
            </motion.div>);

        })}
      </div>
    </section>);

}