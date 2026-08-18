import React from 'react';
import { BRANDS } from '../../data/siteData';
export function BrandPartners() {
  const loop = [...BRANDS, ...BRANDS];
  return (
    <section className="py-16 border-y border-ink/10 overflow-hidden">
      <p className="text-center text-xs uppercase tracking-[0.3em] text-taupe mb-10">
        Trusted Brand Partners
      </p>
      <div className="relative">
        <div className="flex w-max animate-marquee gap-16">
          {loop.map((b, i) =>
          <span
            key={i}
            className="font-serif text-2xl md:text-3xl text-ink/40 whitespace-nowrap tracking-wide">
            
              {b}
            </span>
          )}
        </div>
      </div>
    </section>);

}