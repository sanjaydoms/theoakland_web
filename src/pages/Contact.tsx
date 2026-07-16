import React, { useState, lazy } from 'react';
import { motion } from 'framer-motion';
import {
  MapPinIcon,
  PhoneIcon,
  MailIcon,
  CheckCircleIcon,
  ChevronDownIcon } from
'lucide-react';
import { PageHero } from '../components/ui/PageHero';
import { SectionHeading } from '../components/ui/Section';
import { CONTACT, IMAGES } from '../data/siteData';
const FAQS = [
{
  question: 'How does the design process begin?',
  answer:
  'It starts with a complimentary Oakland studio consultation where we understand your space, budget and vision.'
},
{
  question: 'Do you handle end-to-end execution?',
  answer:
  'Yes — from concept and 3D visualisation through sourcing, installation and final styling.'
},
{
  question: 'Which areas do you serve?',
  answer:
  'We work throughout Oakland, the East Bay, San Francisco and the wider Bay Area.'
},
{
  question: 'What is your typical project timeline?',
  answer:
  'Timelines vary by scope, but most residential projects complete within 10–16 weeks.'
}];

export function Contact() {
  const [sent, setSent] = useState(false);
  const [open, setOpen] = useState<number | null>(0);
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  });
  const submit = (event: React.FormEvent) => {
    event.preventDefault();
    setSent(true);
  };
  const details = [
  {
    icon: MapPinIcon,
    label: CONTACT.address,
    link: CONTACT.addressLink
  },
  {
    icon: PhoneIcon,
    label: CONTACT.phone
  },
  {
    icon: MailIcon,
    label: CONTACT.email,
    link: `mailto:${CONTACT.email}`
  }];

  return (
    <div>
      <PageHero
        eyebrow="Get in Touch · Oakland"
        title="Let's Start a Conversation"
        image={IMAGES.studio}
        imageAlt="Shrutham Oakland design studio with material samples" />
      
      <section className="max-w-[1400px] mx-auto px-5 md:px-10 py-24 grid lg:grid-cols-2 gap-16">
        <div>
          <SectionHeading
            eyebrow="Visit Us"
            title="The Oakland Studio"
            className="mb-8" />
          
          <ul className="space-y-6">
            {details.map((detail) =>
            <li key={detail.label} className="flex items-start gap-4">
                <detail.icon
                className="w-5 h-5 text-terracotta mt-1 shrink-0"
                strokeWidth={1.5} />
              
                {detail.link ? (
                  <a href={detail.link} target="_blank" rel="noopener noreferrer" className="text-ink hover:text-terracotta transition-colors underline decoration-dotted">
                    {detail.label}
                  </a>
                ) : (
                  <span className="text-ink">{detail.label}</span>
                )}
              </li>
            )}
          </ul>
          <div className="mt-8 aspect-[16/10] overflow-hidden bg-bone-deep">
            <iframe
              title="Shrutham Oakland studio location"
              className="w-full h-full grayscale"
              loading="lazy"
              src={CONTACT.mapEmbedUrl} />
            
          </div>
        </div>
        <div>
          {sent ?
          <div className="h-full flex flex-col items-center justify-center text-center bg-bone-deep p-12">
              <CheckCircleIcon
              className="w-14 h-14 text-terracotta mb-5"
              strokeWidth={1.2} />
            
              <h3 className="font-serif text-3xl text-ink">Thank you</h3>
              <p className="text-taupe mt-2">
                We&apos;ve received your enquiry and will be in touch within one
                working day.
              </p>
            </div> :

          <form onSubmit={submit} className="space-y-6">
              <div>
                <label
                htmlFor="name"
                className="block text-xs uppercase tracking-[0.2em] text-taupe mb-2">
                
                  Name
                </label>
                <input
                id="name"
                required
                value={form.name}
                onChange={(event) =>
                setForm({
                  ...form,
                  name: event.target.value
                })
                }
                className="w-full bg-transparent border-b border-ink/30 py-3 focus:outline-none focus:border-terracotta transition-colors" />
              
              </div>
              <div>
                <label
                htmlFor="email"
                className="block text-xs uppercase tracking-[0.2em] text-taupe mb-2">
                
                  Email
                </label>
                <input
                id="email"
                type="email"
                required
                value={form.email}
                onChange={(event) =>
                setForm({
                  ...form,
                  email: event.target.value
                })
                }
                className="w-full bg-transparent border-b border-ink/30 py-3 focus:outline-none focus:border-terracotta transition-colors" />
              
              </div>
              <div>
                <label
                htmlFor="message"
                className="block text-xs uppercase tracking-[0.2em] text-taupe mb-2">
                
                  Tell us about your project
                </label>
                <textarea
                id="message"
                rows={4}
                required
                value={form.message}
                onChange={(event) =>
                setForm({
                  ...form,
                  message: event.target.value
                })
                }
                className="w-full bg-transparent border-b border-ink/30 py-3 focus:outline-none focus:border-terracotta transition-colors resize-none" />
              
              </div>
              <button
              type="submit"
              className="w-full bg-ink text-bone py-4 text-xs uppercase tracking-[0.2em] hover:bg-terracotta transition-colors">
              
                Send Enquiry
              </button>
            </form>
          }
        </div>
      </section>
      <section className="bg-bone-deep py-24">
        <div className="max-w-3xl mx-auto px-5 md:px-10">
          <SectionHeading
            eyebrow="Questions"
            title="Frequently Asked"
            align="center"
            className="mb-12" />
          
          <div className="divide-y divide-ink/10 border-y border-ink/10">
            {FAQS.map((faq, i) =>
            <div key={faq.question}>
                <button
                type="button"
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between py-5 text-left"
                aria-expanded={open === i}>
                
                  <span className="font-serif text-xl text-ink pr-6">
                    {faq.question}
                  </span>
                  <ChevronDownIcon
                  className={`w-5 h-5 text-terracotta shrink-0 transition-transform ${open === i ? 'rotate-180' : ''}`} />
                
                </button>
                <motion.div
                initial={false}
                animate={{
                  height: open === i ? 'auto' : 0,
                  opacity: open === i ? 1 : 0
                }}
                className="overflow-hidden">
                
                  <p className="text-taupe pb-5 leading-relaxed">
                    {faq.answer}
                  </p>
                </motion.div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>);

}