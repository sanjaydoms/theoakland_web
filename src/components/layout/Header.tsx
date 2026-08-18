import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  SearchIcon,
  HeartIcon,
  UserIcon,
  MenuIcon,
  XIcon,
  ChevronDownIcon } from
'lucide-react';
import { BRAND, IMAGES } from '../../data/siteData';
import logo from '../../assets/images/logo.png';
import logoWhite from '../../assets/images/logo-white.png';
interface NavItem {
  label: string;
  to: string;
  mega?: boolean;
}
const MEGA_FURNITURE = [
{
  title: 'By Room',
  links: ['Living', 'Bedroom', 'Dining', 'Office', 'Outdoor']
},
{
  title: 'By Type',
  links: ['Sofas', 'Beds', 'Tables', 'Seating', 'Storage']
},
{
  title: 'Curated',
  links: ['New Arrivals', 'Best Sellers', 'Made to Order', 'Limited Edition']
}];

const NAV: NavItem[] = [
{
  label: 'Home',
  to: '/'
},
{
  label: 'About',
  to: '/about'
},
{
  label: 'Product Range',
  to: '/products',
  mega: true
},
{
  label: 'Projects',
  to: '/projects'
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
}];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [openMega, setOpenMega] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  useEffect(() => {
    setMobileOpen(false);
    setOpenMega(null);
  }, [location.pathname]);
  const solid = scrolled || location.pathname !== '/' || Boolean(openMega);
  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-500 ${solid ? 'bg-bone/95 backdrop-blur-md border-b border-ink/10' : 'bg-transparent'}`}
      onMouseLeave={() => setOpenMega(null)}>
      
      <div className="max-w-[1400px] mx-auto px-5 md:px-10 flex items-center justify-between h-20">
        <Link to="/" aria-label={`${BRAND.name} home`} className="leading-none">
          <span
            className={`font-serif text-2xl tracking-tight ${solid ? 'text-ink' : 'text-white'}`}>
            
            {/* {'The Oakland '} */}
           <img
              src={solid ? logo : logoWhite}
              alt="The Oakland"
              className="h-24 w-auto object-contain"
            />
          </span>
        </Link>
        <nav
          aria-label="Primary navigation"
          className="hidden lg:flex items-center gap-8">
          
          {NAV.map((item) =>
          <div
            key={item.label}
            onMouseEnter={() => setOpenMega(item.mega ? item.label : null)}>
            
              <Link
              to={item.to}
              className={`flex items-center gap-1 text-sm tracking-wide transition-colors hover:text-terracotta ${solid ? 'text-ink' : 'text-white'} ${location.pathname === item.to ? 'text-terracotta' : ''}`}>
              
                {item.label}
                {item.mega && <ChevronDownIcon className="w-3.5 h-3.5" />}
              </Link>
            </div>
          )}
        </nav>
        <div className="flex items-center gap-5">
          {[SearchIcon, HeartIcon, UserIcon].map((Icon, i) =>
          <button
            key={i}
            type="button"
            aria-label={['Search', 'Wishlist', 'Profile'][i]}
            className={`hidden sm:block hover:text-terracotta transition-colors ${solid ? 'text-ink' : 'text-white'}`}>
            
              <Icon className="w-5 h-5" strokeWidth={1.5} />
            </button>
          )}
          <Link
            to="/contact"
            className={`hidden md:inline-block text-xs uppercase tracking-[0.2em] px-5 py-2.5 border transition-colors ${solid ? 'border-ink text-ink hover:bg-ink hover:text-bone' : 'border-white text-white hover:bg-white hover:text-ink'}`}>
            
            Enquire
          </Link>
          <button
            type="button"
            className={`lg:hidden ${solid ? 'text-ink' : 'text-white'}`}
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu">
            
            <MenuIcon className="w-6 h-6" />
          </button>
        </div>
      </div>
      <AnimatePresence>
        {openMega &&
        <motion.div
          initial={{
            opacity: 0,
            y: -8
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          exit={{
            opacity: 0,
            y: -8
          }}
          transition={{
            duration: 0.25
          }}
          className="hidden lg:block absolute inset-x-0 top-20 bg-bone border-t border-ink/10 shadow-xl">
          
            <div className="max-w-[1400px] mx-auto px-10 py-10 grid grid-cols-4 gap-10">
              {MEGA_FURNITURE.map((column) =>
            <div key={column.title}>
                  <h4 className="text-xs uppercase tracking-[0.25em] text-terracotta mb-5">
                    {column.title}
                  </h4>
                  <ul className="space-y-3">
                    {column.links.map((link) =>
                <li key={link}>
                        <Link
                    to="/products"
                    className="font-serif text-xl text-ink hover:text-terracotta transition-colors">
                    
                          {link}
                        </Link>
                      </li>
                )}
                  </ul>
                </div>
            )}
              <Link to="/products" className="group relative overflow-hidden">
                <img
                src={IMAGES.collection}
                alt="California modern living room from the Shrutham collection"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              
                <div className="absolute inset-0 bg-ink/30 flex flex-col justify-end p-6">
                  <span className="text-white/80 text-[10px] uppercase tracking-[0.25em]">
                    Featured Collection
                  </span>
                  <span className="text-white font-serif text-2xl">
                    Shop Now →
                  </span>
                </div>
              </Link>
            </div>
          </motion.div>
        }
      </AnimatePresence>
      <AnimatePresence>
        {mobileOpen &&
        <motion.div
          initial={{
            x: '100%'
          }}
          animate={{
            x: 0
          }}
          exit={{
            x: '100%'
          }}
          transition={{
            duration: 0.4,
            ease: [0.22, 1, 0.36, 1]
          }}
          className="fixed inset-0 z-50 bg-bone lg:hidden flex flex-col">
          
            <div className="flex items-center justify-between h-20 px-5 border-b border-ink/10">
              <span className="font-serif text-2xl text-ink">
                {BRAND.location}
              </span>
              <button
              type="button"
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu">
              
                <XIcon className="w-6 h-6 text-ink" />
              </button>
            </div>
            <nav
            aria-label="Mobile navigation"
            className="flex-1 overflow-y-auto px-5 py-8 flex flex-col gap-6">
            
              {NAV.map((item) =>
            <Link
              key={item.label}
              to={item.to}
              className="font-serif text-3xl text-ink">
              
                  {item.label}
                </Link>
            )}
            </nav>
            <Link
            to="/contact"
            className="m-5 text-center text-xs uppercase tracking-[0.2em] px-5 py-4 bg-ink text-bone">
            
              Enquire Now
            </Link>
          </motion.div>
        }
      </AnimatePresence>
    </header>);

}