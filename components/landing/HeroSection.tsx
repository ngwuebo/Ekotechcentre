'use client';

import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, CheckCircle2, Sparkles, Calendar, Users, Video, Award } from 'lucide-react';
import Button from '@/components/ui/Button';
import { useEffect, useState } from 'react';

const features = [
  'Live Zoom instruction',
  'Practical technology projects',
  'Coding & robotics activities',
  'AI and digital skills',
  'Learn French as you go',
  'Learning resources',
  'Certificate of completion',
  'WhatsApp support'
];

const heroPhrases = [
  'Get a head start in digital literacy, ICT, and AI',
  'From age 6 to secondary school and graduates',
  'Turn screen time into career-ready skills',
  'start your tech journey today',
  'from beginner to tech creator'
];

export default function HeroSection() {
  const [activePhrase, setActivePhrase] = useState(0);
  const [desktopHero, setDesktopHero] = useState(0);
  const [mobileHero, setMobileHero] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActivePhrase((current) => (current + 1) % heroPhrases.length);
      setDesktopHero((current) => (current === 0 ? 1 : 0));
      setMobileHero((current) => (current === 0 ? 1 : 0));
    }, 6000);

    return () => window.clearInterval(interval);
  }, []);

  const headlineAnimations = [
    // 1: gentle rise from below
    {
      initial: { opacity: 0, y: 24, scale: 0.98 },
      animate: { opacity: 1, y: 0, scale: 1 },
      exit: { opacity: 0, y: -18 },
      transition: { duration: 0.9, ease: 'easeInOut' }
    },
    // 2: subtle zoom in (smooth)
    {
      initial: { opacity: 0, scale: 0.92 },
      animate: { opacity: 1, scale: 1 },
      exit: { opacity: 0, scale: 0.98 },
      transition: { duration: 1.1, ease: 'easeInOut' }
    },
    // 3: slide in from right and rise slightly
    {
      initial: { opacity: 0, x: 60, y: 8 },
      animate: { opacity: 1, x: 0, y: 0 },
      exit: { opacity: 0, x: -40 },
      transition: { duration: 1.0, ease: 'easeInOut' }
    },
    // 4: slide in from left, lift upward
    {
      initial: { opacity: 0, x: -60, y: 24 },
      animate: { opacity: 1, x: 0, y: 0 },
      exit: { opacity: 0, x: 40, y: -12 },
      transition: { duration: 0.95, ease: 'easeInOut' }
    },
    // 5: fade with a small skew/rotate feel
    {
      initial: { opacity: 0, rotate: -2, y: 8 },
      animate: { opacity: 1, rotate: 0, y: 0 },
      exit: { opacity: 0, rotate: 2, y: -8 },
      transition: { duration: 1.2, ease: 'easeInOut' }
    }
  ];

  return (
    <>
      <section className="relative overflow-hidden px-0 pb-8 sm:px-0 sm:pb-10">
        <div className="hero-aspect">
          <div className="absolute inset-0 hidden sm:block">
            <Image
              src="/images/hero1.png"
              alt="Hero desktop background"
              fill
              className="absolute inset-0 object-cover object-center transition-opacity duration-1000 ease-in-out"
              style={{ opacity: desktopHero === 0 ? 1 : 0 }}
              priority
            />
            <Image
              src="/images/hero3.png"
              alt="Hero desktop background"
              fill
              className="absolute inset-0 object-cover object-center transition-opacity duration-1000 ease-in-out"
              style={{ opacity: desktopHero === 1 ? 1 : 0 }}
              priority
            />
          </div>
          <div className="absolute inset-0 sm:hidden">
            <Image
              src="/images/hero2.png"
              alt="Hero mobile background"
              fill
              className="absolute inset-0 object-cover object-center transition-opacity duration-1000 ease-in-out"
              style={{ opacity: mobileHero === 0 ? 1 : 0 }}
              priority
            />
            <Image
              src="/images/hero4.png"
              alt="Hero mobile background"
              fill
              className="absolute inset-0 object-cover object-center transition-opacity duration-1000 ease-in-out"
              style={{ opacity: mobileHero === 1 ? 1 : 0 }}
              priority
            />
          </div>
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-slate-950/15 backdrop-blur-xs" />
            <div className="relative z-10 flex min-h-full flex-col justify-between px-6 py-6 sm:px-10 sm:py-10">
              <div className="max-w-2xl text-left text-white">
                <p className="mb-4 text-sm uppercase tracking-[0.3em] text-slate-200">Learn. Innovate. Empower.</p>
                <div className="mt-2 overflow-hidden">
                  <AnimatePresence mode="wait">
                    <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }} className="relative">
                      <motion.h1
                        key={heroPhrases[activePhrase]}
                        initial={{ opacity: 0, y: 24, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -18 }}
                        transition={{ duration: 0.9, ease: 'easeInOut' }}
                        className="mt-3 sm:mt-8 max-w-[min(100%,40rem)] text-[clamp(1.85rem,5vw,3.75rem)] font-bold leading-tight tracking-tight text-white sm:text-[clamp(2.5rem,4vw,4.75rem)] lg:text-[clamp(3.25rem,3vw,5.5rem)]"
                      >
                        🚀 {heroPhrases[activePhrase]}
                      </motion.h1>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
              <div className="flex justify-center">
                <a
                  href="#enrol"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('enrol')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }}
                  style={{ backgroundColor: '#16a34a' }}
                  className="relative z-20 inline-flex w-auto max-w-[280px] flex-col items-center justify-center rounded-full px-9 py-3 text-white shadow-[0_20px_60px_rgba(16,185,129,0.22)] ring-1 ring-white/10 transition duration-200 ease-out hover:bg-emerald-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-200 sm:px-10"
                >
                  <span className="text-sm font-semibold uppercase tracking-[0.12em]">ENROL NOW</span>
                  <span className="mt-1 text-[12px] text-white/90">Book a spot for your child</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 pb-12 sm:px-8 sm:pt-8 lg:pb-20">
        <div className="mx-auto max-w-4xl space-y-6 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-emerald-300">EkoTech Coaching Centre</p>
          <p className="text-lg font-semibold uppercase tracking-[0.3em] text-white/90">Learn. Innovate. Empower.</p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl"
          >
            🚀 ICT • CODING • ROBOTICS SUMMER BOOTCAMP
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.05 }}
            className="mx-auto max-w-2xl text-base leading-8 text-white/85 sm:text-lg"
          >
            Give Your Child a Head Start in Technology This Summer.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.1 }}
            className="mx-auto max-w-2xl text-base leading-8 text-white/75 sm:text-lg"
          >
            A <span className="font-semibold text-white">4-weeks live virtual technology bootcamp</span> designed for children and teenagers to learn coding, robotics, AI, digital creativity and other practical ICT skills through <span className="font-semibold text-white">live instructor-led Zoom classes and hands-on projects.</span>
          </motion.p>
          <div className="grid gap-3 grid-cols-2 sm:grid-cols-2">
            <div className="flex items-center gap-4 rounded-2xl border border-slate-700/50 bg-slate-800/40 p-3 text-sm text-white">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-500 text-white">
                <Calendar className="h-5 w-5" />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.22em] text-slate-300">Dates</p>
                <p className="mt-1 font-semibold text-white text-sm">Aug 5 – Sept 1, 2026</p>
              </div>
            </div>

            <div className="flex items-center gap-4 rounded-2xl border border-slate-700/50 bg-slate-800/40 p-3 text-sm text-white">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-500 text-white">
                <Users className="h-5 w-5" />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.22em] text-slate-300">Ages</p>
                <p className="mt-1 font-semibold text-white text-sm">6–14+ years</p>
              </div>
            </div>

            <div className="flex items-center gap-4 rounded-2xl border border-slate-700/50 bg-slate-800/40 p-3 text-sm text-white">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-500 text-white">
                <Video className="h-5 w-5" />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.22em] text-slate-300">Delivery</p>
                <p className="mt-1 font-semibold text-white text-sm">100% Live Online via Zoom</p>
              </div>
            </div>

            <div className="flex items-center gap-4 rounded-2xl border border-slate-700/50 bg-slate-800/40 p-3 text-sm text-white">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-500 text-white">
                <Award className="h-5 w-5" />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.22em] text-slate-300">Certification</p>
                <p className="mt-1 font-semibold text-white text-sm">Certificate Included</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-center">
            <a
              href="#enrol"
              onClick={(e) => { e.preventDefault(); document.getElementById('enrol')?.scrollIntoView({ behavior: 'smooth', block: 'start' }); }}
              className="inline-flex items-center justify-center rounded-full bg-emerald px-8 py-3 text-base font-semibold text-slate-950 shadow-[0_18px_60px_rgba(34,197,94,0.2)] ring-2 ring-emerald-300 transition hover:bg-emerald-400 sm:px-10 sm:text-lg"
            >
              BOOK A SPOT FOR YOUR CHILD
            </a>
          </div>
          <p className="text-sm text-white/70">🔒 Secure payment via bank transfer</p>
        </div>
      </section>

      <section className="px-6 pt-10 pb-20 sm:px-10 sm:pt-12 lg:pb-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature} className="flex items-start gap-3 rounded-3xl border border-white/10 bg-slate-950/80 px-4 py-4 text-sm text-white/90 shadow-soft">
                <CheckCircle2 className="mt-1 h-5 w-5 text-emerald" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Button
              variant="primary"
              className="w-full sm:w-auto px-8 py-4 text-base shadow-[0_24px_90px_rgba(34,197,94,0.22)] ring-2 ring-emerald-400/30"
              onClick={() => document.getElementById('enrol')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
            >
              Enrol My Child
            </Button>
            <a
              href="#enrol"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('enrol')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
              className="inline-flex w-full items-center justify-center rounded-full bg-slate-900 text-white !border-transparent px-8 py-4 text-base font-semibold shadow-[0_24px_90px_rgba(34,197,94,0.22)] ring-2 ring-emerald-400/30 transition hover:bg-slate-800 sm:w-auto sm:px-10 sm:text-lg"
            >
              View Schedule <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>
          <div className="mt-8 flex flex-wrap gap-3 rounded-2xl border border-slate-700/40 bg-slate-800/40 p-4 shadow-soft">
            <div className="min-w-[140px]">
              <p className="text-xs uppercase tracking-[0.2em] text-slate-300">Age</p>
              <p className="mt-1 font-semibold text-white">6–14+ years</p>
            </div>
            <div className="min-w-[140px]">
              <p className="text-xs uppercase tracking-[0.2em] text-slate-300">Program</p>
              <p className="mt-1 font-semibold text-white">Aug 5 – Sept 1</p>
            </div>
            <div className="min-w-[140px]">
              <p className="text-xs uppercase tracking-[0.2em] text-slate-300">Price</p>
              <p className="mt-1 font-semibold text-white">₦100,000</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
