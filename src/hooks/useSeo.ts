import { useEffect } from 'react';

interface Seo {
  title: string;
  description: string;
  canonical: string;
  jsonLd?: object;
}

const DEFAULT_TITLE = 'The Oakland';

function setMeta(attr: 'name' | 'property', key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.content = content;
}

/** Sets document title, description, OG tags, canonical and JSON-LD for the current page. */
export function useSeo({ title, description, canonical, jsonLd }: Seo) {
  useEffect(() => {
    document.title = title;
    setMeta('name', 'description', description);
    setMeta('property', 'og:title', title);
    setMeta('property', 'og:description', description);
    setMeta('property', 'og:url', canonical);

    let link = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!link) {
      link = document.createElement('link');
      link.rel = 'canonical';
      document.head.appendChild(link);
    }
    link.href = canonical;

    const script = document.createElement('script');
    if (jsonLd) {
      script.type = 'application/ld+json';
      script.text = JSON.stringify(jsonLd);
      document.head.appendChild(script);
    }
    return () => {
      document.title = DEFAULT_TITLE;
      script.remove();
    };
  }, [title, description, canonical, jsonLd]);
}
