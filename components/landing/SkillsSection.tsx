'use client';

import { motion } from 'framer-motion';

const skillGroups = [
  {
    title: 'Coding & Web',
    items: ['Coding', 'HTML', 'CSS', 'Python', 'Web Design', 'Game Development']
  },
  {
    title: 'AI & Analytics',
    items: ['Artificial Intelligence', 'AI Content Creation', 'Data Analytics', 'Power BI', 'Cyber Security', 'Microsoft Office']
  },
  {
    title: 'Creative Tech',
    items: ['Robotics', '2D Modelling', '3D Modelling', 'Graphics Design', 'Social Media', 'Digital Creativity']
  }
];

export default function SkillsSection() {
  return (
    <section className="bg-slate-950 px-6 pb-16 pt-20 sm:px-10 lg:pb-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 text-center">
          <p className="text-sm uppercase tracking-[0.32em] text-emerald-300">Skills grid</p>
          <h2 className="mt-4 text-4xl font-extrabold text-white sm:text-5xl">A wide range of modern skill building.</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-slate-300">
            We grouped key skill tracks into premium learning themes so the section is compact, clear, and more focused on what matters most.
          </p>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {skillGroups.map((group) => (
            <motion.div
              key={group.title}
              whileHover={{ y: -2 }}
              className="rounded-[2rem] border border-slate-800 bg-slate-900/95 p-6 shadow-soft transition duration-300 hover:-translate-y-1 hover:border-emerald-400/30"
            >
              <div className="mb-6 flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.32em] text-emerald-300">{group.title}</p>
                  <p className="mt-3 text-2xl font-semibold text-white">{group.items.length} skills</p>
                </div>
                <div className="rounded-full bg-emerald-500/15 px-3 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-emerald-200">
                  Focused
                </div>
              </div>
              <div className="grid gap-3">
                {group.items.map((item) => (
                  <div key={item} className="rounded-3xl border border-slate-800 bg-slate-950/90 px-4 py-3 text-sm font-medium text-slate-100">
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
