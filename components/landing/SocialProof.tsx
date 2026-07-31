'use client';

import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const stats = [
  { label: 'Students trained', value: '400+' },
  { label: 'Completion rate', value: '98%' },
  { label: 'Certificates issued', value: 'Live instructors' }
];

export default function SocialProof() {
  return (
    <section className="px-6 pb-16 sm:px-10 lg:pb-24">
      <div className="mx-auto max-w-6xl rounded-[2rem] bg-slate-950/90 p-8 shadow-soft backdrop-blur-xl sm:p-10">
        <div className="flex flex-col items-center gap-6 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-4 py-2 text-sm text-white shadow-lg shadow-emerald-500/20">
            <Star className="h-4 w-4 text-emerald" />
            ★★★★★
          </div>
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">Trusted by Parents Across Nigeria</h2>
          <p className="max-w-2xl text-base leading-7 text-slate-300">A premium learning experience built to help young learners gain real skills, confidence, and future-ready advantage.</p>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {stats.map((item) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-[1.75rem] border border-slate-700/60 bg-slate-900/90 p-6 text-center shadow-[0_20px_50px_rgba(0,0,0,0.12)]"
            >
              <p className="text-3xl font-semibold text-white">{item.value}</p>
              <p className="mt-3 text-sm text-slate-400">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
