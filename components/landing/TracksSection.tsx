'use client';

import { motion } from 'framer-motion';
import { Award, Cpu, Layers } from 'lucide-react';
import { Card } from '@/components/ui/Card';

const tracks = [
  {
    title: 'Junior',
    age: 'Age 6–8',
    highlights: ['Learning through fun', 'Scratch', 'Digital creativity', 'Basic coding'],
    icon: <Award className="h-6 w-6" />
  },
  {
    title: 'Intermediate',
    age: 'Age 9–13',
    highlights: ['HTML', 'CSS', 'Python', 'Game Design', 'AI', 'Learn French as you go'],
    icon: <Cpu className="h-6 w-6" />
  },
  {
    title: 'Senior',
    age: 'Age 14+',
    highlights: ['Python', 'Cybersecurity', 'Power BI', 'Web Development', 'AI', 'Career preparation'],
    icon: <Layers className="h-6 w-6" />
  }
];

export default function TracksSection() {
  return (
    <section className="px-6 pb-16 sm:px-10 lg:pb-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 text-center">
          <p className="text-sm uppercase tracking-[0.28em] text-slate-500">Age tracks</p>
          <h2 className="mt-4 text-3xl font-semibold text-navy sm:text-4xl">The right pace for every learner.</h2>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {tracks.map((track) => (
            <motion.div key={track.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-[2rem] border border-slate-200/80 bg-white/95 p-6 shadow-soft">
              <div className="flex items-center justify-between gap-3 rounded-3xl bg-slate-900/95 p-4 text-white shadow-lg">
                <div>
                  <p className="text-sm text-slate-300">{track.age}</p>
                  <h3 className="mt-2 text-xl font-semibold">{track.title}</h3>
                </div>
                <div className="rounded-3xl bg-white/10 p-3 text-royal">{track.icon}</div>
              </div>
              <ul className="mt-6 space-y-3 text-sm text-slate-800">
                {track.highlights.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-emerald" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
