'use client';

import { motion } from 'framer-motion';

const faqs = [
  {
    question: 'Does my child need computer experience?',
    answer: 'No prior experience is required. Our classes are built to welcome beginners and nurture confident learners from day one.'
  },
  {
    question: 'What device is required?',
    answer: 'A laptop or tablet with Zoom support is ideal. We provide recommendations so every child can join with a comfortable setup.'
  },
  {
    question: 'Is payment secure?',
    answer: 'Yes. Payments are handled securely through Paystack, and your information is protected throughout the process.'
  },
  {
    question: 'What if my child misses a class?',
    answer: 'Recordings and recap materials are available for missed sessions. We also provide support to catch up quickly.'
  },
  {
    question: 'Will my child receive a certificate?',
    answer: 'Yes. Every student who completes the bootcamp receives an official EkoTech certificate.'
  }
  
];

export default function FAQSection() {
  return (
    <section className="bg-slate-950 px-6 py-16 sm:px-10 sm:py-20 lg:py-24">
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
        </div>
      </div>
    </section>
  );
}
