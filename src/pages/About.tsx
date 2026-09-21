import React from 'react';
import { motion } from 'framer-motion';
import { PageHero } from '../components/ui/PageHero';
import { SectionHeading, Reveal } from '../components/ui/Section';
import { useSeo } from '../hooks/useSeo';
import { BRAND, IMAGES, MISSION, STATS, TEAM, VALUES, VISION } from '../data/siteData';
import { SITE_URL } from '../data/resources';
const PILLARS = [
{
  title: 'Vision',
  description: VISION
},
{
  title: 'Mission',
  description: MISSION
},
{
  title: 'Promise',
  description: 'Premium design, quality craftsmanship and complete solutions — designed with purpose, delivered with care.'
}];

export function About() {
  useSeo({
    title: 'About The Oakland | Premium Home Solutions, Hyderabad',
    description: `${BRAND.description} Founded by Balaji Tammineedi with co-founders Raju Madhapuram and Gangadhar Rao Javvaji at Prism Mall, Gachibowli.`,
    canonical: `${SITE_URL}/about`,
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: BRAND.name,
      url: SITE_URL,
      description: BRAND.description,
      founder: TEAM.map((m) => ({ '@type': 'Person', name: m.name, jobTitle: m.role })),
      address: { '@type': 'PostalAddress', streetAddress: 'Prism Mall, Gachibowli', addressLocality: 'Hyderabad', addressCountry: 'IN' }
    }
  });
  const [founder, ...cofounders] = TEAM;
  return (
    <div>
      <PageHero
        eyebrow="Our Story · The Oakland"
        title="Creating Spaces. Defining Lifestyles."
        subtitle={BRAND.description}
        image={IMAGES.studio}
        imageAlt="The Oakland studio with material samples and design tools" />

      <section className="max-w-[1400px] mx-auto px-5 md:px-10 py-24">
        <Reveal className="max-w-3xl mb-20">
          <p className="font-serif text-2xl md:text-3xl text-ink leading-snug">
            We combine elegant design, quality craftsmanship and functional
            innovation to create spaces that are elegant, practical and built
            for modern living. From individual pieces to complete spaces, The
            Oakland delivers thoughtfully designed solutions with a commitment
            to quality, precision and customer satisfaction.
          </p>
          <p className="text-xs uppercase tracking-[0.3em] text-terracotta mt-8">
            {BRAND.verticals.join(' · ')}
          </p>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-10">
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
        </div>
      </section>

      <section className="bg-bone-deep py-24">
        <div className="max-w-[1400px] mx-auto px-5 md:px-10 grid lg:grid-cols-2 gap-16 items-start">
          <div className="relative aspect-[4/5] overflow-hidden lg:sticky lg:top-28">
            <img
              src={founder.image}
              alt={founder.alt}
              className="w-full h-full object-cover" />
          </div>
          <div>
            <SectionHeading eyebrow="Meet the Founder" title={founder.name} />
            <p className="text-xs uppercase tracking-[0.3em] text-terracotta mt-4">
              {founder.role}
            </p>
            {founder.bio.map((para) =>
            <p key={para} className="text-taupe mt-5 leading-relaxed">
                {para}
              </p>
            )}
          </div>
        </div>
      </section>

      <section className="max-w-[1400px] mx-auto px-5 md:px-10 py-24">
        <SectionHeading
          eyebrow="Leadership"
          title="Co-Founders"
          className="mb-14 max-w-xl" />
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {cofounders.map((member, i) =>
          <Reveal key={member.name} delay={i * 0.1} className="grid sm:grid-cols-[200px_1fr] gap-8 items-start">
              <div className="aspect-[4/5] overflow-hidden bg-bone-deep">
                <img src={member.image} alt={member.alt} className="w-full h-full object-cover" loading="lazy" />
              </div>
              <div>
                <h3 className="font-serif text-3xl text-ink">{member.name}</h3>
                <p className="text-xs uppercase tracking-[0.3em] text-terracotta mt-2 mb-5">
                  {member.role}
                </p>
                {member.bio.map((para) =>
              <p key={para} className="text-taupe text-sm leading-relaxed mt-3">
                    {para}
                  </p>
              )}
              </div>
            </Reveal>
          )}
        </div>
      </section>

      <section className="bg-bone-deep py-24">
        <div className="max-w-[1400px] mx-auto px-5 md:px-10">
          <SectionHeading
            eyebrow="What We Stand For"
            title="The Oakland Values"
            className="mb-14 max-w-xl" />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-ink/10 border border-ink/10">
            {VALUES.map((value, i) =>
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="bg-bone p-8 hover:bg-bone-deep transition-colors">
                <span className="block font-serif text-4xl text-terracotta/60 mb-4">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="font-serif text-2xl text-ink mb-2">{value.title}</h3>
                <p className="text-taupe text-sm leading-relaxed">{value.desc}</p>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      <section className="bg-ink py-24 text-bone">
        <div className="max-w-[1400px] mx-auto px-5 md:px-10 grid grid-cols-2 lg:grid-cols-4 gap-10 text-center">
          {STATS.map((stat, i) =>
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}>
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
