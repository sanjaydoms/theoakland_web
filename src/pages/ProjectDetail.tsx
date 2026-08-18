import React from 'react';
import { motion } from 'framer-motion';
import { PlayIcon, QuoteIcon } from 'lucide-react';
import { PageHero } from '../components/ui/PageHero';
import { SectionHeading, Reveal } from '../components/ui/Section';
import { IMAGES, MATERIALS } from '../data/siteData';
const GALLERY = [
{
  image: IMAGES.hillsideProject,
  alt: 'Open-plan Redwood House with Bay view'
},
{
  image: IMAGES.dining,
  alt: 'Oak dining room at Redwood House'
},
{
  image: IMAGES.kitchen,
  alt: 'Oak and stone kitchen at Redwood House'
},
{
  image: IMAGES.material,
  alt: 'Natural stone and white oak material palette'
},
{
  image: IMAGES.bedroom,
  alt: 'Layered primary bedroom at Redwood House'
},
{
  image: IMAGES.accessories,
  alt: 'Curated objects in the Redwood House living room'
}];

export function ProjectDetail() {
  return (
    <div>
      <PageHero
        eyebrow="Oakland Hills · Residential"
        title="Redwood House"
        image={IMAGES.hillsideProject}
        imageAlt="Redwood House, a warm Oakland Hills home with a Bay view" />
      
      <section className="max-w-[1400px] mx-auto px-5 md:px-10 py-24 grid lg:grid-cols-3 gap-12">
        {[
        {
          title: 'The Challenge',
          description:
          'A hillside home with extraordinary Bay views, but disconnected rooms that kept the landscape at a distance.'
        },
        {
          title: 'The Solution',
          description:
          'A material-led plan of white oak, limestone and quiet textiles that opens the shared spaces to light, views and one another.'
        },
        {
          title: 'The Outcome',
          description:
          'A serene family home that feels grounded in its Oakland setting — tactile, generous and made for everyday gathering.'
        }].
        map((block, i) =>
        <Reveal key={block.title} delay={i * 0.1}>
            <span className="block text-xs uppercase tracking-[0.3em] text-terracotta mb-3">
              {block.title}
            </span>
            <p className="text-taupe leading-relaxed">{block.description}</p>
          </Reveal>
        )}
      </section>
      <section
        aria-label="Redwood House gallery"
        className="max-w-[1400px] mx-auto px-5 md:px-10 pb-24 grid grid-cols-2 md:grid-cols-3 gap-4">
        
        {GALLERY.map((item, i) =>
        <motion.img
          key={item.alt}
          src={item.image}
          alt={item.alt}
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
            delay: i % 3 * 0.06
          }}
          className={`w-full object-cover ${i === 0 ? 'col-span-2 row-span-2 aspect-square' : 'aspect-square'}`} />

        )}
      </section>
      <section className="bg-bone-deep py-24">
        <div className="max-w-[1400px] mx-auto px-5 md:px-10">
          <SectionHeading
            eyebrow="Palette"
            title="Materials Used"
            className="mb-10" />
          
          <div className="flex flex-wrap gap-3">
            {MATERIALS.slice(0, 6).map((material) =>
            <span
              key={material.name}
              className="px-5 py-2.5 bg-bone text-ink text-sm border border-ink/10">
              
                {material.name}
              </span>
            )}
          </div>
        </div>
      </section>
      <section className="max-w-[1400px] mx-auto px-5 md:px-10 py-24 grid lg:grid-cols-2 gap-12 items-center">
        <div className="relative aspect-video overflow-hidden group cursor-pointer">
          <img
            src={IMAGES.hillsideProject}
            alt="Redwood House walkthrough preview"
            className="w-full h-full object-cover" />
          
          <div className="absolute inset-0 bg-ink/40 flex items-center justify-center">
            <div className="w-20 h-20 rounded-full bg-bone/90 flex items-center justify-center group-hover:scale-110 transition-transform">
              <PlayIcon className="w-7 h-7 text-ink ml-1" fill="currentColor" />
            </div>
          </div>
        </div>
        <div>
          <QuoteIcon
            className="w-10 h-10 text-terracotta mb-5"
            strokeWidth={1} />
          
          <p className="font-serif text-3xl text-ink leading-snug">
            Shrutham gave us a home that feels like us — only more beautiful
            than we imagined.
          </p>
          <p className="mt-6 text-taupe">The Brooks Family, Oakland Hills</p>
        </div>
      </section>
    </div>);

}