import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { EnquiryButton } from './components/layout/EnquiryButton';
import { ScrollToTop } from './components/layout/ScrollToTop';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Products } from './pages/Products';
import { Projects } from './pages/Projects';
import { ProjectDetail } from './pages/ProjectDetail';
import { Studio } from './pages/Studio';
import { Resources } from './pages/Resources';
import { Contact } from './pages/Contact';
export function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="wood-canvas min-h-screen w-full flex flex-col">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/detail" element={<ProjectDetail />} />
            <Route path="/studio" element={<Studio />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <EnquiryButton />
      </div>
    </BrowserRouter>);

}