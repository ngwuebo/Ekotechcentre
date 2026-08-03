'use client';

import { motion } from 'framer-motion';
import { ArrowDown, CreditCard, Mail, Send, Users, Zap } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';

const steps = [
  { label: 'Complete registration', icon: Send },
  { label: 'Pay securely by bank transfer', icon: CreditCard },
  { label: 'Receive confirmation email', icon: Mail },
  { label: 'Receive Zoom details', icon: Users },
  { label: 'Join orientation', icon: Zap },
  { label: 'Begin classes', icon: ArrowDown }
];

export default function HowItWorks() {
  return (
    <section className="px-3 pb-16 sm:px-10 lg:pb-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading title="How it works" subtitle="Step-by-step process" />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, index) => (
            <motion.div
              key={step.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="relative rounded-xl border border-slate-200/80 bg-white/95 p-4 shadow-sm overflow-hidden"
            >
              <div className="absolute -top-6 -right-6 h-24 w-24 rounded-3xl bg-royal/10 text-royal/30 pointer-events-none flex items-center justify-center">
                <step.icon className="h-10 w-10 opacity-70" />
              </div>

              <div className="relative z-10">
                <p className="mt-1 font-semibold text-slate-950">Step {index + 1}</p>
                <p className="mt-2 text-sm leading-7 text-slate-950">{step.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
