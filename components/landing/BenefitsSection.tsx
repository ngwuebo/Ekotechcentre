'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const frenchHighlights = [
  'Learn practical French for everyday conversations, travel, school, and business in a fun and interactive environment.',
  'Discover the rich culture, traditions, greetings, food, music, and lifestyle of French-speaking countries.',
  'Build your confidence through speaking, listening, games, role-plays, and simple real-life conversations.',
  'Put your new skills into practice during our exciting 4-day educational trip to Abidjan, Côte d’Ivoire, where you’ll experience French in a real-life setting.',
  'Trip information (costs & sites to be visited), requirements, and registration details will be shared during the class.'
];

export default function BenefitsSection() {
  return (
    <section className="px-3 pb-16 sm:px-10 lg:pb-24">
      <div className="mx-auto max-w-6xl">
        <div className="overflow-hidden rounded-[2rem] border border-emerald-300/15 bg-[linear-gradient(145deg,rgba(16,185,129,0.12),rgba(15,23,42,0.98))] shadow-[0_30px_90px_rgba(8,102,52,0.18)]">
          <div className="grid gap-0 lg:grid-cols-[1.02fr_0.98fr]">
            <div className="relative min-h-[320px] w-full">
              <Image
                src="/images/french.png"
                alt="French class illustration"
                fill
                className="object-cover object-center"
                priority
              />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-6 sm:p-8 lg:p-10"
            >
              <div className="mb-6">
                <p className="text-sm uppercase tracking-[0.3em] text-emerald-200">Free French Class</p>
                <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">Learn French Language and Culture This Summer</h2>
              </div>

              <div className="space-y-3 text-sm leading-7 text-slate-200">
                {frenchHighlights.map((item) => (
                  <div key={item} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-slate-900/45 px-4 py-3">
                    <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-200">•</span>
                    <p>{item}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
