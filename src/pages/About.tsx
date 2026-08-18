import React from 'react';
import { motion } from 'framer-motion';
import { PageHero } from '../components/ui/PageHero';
import { SectionHeading, Reveal } from '../components/ui/Section';
import { IMAGES, STATS, TEAM } from '../data/siteData';
const PILLARS = [
{
  title: 'Vision',
  description:
  'To make the Bay Area’s everyday spaces feel more personal, grounded and enduring.'
},
{
  title: 'Mission',
  description:
  'To balance beauty and function through close listening, uncompromising craft and considered delivery.'
},
{
  title: 'Philosophy',
  description:
  'Timelessness over trends. We design rooms that grow more meaningful with every passing year.'
}];

export function About() {
  return (
    <div>
      <PageHero
        eyebrow="Our Story · Oakland"
        title="Designing Spaces That Endure"
        image={IMAGES.studio}
        imageAlt="Shrutham Oakland studio with material samples and design tools" />
      
      <section className="max-w-[1400px] mx-auto px-5 md:px-10 py-24 grid md:grid-cols-3 gap-10">
        {PILLARS.map((pillar, i) =>
        <Reveal key={pillar.title} delay={i * 0.1}>
            <span className="block text-xs uppercase tracking-[0.3em] text-terracotta mb-3">
              {pillar.title}
            </span>
            <p className="font-serif text-2xl text-ink leading-snug">
              {pillar.description}
            </p>
          </Reveal>
        )}
      </section>
      <section className="bg-bone-deep py-24">
        <div className="max-w-[1400px] mx-auto px-5 md:px-10 grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative aspect-[4/5] overflow-hidden">
            <img
              src={IMAGES.founder}
              alt="Asha Shrutham, founder and principal designer"
              className="w-full h-full object-cover" />
            
          </div>
          <div>
            <SectionHeading
              eyebrow="Meet the Founder"
              title="A Life in Design" />
            
            <p className="text-taupe mt-6 leading-relaxed">
              After two decades shaping Bay Area homes and workplaces, Asha
              Shrutham founded her Oakland studio on a simple belief: great
              design is felt, not just seen.
            </p>
            <p className="text-taupe mt-4 leading-relaxed">
              What began as a small, material-obsessed practice has grown into a
              full-service design house. The ethos remains unchanged — deep
              listening, honest materials, and relentless attention to detail.
            </p>
            <p className="mt-6 font-serif text-xl text-ink">
              — Asha Shrutham, Founder & Principal Designer
            </p>
          </div>
        </div>
      </section>
      <section className="max-w-[1400px] mx-auto px-5 md:px-10 py-24">
        <SectionHeading
          eyebrow="The People"
          title="Our Team"
          align="center"
          className="mb-14 max-w-xl" />
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {TEAM.map((member, i) =>
          <motion.div
            key={member.role}
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
            className="relative aspect-[4/5] overflow-hidden group bg-bone-deep">
            
              <img
              src={member.image}
              alt={member.alt}
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
            
              <div className="absolute inset-0 bg-gradient-to-t from-ink/60 to-transparent flex items-end p-5">
                <h3 className="font-serif text-2xl text-white">
                  {member.role}
                </h3>
              </div>
            </motion.div>
          )}
        </div>
      </section>
      <section className="bg-ink py-24 text-bone">
        <div className="max-w-[1400px] mx-auto px-5 md:px-10 grid grid-cols-2 lg:grid-cols-4 gap-10 text-center">
          {STATS.map((stat, i) =>
          <motion.div
            key={stat.label}
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
              delay: i * 0.1
            }}>
            
              <div className="font-serif text-5xl md:text-6xl text-terracotta">
                {stat.value}
              </div>
              <div className="text-bone/60 uppercase tracking-[0.2em] text-xs mt-3">
                {stat.label}
              </div>
            </motion.div>
          )}
        </div>
      </section>
    </div>);

}