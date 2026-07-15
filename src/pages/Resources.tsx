import React from 'react';
import { motion } from 'framer-motion';
import { DownloadIcon, ArrowUpRightIcon } from 'lucide-react';
import { PageHero } from '../components/ui/PageHero';
import { SectionHeading } from '../components/ui/Section';
import { IMAGES, RESOURCE_GUIDES } from '../data/siteData';
const DOWNLOADS = [
'Oakland Lookbook 2026',
'Product Catalogue',
'Studio Brochure'];

export function Resources() {
  return (
    <div>
      <PageHero
        eyebrow="Resources · Oakland"
        title="Insights & Inspiration"
        image={IMAGES.trends}
        imageAlt="California modern living room with sculptural furniture and natural light" />
      
      <section className="max-w-[1400px] mx-auto px-5 md:px-10 py-24">
        <SectionHeading
          eyebrow="Journal"
          title="Guides & Articles"
          className="mb-14" />
        
        <div className="grid md:grid-cols-2 gap-6">
          {RESOURCE_GUIDES.map((guide, i) =>
          <motion.a
            key={guide.title}
            href="#"
            initial={{
              opacity: 0,
              y: 24
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
              delay: i % 2 * 0.1
            }}
            className="group relative block aspect-[16/9] overflow-hidden bg-ink">
            
              <img
              src={guide.image}
              alt={guide.alt}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            
              <div className="absolute inset-0 bg-ink/40 group-hover:bg-ink/55 transition-colors" />
              <div className="absolute inset-0 p-8 flex flex-col justify-between">
                <span className="self-start text-white/80 text-xs uppercase tracking-[0.2em]">
                  {guide.tag}
                </span>
                <div className="flex items-end justify-between gap-4">
                  <h3 className="font-serif text-2xl md:text-3xl text-white max-w-sm">
                    {guide.title}
                  </h3>
                  <ArrowUpRightIcon className="w-6 h-6 text-white shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            </motion.a>
          )}
        </div>
      </section>
      <section className="bg-bone-deep py-24">
        <div className="max-w-[1400px] mx-auto px-5 md:px-10">
          <SectionHeading eyebrow="Free" title="Downloads" className="mb-10" />
          <div className="grid md:grid-cols-3 gap-4">
            {DOWNLOADS.map((download) =>
            <a
              key={download}
              href="#"
              className="group flex items-center justify-between bg-bone border border-ink/10 p-6 hover:border-terracotta transition-colors">
              
                <span className="font-serif text-xl text-ink">{download}</span>
                <DownloadIcon className="w-5 h-5 text-terracotta group-hover:translate-y-0.5 transition-transform" />
              </a>
            )}
          </div>
        </div>
      </section>
    </div>);

}