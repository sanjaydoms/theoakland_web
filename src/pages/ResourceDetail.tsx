import React, { useMemo } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { ArrowRightIcon, ClockIcon } from 'lucide-react';
import { PageHero } from '../components/ui/PageHero';
import { Reveal } from '../components/ui/Section';
import { useSeo } from '../hooks/useSeo';
import { BRAND } from '../data/siteData';
import { RESOURCES, SITE_URL, getResource } from '../data/resources';

export function ResourceDetail() {
  const { slug = '' } = useParams();
  const article = getResource(slug);
  const url = `${SITE_URL}/resources/${slug}`;

  // Article + FAQPage + BreadcrumbList schema — what answer engines and LLM crawlers read.
  const jsonLd = useMemo(
    () =>
    article && {
      '@context': 'https://schema.org',
      '@graph': [
      {
        '@type': 'Article',
        headline: article.title,
        description: article.summary,
        image: `${SITE_URL}${article.image}`,
        datePublished: article.published,
        keywords: article.keywords.join(', '),
        author: { '@type': 'Organization', name: BRAND.name },
        publisher: { '@type': 'Organization', name: BRAND.name, url: SITE_URL },
        mainEntityOfPage: url
      },
      {
        '@type': 'FAQPage',
        mainEntity: article.faqs.map((f) => ({
          '@type': 'Question',
          name: f.question,
          acceptedAnswer: { '@type': 'Answer', text: f.answer }
        }))
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
        { '@type': 'ListItem', position: 2, name: 'Resources', item: `${SITE_URL}/resources` },
        { '@type': 'ListItem', position: 3, name: article.title, item: url }]
      }]
    },
    [article, url]
  );

  useSeo({
    title: article?.metaTitle ?? 'Resources | The Oakland',
    description: article?.metaDescription ?? '',
    canonical: url,
    jsonLd: jsonLd || undefined
  });

  if (!article) return <Navigate to="/resources" replace />;

  const related = RESOURCES.filter((r) => r.slug !== article.slug).
  sort((a, b) => Number(b.category === article.category) - Number(a.category === article.category)).
  slice(0, 3);

  return (
    <div>
      <PageHero
        eyebrow={`${article.category} · ${article.readTime}`}
        title={article.title}
        image={article.image}
        imageAlt={article.alt} />

      <article className="max-w-3xl mx-auto px-5 md:px-10 py-20">
        <nav aria-label="Breadcrumb" className="text-xs uppercase tracking-[0.2em] text-taupe mb-8">
          <Link to="/" className="hover:text-terracotta">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/resources" className="hover:text-terracotta">Resources</Link>
          <span className="mx-2">/</span>
          <span className="text-ink">{article.category}</span>
        </nav>

        {/* Quick answer — the snippet answer engines lift */}
        <Reveal>
          <div className="border-l-2 border-terracotta pl-6 mb-14">
            <span className="block text-xs uppercase tracking-[0.3em] text-terracotta mb-3">
              Quick answer
            </span>
            <p className="font-serif text-2xl text-ink leading-snug">{article.summary}</p>
            <p className="flex items-center gap-2 text-taupe text-xs mt-4">
              <ClockIcon className="w-3.5 h-3.5" strokeWidth={1.5} />
              {article.readTime} · Published{' '}
              {new Date(article.published).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}
            </p>
          </div>
        </Reveal>

        {article.sections.map((section) =>
        <Reveal key={section.heading} className="mb-12">
            <h2 className="font-serif text-3xl text-ink mb-4">{section.heading}</h2>
            {section.paragraphs.map((p) =>
          <p key={p} className="text-taupe leading-relaxed mb-4">{p}</p>
          )}
            {section.list &&
          <ul className="list-disc pl-5 space-y-2 text-taupe leading-relaxed">
                {section.list.map((item) =>
            <li key={item}>{item}</li>
            )}
              </ul>
          }
          </Reveal>
        )}

        <Reveal className="mb-12">
          <h2 className="font-serif text-3xl text-ink mb-6">Frequently asked questions</h2>
          <div className="divide-y divide-ink/10 border-y border-ink/10">
            {article.faqs.map((faq) =>
            <details key={faq.question} className="group py-5">
                <summary className="cursor-pointer list-none flex justify-between gap-6 font-serif text-xl text-ink">
                  {faq.question}
                  <span className="text-terracotta transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="text-taupe leading-relaxed mt-3">{faq.answer}</p>
              </details>
            )}
          </div>
        </Reveal>

        <Reveal>
          <div className="bg-ink text-bone p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-serif text-2xl">Planning a project in Hyderabad?</h3>
              <p className="text-bone/60 mt-1 text-sm">Book a complimentary consultation at our Gachibowli studio.</p>
            </div>
            <Link
              to="/contact"
              className="shrink-0 inline-flex items-center gap-2 bg-bone text-ink px-7 py-3.5 text-xs uppercase tracking-[0.2em] hover:bg-terracotta hover:text-white transition-colors">
              Enquire <ArrowRightIcon className="w-4 h-4" />
            </Link>
          </div>
        </Reveal>
      </article>

      <section aria-label="Related guides" className="bg-bone-deep py-20">
        <div className="max-w-[1400px] mx-auto px-5 md:px-10">
          <h2 className="font-serif text-3xl text-ink mb-8">Related guides</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {related.map((r) =>
            <Link key={r.slug} to={`/resources/${r.slug}`} className="group block">
                <div className="aspect-[16/10] overflow-hidden bg-ink">
                  <img src={r.image} alt={r.alt} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <span className="block text-terracotta text-xs uppercase tracking-[0.2em] mt-4">{r.category}</span>
                <h3 className="font-serif text-xl text-ink mt-1 group-hover:text-terracotta transition-colors">{r.title}</h3>
              </Link>
            )}
          </div>
        </div>
      </section>
    </div>);
}
