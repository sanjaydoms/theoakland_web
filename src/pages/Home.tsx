import React from 'react';
import { Hero } from '../components/home/Hero';
import { Categories } from '../components/home/Categories';
import { FeaturedCollections } from '../components/home/FeaturedCollections';
import { WhyChooseUs } from '../components/home/WhyChooseUs';
import { SignatureProjects } from '../components/home/SignatureProjects';
import { InteriorSolutions } from '../components/home/InteriorSolutions';
import { MaterialLibrary } from '../components/home/MaterialLibrary';
import { DesignProcess } from '../components/home/DesignProcess';
import { Testimonials } from '../components/home/Testimonials';
import { BrandPartners } from '../components/home/BrandPartners';
import { InstagramGallery } from '../components/home/InstagramGallery';
import { FinalCTA } from '../components/home/FinalCTA';
export function Home() {
  return (
    <>
      <Hero />
      <Categories />
      <FeaturedCollections />
      <WhyChooseUs />
      <SignatureProjects />
      <InteriorSolutions />
      <MaterialLibrary />
      <DesignProcess />
      <Testimonials />
      <BrandPartners />
      <InstagramGallery />
      <FinalCTA />
    </>);

}