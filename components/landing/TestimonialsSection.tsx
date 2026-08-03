'use client';

import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Aisha',
    role: 'Parent',
    quote: 'My daughter joined the bootcamp and came home excited every day. The lessons were fun and the instructors were patient.',
    rating: 5
  },
  {
    name: 'Ayo',
    role: 'Student',
    quote: 'I loved the robotics labs and how we built something real in every class.',
    rating: 5
  },
  {
    name: 'Femi',
    role: 'Parent',
    quote: 'This was the most premium summer program we have enrolled in. The coaches really cared.',
    rating: 5
  },
  {
    name: 'Zain',
    role: 'Student',
    quote: 'The level was just right for ages 6–14+, and I felt included every day.',
    rating: 5
  },
  {
    name: 'Henry',
    role: 'Parent',
    quote: 'The mix of coding, robotics, AI, and digital creativity was exactly what we wanted.',
    rating: 5
  },
  {
    name: 'Mariam',
    role: 'Student',
    quote: 'I loved learning French, coding, and robotics in one premium summer program.',
    rating: 5
  }
];

export default function TestimonialsSection() {
  return (
    <section className="bg-slate-950 px-3 pt-16 pb-14 sm:px-10 sm:pt-20 lg:pb-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col gap-4 text-center lg:text-left">
          <p className="text-sm uppercase tracking-[0.28em] text-emerald-300">Testimonials</p>
          <div className="mx-auto max-w-3xl lg:mx-0">
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">Parents and Students love our bootcamps.</h2>
            <p className="mt-3 text-base leading-7 text-slate-400">Swipe through selected reviews from families and learners who trusted our hands-on summer experience.</p>
          </div>
        </div>

        <div className="-mx-6 overflow-x-auto pb-6 pl-6 sm:-mx-10 sm:pl-10 lg:mx-0 lg:overflow-visible">
          <div className="flex gap-6 pr-6 sm:pr-10 lg:grid lg:grid-cols-3 lg:gap-6">
            {testimonials.map((item, index) => (
              <motion.div
                key={`${item.name}-${index}`}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="snap-start min-w-[280px] max-w-[320px] lg:min-w-0 rounded-[2rem] border border-emerald-300/10 bg-slate-900/95 p-6 shadow-[0_24px_90px_rgba(8,102,52,0.22)] backdrop-blur-sm"
              >
                <div className="mb-5 flex items-center justify-between gap-3">
                  <div>
                    <p className="font-semibold text-white">{item.name}</p>
                    <p className="text-xs uppercase tracking-[0.24em] text-slate-400">{item.role}</p>
                  </div>
                  <div className="inline-flex items-center gap-1 rounded-full bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-emerald-200">
                    {item.rating}.0
                  </div>
                </div>
                <div className="mb-5 flex gap-1 text-amber-400">
                  {Array.from({ length: item.rating }).map((_, starIndex) => (
                    <Star key={starIndex} className="h-4 w-4" />
                  ))}
                </div>
                <p className="text-sm leading-7 text-slate-300">“{item.quote}”</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
