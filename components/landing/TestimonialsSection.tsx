'use client';

import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Aisha, Parent',
    quote: 'My daughter joined the bootcamp and came home excited every day. The lessons were fun and the instructors were patient.',
    rating: 5
  },
  {
    name: 'Chinedu, Parent',
    quote: 'The live sessions were excellent. The support team kept me updated and the certificate was a nice bonus.',
    rating: 5
  },
  {
    name: 'Sade, Parent',
    quote: 'EkoTech delivered a polished experience. My son learned real coding skills and gained more confidence.',
    rating: 5
  }
];

export default function TestimonialsSection() {
  return (
    <section className="bg-slate-50 px-6 pb-16 sm:px-10 lg:pb-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 text-center">
          <p className="text-sm uppercase tracking-[0.28em] text-slate-500">Testimonials</p>
          <h2 className="mt-4 text-3xl font-semibold text-navy sm:text-4xl">Parents love the experience.</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="rounded-[2rem] border border-slate-200/80 bg-white/95 p-6 shadow-sm"
            >
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-emerald/10 text-emerald">
                  <span className="text-sm font-semibold">{item.name.split(',')[0][0]}</span>
                </div>
                <div>
                  <p className="font-semibold text-navy">{item.name}</p>
                  <div className="mt-1 flex gap-1 text-amber-400">
                    {Array.from({ length: item.rating }).map((_, index) => (
                      <Star key={index} className="h-4 w-4" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-sm leading-7 text-slate-800">“{item.quote}”</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
