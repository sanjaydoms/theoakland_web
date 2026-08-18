import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  InstagramIcon,
  LinkedinIcon,
  YoutubeIcon,
  ArrowRightIcon } from
'lucide-react';
import { BRAND } from '../../data/siteData';
import logo from '../../assets/images/logo.png';
const COLS = [
{
  title: 'Company',
  links: [
  {
    label: 'About',
    to: '/about'
  },
  {
    label: 'Projects',
    to: '/projects'
  },
  {
    label: 'Careers',
    to: '/contact'
  },
  {
    label: 'Journal',
    to: '/resources'
  }]

},
{
  title: 'Explore',
  links: [
  {
    label: 'Product Range',
    to: '/products'
  },
  {
    label: 'Design Studio',
    to: '/studio'
  },
  {
    label: 'Resources',
    to: '/resources'
  },
  {
    label: 'Contact',
    to: '/contact'
  }]

},
{
  title: 'Support',
  links: [
  {
    label: 'Consultations',
    to: '/contact'
  },
  {
    label: 'Care & Warranty',
    to: '/resources'
  },
  {
    label: 'Privacy',
    to: '/'
  },
  {
    label: 'Terms',
    to: '/'
  }]

}];

export function Footer() {
  const [email, setEmail] = useState('');
  return (
    <footer className="bg-ink text-bone">
      <div className="max-w-[1400px] mx-auto px-5 md:px-10 pt-20 pb-10">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <img src={logo} alt="The Oakland" className="h-24 w-auto object-contain mb-6" />
            <p className="text-bone/60 max-w-xs leading-relaxed mb-6 text-sm">
              {BRAND.description} Join our newsletter for studio notes and new
              collections.
            </p>
            <form
              onSubmit={(event) => {
                event.preventDefault();
                setEmail('');
              }}
              className="flex items-center border-b border-bone/30 max-w-xs">
              
              <label htmlFor="newsletter-email" className="sr-only">
                Your email
              </label>
              <input
                id="newsletter-email"
                type="email"
                required
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="Your email"
                className="bg-transparent flex-1 py-3 text-sm placeholder:text-bone/40 focus:outline-none" />
              
              <button
                type="submit"
                aria-label="Subscribe to newsletter"
                className="text-terracotta hover:text-bone transition-colors">
                
                <ArrowRightIcon className="w-5 h-5" />
              </button>
            </form>
          </div>
          {COLS.map((column) =>
          <div key={column.title}>
              <h4 className="text-xs uppercase tracking-[0.25em] text-bone/50 mb-5">
                {column.title}
              </h4>
              <ul className="space-y-3">
                {column.links.map((link) =>
              <li key={link.label}>
                    <Link
                  to={link.to}
                  className="text-bone/80 hover:text-terracotta transition-colors text-sm">
                  
                      {link.label}
                    </Link>
                  </li>
              )}
              </ul>
            </div>
          )}
        </div>
        <div className="mt-16 pt-8 border-t border-bone/15 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-bone/40 text-xs">
            © {new Date().getFullYear()} {BRAND.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            {[InstagramIcon, LinkedinIcon, YoutubeIcon].map((Icon, i) =>
            <a
              key={i}
              href="#"
              aria-label={['Instagram', 'LinkedIn', 'YouTube'][i]}
              className="text-bone/60 hover:text-terracotta transition-colors">
              
                <Icon className="w-5 h-5" strokeWidth={1.5} />
              </a>
            )}
          </div>
        </div>
      </div>
    </footer>);

}