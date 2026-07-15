import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { PageHero } from '../components/ui/PageHero';
import { IMAGES, PROJECTS } from '../data/siteData';
const FILTERS = [
'All',
'Residential',
'Commercial',
'Office',
'Hospitality',
'Villa',
'Apartment'];

export function Projects() {
  const [filter, setFilter] = useState('All');
  const visibleProjects =
  filter === 'All' ?
  PROJECTS :
  PROJECTS.filter(
    (project) => project.type === filter || project.filter === filter
  );
  return (
    <div>
      <PageHero
        eyebrow="Portfolio · Bay Area"
        title="Our Signature Projects"
        image={IMAGES.hillsideProject}
        imageAlt="Oakland Hills residence overlooking the Bay" />
      
      <section className="max-w-[1400px] mx-auto px-5 md:px-10 py-16">
        <div className="flex flex-wrap gap-3 mb-12">
          {FILTERS.map((item) =>
          <button
            key={item}
            type="button"
            onClick={() => setFilter(item)}
            aria-pressed={filter === item}
            className={`px-5 py-2.5 text-xs uppercase tracking-[0.15em] border transition-colors ${filter === item ? 'bg-ink text-bone border-ink' : 'border-ink/20 text-ink hover:border-ink'}`}>
            
              {item}
            </button>
          )}
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {visibleProjects.map((project, i) =>
          <motion.div
            key={project.title}
            layout
            initial={{
              opacity: 0,
              y: 24
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 0.5,
              delay: i % 3 * 0.08
            }}>
            
              <Link to="/projects/detail" className="group block">
                <div className="relative aspect-[4/3] overflow-hidden bg-ink">
                  <img
                  src={project.image}
                  alt={project.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                
                </div>
                <div className="pt-4">
                  <span className="text-terracotta text-xs uppercase tracking-[0.2em]">
                    {project.type}
                  </span>
                  <h3 className="font-serif text-2xl text-ink mt-1">
                    {project.title}
                  </h3>
                </div>
              </Link>
            </motion.div>
          )}
        </div>
      </section>
    </div>);

}