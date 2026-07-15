import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { PROJECTS } from '../../data/siteData';
const SPAN = ['row-span-2', '', '', 'row-span-2', '', ''];
const TREE_RING_ART = "/pasted-image.jpg";

export function SignatureProjects() {
  return (
    <section className="relative overflow-hidden bg-ink py-24 md:py-32">
      <svg
        aria-hidden="true"
        viewBox="0 190 576 386"
        preserveAspectRatio="xMidYMid slice"
        className="pointer-events-none absolute -right-24 -bottom-10 hidden h-[500px] w-[740px] lg:block">
        
        <defs>
          <filter
            id="signature-projects-tree-ring"
            x="0"
            y="0"
            width="576"
            height="576"
            filterUnits="userSpaceOnUse">
            
            <feColorMatrix
              in="SourceGraphic"
              type="matrix"
              values="0 0 0 0 0
                      0 0 0 0 0
                      0 0 0 0 0
                      -0.299 -0.587 -0.114 0 1"



              result="treeRingMask" />
            
            <feFlood floodColor="#f5f1ea" floodOpacity="0.7" result="cream" />
            <feComposite in="cream" in2="treeRingMask" operator="in" />
          </filter>
        </defs>
        <image
          href={TREE_RING_ART}
          x="0"
          y="0"
          width="576"
          height="576"
          filter="url(#signature-projects-tree-ring)" />
        
      </svg>

      <div className="relative z-10 max-w-[1400px] mx-auto px-5 md:px-10">
        <div className="mb-14">
          <span className="block text-xs uppercase tracking-[0.3em] text-terracotta mb-4">
            Portfolio
          </span>
          <h2 className="font-serif text-4xl md:text-6xl text-bone">
            Signature Projects
          </h2>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-3 auto-rows-[220px] md:auto-rows-[280px] gap-4">
          {PROJECTS.map((project, i) =>
          <motion.div
            key={project.title}
            initial={{
              opacity: 0,
              scale: 0.96
            }}
            whileInView={{
              opacity: 1,
              scale: 1
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.6,
              delay: i % 3 * 0.08
            }}
            className={SPAN[i]}>
            
              <Link
              to="/projects"
              className="group block relative h-full overflow-hidden bg-bone-deep">
              
                <img
                src={project.image}
                alt={project.alt}
                className="w-full h-full object-cover transition-transform duration-[900ms] group-hover:scale-110" />
              
                <div className="absolute inset-0 bg-ink/30 group-hover:bg-ink/50 transition-colors" />
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <span className="text-white/70 text-[10px] uppercase tracking-[0.25em] mb-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    View Project
                  </span>
                  <h3 className="font-serif text-2xl md:text-3xl text-white">
                    {project.title}
                  </h3>
                </div>
              </Link>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}