import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRightIcon } from 'lucide-react';
import { PageHero } from '../components/ui/PageHero';
import { CATEGORIES, IMAGES } from '../data/siteData';
export function Products() {
  return (
    <div>
      <PageHero
        eyebrow="Product Range · Oakland"
        title="Discover Premium Interior Collections"
        subtitle="Every category is designed as a complete system — curated to work beautifully together."
        image={IMAGES.collection}
        imageAlt="California modern Oakland living room with sculptural furniture" />
      
      <section className="max-w-[1400px] mx-auto px-5 md:px-10 py-24">
        <div className="grid gap-6 md:grid-cols-2">
          {CATEGORIES.map((category, i) =>
          <motion.div
            key={category.slug}
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
              delay: i % 2 * 0.1
            }}>
            
              <Link
              to="/products"
              className="group relative block aspect-[16/10] overflow-hidden bg-ink">
              
                <img
                src={category.image}
                alt={category.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              
                <div className="absolute inset-0 bg-ink/30 group-hover:bg-ink/45 transition-colors" />
                <div className="absolute inset-0 p-8 flex flex-col justify-between">
                  <ArrowUpRightIcon className="w-7 h-7 text-white self-end opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div>
                    <h3 className="font-serif text-3xl md:text-4xl text-white">
                      {category.name}
                    </h3>
                    <p className="text-white/70 mt-1">{category.blurb}</p>
                  </div>
                </div>
              </Link>
            </motion.div>
          )}
        </div>
      </section>
    </div>);

}