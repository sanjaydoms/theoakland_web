import React from 'react';
import { Link } from 'react-router-dom';
import { DownloadIcon, ArrowUpRightIcon } from 'lucide-react';
import { PageHero } from '../components/ui/PageHero';
import { SectionHeading, Reveal } from '../components/ui/Section';
import { useSeo } from '../hooks/useSeo';
import { IMAGES } from '../data/siteData';
import { RESOURCES, RESOURCE_CATEGORIES, SITE_URL } from '../data/resources';
const DOWNLOADS = [
'The Oakland Lookbook 2026',
'Product Catalogue',
'Studio Brochure'];

const CATEGORY_BLURBS: Record<string, string> = {
  'Planning & Cost': 'Budgets, timelines and how to hire — what to know before you start an interior project in Hyderabad.',
  Materials: 'Plywood, laminates, veneer, stone and flooring compared for Indian homes and climate.',
  Style: 'Colour, trends and the ideas shaping contemporary Indian interiors.',
  Care: 'Keeping natural wood, stone and fabric finishes beautiful for decades.'
};
export function Resources() {
  useSeo({
    title: 'Interior Design Guides & Resources for Hyderabad Homes | The Oakland',
    description:
    'Free guides on interior design cost, modular kitchens, wardrobes, materials, flooring, colour palettes, 2026 trends and finish care — written by The Oakland, an interior design studio in Gachibowli, Hyderabad.',
    canonical: `${SITE_URL}/resources`,
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      name: 'Interior Design Guides & Resources',
      url: `${SITE_URL}/resources`,
      hasPart: RESOURCES.map((r) => ({
        '@type': 'Article',
        headline: r.title,
        url: `${SITE_URL}/resources/${r.slug}`
      }))
    }
  });
  return (
    <div>
      <PageHero
        eyebrow="Resources · The Oakland"
        title="Interior Design Guides for Hyderabad Homes"
        subtitle="Practical, plain-language guides on cost, materials, kitchens, wardrobes and style — from our design studio in Gachibowli."
        image={IMAGES.trends}
        imageAlt="Contemporary living room with sculptural furniture and natural light" />

      {RESOURCE_CATEGORIES.map((category, ci) =>
      <section
        key={category}
        aria-labelledby={`cat-${ci}`}
        className={`py-20 ${ci % 2 ? 'bg-bone-deep' : ''}`}>

          <div className="max-w-[1400px] mx-auto px-5 md:px-10">
            <div className="max-w-2xl mb-12">
              <SectionHeading eyebrow={`0${ci + 1}`} title={category} />
              <p id={`cat-${ci}`} className="text-taupe mt-4 leading-relaxed">
                {CATEGORY_BLURBS[category]}
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {RESOURCES.filter((r) => r.category === category).map((guide, i) =>
            <Reveal key={guide.slug} delay={i * 0.08}>
                  <Link
                to={`/resources/${guide.slug}`}
                className="group relative block aspect-[16/9] overflow-hidden bg-ink">

                    <img
                  src={guide.image}
                  alt={guide.alt}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />

                    <div className="absolute inset-0 bg-ink/45 group-hover:bg-ink/60 transition-colors" />
                    <div className="absolute inset-0 p-8 flex flex-col justify-between">
                      <span className="self-start text-white/80 text-xs uppercase tracking-[0.2em]">
                        {guide.readTime}
                      </span>
                      <div className="flex items-end justify-between gap-4">
                        <div>
                          <h3 className="font-serif text-2xl md:text-3xl text-white max-w-md leading-tight">
                            {guide.title}
                          </h3>
                          <p className="text-white/70 text-sm mt-2 max-w-md line-clamp-2">
                            {guide.metaDescription}
                          </p>
                        </div>
                        <ArrowUpRightIcon className="w-6 h-6 text-white shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                    </div>
                  </Link>
                </Reveal>
            )}
            </div>
          </div>
        </section>
      )}
      <section className="py-20">
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
