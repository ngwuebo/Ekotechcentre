'use client';

import { motion } from 'framer-motion';
import { Bolt, Feather, Globe2, HeartHandshake, Lightbulb, ShieldCheck } from 'lucide-react';
import Card from '@/components/ui/Card';

const benefits = [
  { title: 'Coding', description: 'Hands-on lessons that introduce logic, loops, and creative systems.', icon: <Bolt className="h-5 w-5" /> },
  { title: 'Confidence', description: 'Build self-assurance through real presentations and team challenges.', icon: <HeartHandshake className="h-5 w-5" /> },
  { title: 'Critical Thinking', description: 'Learn how to solve problems in a structured, confident way.', icon: <Lightbulb className="h-5 w-5" /> },
  { title: 'Creativity', description: 'Design games and projects that let every child explore their ideas.', icon: <Globe2 className="h-5 w-5" /> },
  { title: 'Communication', description: 'Practice peer learning, reporting, and sharing in every class.', icon: <Feather className="h-5 w-5" /> },
  { title: 'Problem Solving', description: 'Use project-based tasks to turn abstract challenges into solutions.', icon: <ShieldCheck className="h-5 w-5" /> }
];

export default function BenefitsSection() {
  return (
    <section className="px-6 pb-16 sm:px-10 lg:pb-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 text-center">
          <p className="text-sm uppercase tracking-[0.28em] text-slate-500">Why this bootcamp</p>
          <h2 className="mt-4 text-3xl font-bold text-royal sm:text-4xl">Skills that matter for tomorrow.</h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((item) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-[2rem] border border-slate-200/80 bg-white/90 p-6 shadow-sm"
            >
              <Card
                title={item.title}
                description={item.description}
                icon={item.icon}
                className="border-none bg-transparent p-0 shadow-none"
                titleClassName="text-royal"
                descriptionClassName="text-slate-700"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
