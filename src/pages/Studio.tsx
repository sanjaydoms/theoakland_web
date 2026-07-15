import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  CalendarIcon,
  UsersIcon,
  BoxIcon,
  LayersIcon,
  ScanIcon } from
'lucide-react';
import { PageHero } from '../components/ui/PageHero';
import { SectionHeading } from '../components/ui/Section';
import { IMAGES } from '../data/siteData';
const SERVICES = [
{
  icon: CalendarIcon,
  title: 'Design Consultation',
  description:
  'A one-on-one session to understand your Oakland home, taste and aspirations.'
},
{
  icon: UsersIcon,
  title: 'Meet the Designers',
  description:
  'Get paired with a principal designer who becomes your creative partner.'
},
{
  icon: BoxIcon,
  title: '3D Visualization',
  description: 'See your space rendered before a single change is made.'
},
{
  icon: LayersIcon,
  title: 'Material Selection',
  description:
  'Explore our curated Oakland material library, hands-on and guided.'
},
{
  icon: ScanIcon,
  title: 'Virtual Walkthrough',
  description:
  'Step into your future home with an immersive guided walkthrough.'
}];

export function Studio() {
  return (
    <div>
      <PageHero
        eyebrow="Design Studio · Oakland"
        title="Your Vision, Expertly Realised"
        subtitle="A guided, end-to-end design experience from first idea to final styling."
        image={IMAGES.studio}
        imageAlt="Shrutham Oakland design studio and material library" />
      
      <section className="max-w-[1400px] mx-auto px-5 md:px-10 py-24">
        <SectionHeading
          eyebrow="What We Offer"
          title="Studio Services"
          className="mb-14 max-w-xl" />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-ink/10 border border-ink/10">
          {SERVICES.map((service, i) =>
          <motion.div
            key={service.title}
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
              delay: i * 0.06
            }}
            className="bg-bone p-8 hover:bg-bone-deep transition-colors">
            
              <service.icon
              className="w-8 h-8 text-terracotta mb-5"
              strokeWidth={1.2} />
            
              <h3 className="font-serif text-2xl text-ink mb-2">
                {service.title}
              </h3>
              <p className="text-taupe text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          )}
        </div>
        <div className="mt-16 bg-ink text-bone p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="font-serif text-3xl md:text-4xl">Ready to begin?</h3>
            <p className="text-bone/60 mt-2">
              Book a complimentary consultation with our Oakland design team.
            </p>
          </div>
          <Link
            to="/contact"
            className="shrink-0 bg-bone text-ink px-9 py-4 text-xs uppercase tracking-[0.2em] hover:bg-terracotta hover:text-white transition-colors">
            
            Book Appointment
          </Link>
        </div>
      </section>
    </div>);

}