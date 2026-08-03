'use client';

import { motion } from 'framer-motion';
import { MessageSquare, Phone } from 'lucide-react';

const faqs = [
  {
    question: 'Does my child need computer experience?',
    answer: 'No. Beginners are welcome.'
  },
  {
    question: 'What device is required?',
    answer: 'A Core i3 laptop, 4GB RAM, 128GB storage minimum.'
  },
  {
    question: 'Is payment secure?',
    answer: 'Yes. Payments are safe and secure.'
  },
  {
    question: 'What if my child misses a class?',
    answer: 'Two revision classes are held weekly.'
  },
  {
    question: 'Will my child receive a certificate?',
    answer: 'Yes, on successful course completion.'
  },
  {
    question: 'How will I know my enrolment is successful?',
    answer: "You'll be added to your class WhatsApp group."
  },
  {
    question: 'Can my child travel for the excursion alone?',
    answer: 'Yes, with a signed parent/guardian consent form.'
  }
];

export default function FAQSection() {
  return (
    <section className="bg-slate-950 px-3 py-16 sm:px-10 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 rounded-[2rem] border border-emerald-300/10 bg-slate-900/95 p-8 shadow-[0_30px_80px_rgba(8,102,52,0.18)] sm:p-12">
          <div className="mb-8 text-center">
            <p className="text-sm uppercase tracking-[0.35em] text-emerald-300">FAQ</p>
            <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">Trusted answers for parents and learners.</h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-400">Everything you need to know about our premium summer bootcamp—technology, support, safety, and learning outcomes.</p>
          </div>

          <div className="grid gap-4 lg:grid-cols-2">
            {faqs.map((item, index) => (
              <motion.details
                key={item.question}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="group rounded-[1.75rem] border border-slate-800/80 bg-slate-950/95 p-6 transition duration-300 hover:-translate-y-1 hover:border-emerald-400/40 hover:bg-slate-900/95"
              >
                <summary className="flex cursor-pointer items-center justify-between gap-4 text-lg font-semibold text-white">
                  <span>{item.question}</span>
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-200">?</span>
                </summary>
                <p className="mt-4 text-sm leading-7 text-slate-300">{item.answer}</p>
              </motion.details>
            ))}
          </div>

          <div className="mt-6 rounded-[1.75rem] border border-emerald-300/10 bg-slate-950/95 p-6">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-[11px] uppercase tracking-[0.35em] text-emerald-300">More enquiries</p>
                <p className="mt-2 text-sm text-slate-300">Reach our team directly for enrolment guidance and family support.</p>
              </div>
              <a
                href="https://wa.me/2348091822201"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-[#25d366]/20 transition hover:bg-[#1ebe57]"
              >
                <MessageSquare className="h-4 w-4" />
                WhatsApp us
              </a>
            </div>

            <div className="mt-4 flex flex-wrap gap-3">
              {['08091822201', '08091822202', '08091822203'].map((number) => (
                <span key={number} className="inline-flex items-center gap-2 rounded-full bg-slate-900/70 px-3 py-2 text-sm text-slate-200">
                  <Phone className="h-4 w-4 text-emerald-300" />
                  {number}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
