'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { ShieldCheck } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/Button';

const paymentSchema = z.object({
  parentName: z.string().min(2, 'Enter parent name'),
  phone: z.string().min(10, 'Enter phone number'),
  whatsapp: z.string().min(10, 'Enter WhatsApp number'),
  email: z.string().email('Enter valid email'),
  studentName: z.string().min(2, 'Enter student name'),
  dob: z.string().min(10, 'Enter date of birth'),
  gender: z.enum(['Male', 'Female', 'Other']),
  state: z.string().min(2, 'Enter state'),
  school: z.string().min(2, 'Enter school'),
  track: z.enum(['Junior', 'Intermediate', 'Senior']),
  source: z.string().min(2, 'How did you hear about us?'),
  agree: z.boolean().refine((value) => value, 'You must agree to terms')
});

type PaymentFormValues = z.infer<typeof paymentSchema>;

const paymentDetails = [
  'Live Zoom instruction',
  'Practical technology projects',
  'Coding & robotics activities',
  'AI and digital skills',
  'Learn French as you go',
  'Learning resources',
  'Certificate of completion',
  'WhatsApp support'
];

const countdownTarget = new Date('2026-08-06T00:00:00');

function useCountdown() {
  const [remaining, setRemaining] = useState(() => {
    if (typeof window === 'undefined') return 0;
    const diff = countdownTarget.getTime() - Date.now();
    return diff > 0 ? diff : 0;
  });

  useEffect(() => {
    const timer = window.setInterval(() => {
      const diff = countdownTarget.getTime() - Date.now();
      setRemaining(diff > 0 ? diff : 0);
    }, 1000);

    return () => window.clearInterval(timer);
  }, []);

  return remaining;
}

