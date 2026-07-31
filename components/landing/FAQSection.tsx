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
    <section className="px-6 pb-16 sm:px-10 lg:pb-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 text-center">
          <p className="text-sm uppercase tracking-[0.28em] text-slate-500">FAQ</p>
          <h2 className="mt-4 text-3xl font-semibold text-navy sm:text-4xl">Questions parents ask most.</h2>
        </div>
        <div className="space-y-4">
          {faqs.map((item, index) => (
            <motion.details
              key={item.question}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="rounded-[1.75rem] border border-slate-200/80 bg-white/95 p-6 shadow-sm"
            >
              <summary className="cursor-pointer text-lg font-semibold text-navy">{item.question}</summary>
              <p className="mt-4 text-sm leading-7 text-slate-800">{item.answer}</p>
            </motion.details>
          ))}
        </div>
      </div>
    </section>
  );
}
