'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { MessageCircle, Users, Video, Sparkles } from 'lucide-react';

export default function ClassPreview() {
  return (
    <section className="px-3 pb-16 sm:px-10 lg:pb-24">
      <div className="mx-auto max-w-6xl rounded-[2rem] bg-gradient-to-br from-white via-slate-50 to-royal/5 p-6 shadow-soft sm:p-10">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.32em] text-slate-950">Live class preview</p>
            <h2 className="mt-4 text-3xl font-semibold text-slate-950 sm:text-4xl">See the classroom come alive in real time.</h2>
            <p className="mt-4 max-w-2xl text-base leading-8 text-slate-950">Every session is live and instructor-led, with collaborative activities, screen sharing, and guided project work that keeps students engaged.</p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                { label: 'Instructor presenting', icon: Sparkles },
                { label: 'Students connected', icon: Users },
                { label: 'Chat window', icon: MessageCircle },
                { label: 'Screen sharing', icon: Video }
              ].map((item) => (
                <div key={item.label} className="rounded-3xl border border-slate-200/80 bg-white/95 p-5 shadow-sm">
                  <item.icon className="mb-3 h-6 w-6 text-royal" />
                  <p className="text-sm font-semibold text-slate-950">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
          <motion.div initial={{ opacity: 0, x: 60 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }} className="relative overflow-hidden rounded-none border border-slate-200 bg-white p-4 shadow-lg">
            <div className="absolute -right-8 top-8 h-20 w-20 rounded-full bg-emerald/20 blur-3xl" />
            <div className="relative overflow-hidden rounded-none bg-slate-950 shadow-md">
              <Image
                src="/images/zoom.png"
                alt="Zoom class preview"
                width={520}
                height={380}
                className="h-full w-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
