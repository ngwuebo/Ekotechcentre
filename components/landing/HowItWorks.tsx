'use client';

import { motion } from 'framer-motion';
import { ArrowDown, CreditCard, Mail, Send, Users, Zap } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';

const steps = [
  { label: 'Complete registration', icon: Send },
  { label: 'Pay securely with Paystack', icon: CreditCard },
  { label: 'Receive confirmation email', icon: Mail },
  { label: 'Receive Zoom details', icon: Users },
  { label: 'Join orientation', icon: Zap },
  { label: 'Begin classes', icon: ArrowDown }
];

export default function HowItWorks() {
  return (
    <section className="px-6 pb-16 sm:px-10 lg:pb-24">
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
              className="rounded-[2rem] border border-slate-200/80 bg-white/95 p-6 shadow-sm"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-royal/10 text-royal">
                <step.icon className="h-5 w-5" />
              </div>
              <p className="mt-5 font-semibold text-navy">Step {index + 1}</p>
              <p className="mt-3 text-sm leading-7 text-slate-800">{step.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