function formatCountdown(ms: number) {
  const totalSeconds = Math.floor(ms / 1000);
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

export default function PricingSection() {
  const remaining = useCountdown();
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<PaymentFormValues>({
    resolver: zodResolver(paymentSchema),
    defaultValues: {
      gender: 'Male',
      track: 'Junior',
      agree: false
    }
  });

  const onSubmit = () => {
    setSubmitted(true);
    window.location.href = '/success';
  };

  return (
    <section id="enrol" className="px-6 pb-16 sm:px-8 lg:pb-20">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-[1.5rem] border border-white/10 bg-slate-950/80 p-6 shadow-soft">
          <div className="rounded-[1.5rem] bg-navy/95 p-6 text-white shadow-xl">
            <p className="text-sm uppercase tracking-[0.35em] text-emerald-300">FULL 4-WEEK BOOTCAMP</p>
            <h2 className="mt-4 text-3xl font-semibold text-white">Bootcamp enrolment & program highlights</h2>
            <p className="mt-4 text-sm text-slate-300">A premium live online summer bootcamp for children aged 6–14+ focused on coding, robotics, AI, and digital creativity.</p>
            <p className="mt-4 text-sm text-slate-300">Perfect for learners who want a standout summer experience with expert instruction and hands-on projects.</p>
            <p className="mt-4 text-4xl font-semibold">₦100,000</p>
            <p className="mt-2 text-sm text-slate-300">One-time payment • Certificate included</p>
            <p className="mt-2 text-sm text-slate-300">Aug 5 – Sept 1, 2026</p>
            <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-2">
              {paymentDetails.map((item) => (
                <span key={item} className="inline-flex items-center gap-2 rounded-full bg-slate-800/30 px-3 py-2 text-xs font-medium text-slate-100">
                  <ShieldCheck className="h-4 w-4 text-emerald" />
                  <span className="whitespace-nowrap">{item}</span>
                </span>
              ))}
            </div>
            <div className="mt-6 rounded-[1.5rem] bg-white/10 p-4 text-center text-sm text-slate-200">
              <p className="font-semibold">{remaining ? formatCountdown(remaining) : 'Bootcamp Has Started'}</p>
            </div>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-[1.5rem] border border-white/10 bg-slate-950/80 p-6 shadow-soft">
          <div className="mb-8 space-y-3">
            <p className="text-sm uppercase tracking-[0.35em] text-emerald-300">Enrolment form</p>
            <h2 className="text-3xl font-semibold text-white">Reserve your child’s spot</h2>
            <p className="text-sm text-slate-400">Complete the form below to proceed with secure payment and registration.</p>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="space-y-2 text-sm text-slate-200">
                Parent Name
                <input className="w-full rounded-3xl border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none transition focus:border-emerald focus:ring-2 focus:ring-emerald/20" {...register('parentName')} />
                <p className="text-xs text-rose-500">{errors.parentName?.message}</p>
              </label>
              <label className="space-y-2 text-sm text-slate-200">
                Phone
                <input className="w-full rounded-3xl border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none transition focus:border-emerald focus:ring-2 focus:ring-emerald/20" {...register('phone')} />
                <p className="text-xs text-rose-500">{errors.phone?.message}</p>
              </label>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="space-y-2 text-sm text-slate-200">
                WhatsApp
                <input className="w-full rounded-3xl border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none transition focus:border-emerald focus:ring-2 focus:ring-emerald/20" {...register('whatsapp')} />
                <p className="text-xs text-rose-500">{errors.whatsapp?.message}</p>
              </label>
              <label className="space-y-2 text-sm text-slate-200">
                Email
                <input className="w-full rounded-3xl border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none transition focus:border-emerald focus:ring-2 focus:ring-emerald/20" type="email" {...register('email')} />
                <p className="text-xs text-rose-500">{errors.email?.message}</p>
              </label>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="space-y-2 text-sm text-slate-200">
                Student Name
                <input className="w-full rounded-3xl border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none transition focus:border-emerald focus:ring-2 focus:ring-emerald/20" {...register('studentName')} />
                <p className="text-xs text-rose-500">{errors.studentName?.message}</p>
              </label>
              <label className="space-y-2 text-sm text-slate-200">
                Date of Birth
                <input className="w-full rounded-3xl border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none transition focus:border-emerald focus:ring-2 focus:ring-emerald/20" type="date" {...register('dob')} />
                <p className="text-xs text-rose-500">{errors.dob?.message}</p>
              </label>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="space-y-2 text-sm text-slate-200">
                Gender
                <select className="w-full rounded-3xl border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none transition focus:border-emerald focus:ring-2 focus:ring-emerald/20" {...register('gender')}>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </select>
                <p className="text-xs text-rose-500">{errors.gender?.message}</p>
              </label>
              <label className="space-y-2 text-sm text-slate-200">
                State
                <input className="w-full rounded-3xl border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none transition focus:border-emerald focus:ring-2 focus:ring-emerald/20" {...register('state')} />
                <p className="text-xs text-rose-500">{errors.state?.message}</p>
              </label>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="space-y-2 text-sm text-slate-200">
                School
                <input className="w-full rounded-3xl border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none transition focus:border-emerald focus:ring-2 focus:ring-emerald/20" {...register('school')} />
                <p className="text-xs text-rose-500">{errors.school?.message}</p>
              </label>
              <label className="space-y-2 text-sm text-slate-200">
                Select Age Track
                <select className="w-full rounded-3xl border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none transition focus:border-emerald focus:ring-2 focus:ring-emerald/20" {...register('track')}>
                  <option>Junior</option>
                  <option>Intermediate</option>
                  <option>Senior</option>
                </select>
                <p className="text-xs text-rose-500">{errors.track?.message}</p>
              </label>
            </div>
            <div className="space-y-2 text-sm text-slate-200">
              <label className="space-y-2 text-sm text-slate-200">
                How did you hear about us?
                <input className="w-full rounded-3xl border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none transition focus:border-emerald focus:ring-2 focus:ring-emerald/20" {...register('source')} />
                <p className="text-xs text-rose-500">{errors.source?.message}</p>
              </label>
            </div>
            <div className="flex items-start gap-3">
              <label className="flex items-center gap-3 text-sm text-slate-700">
                <input type="checkbox" className="h-4 w-4 rounded border-slate-300 text-royal focus:ring-royal" {...register('agree')} />
                I agree to terms and data policy.
              </label>
            </div>
            <p className="text-xs text-rose-500">{errors.agree?.message}</p>
            <div className="space-y-2">
              <Button type="submit" className="w-full bg-emerald text-slate-950 hover:bg-emerald-400">Pay & Enrol Now</Button>
              <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-3 text-sm text-slate-300">
                <p className="font-semibold text-white">Paystack placeholder</p>
                <p>Secure payment placeholder button will redirect to success page.</p>
              </div>
            </div>
            {submitted && <p className="text-sm text-emerald-400">Redirecting to success page…</p>}
          </form>
        </motion.div>
      </div>
    </section>
  );
}
