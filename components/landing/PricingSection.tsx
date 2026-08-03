'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { ShieldCheck } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import Button from '@/components/ui/Button';

const paymentSchema = z.object({
  parentName: z.string().min(2, 'Enter parent name'),
  phone: z.string().min(10, 'Enter phone number'),
  whatsapp: z.string().min(10, 'Enter WhatsApp number'),
  email: z.string().email('Enter valid email'),
  studentName: z.string().min(2, 'Enter student name'),
  dob: z.string().min(10, 'Enter date of birth'),
  gender: z.enum(['Male', 'Female', 'Other']),
  state: z.string().min(2, 'Enter state'),
  track: z.enum(['Junior', 'Intermediate', 'Senior']),
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
  const [remaining, setRemaining] = useState(0);

  useEffect(() => {
    const updateRemaining = () => {
      const diff = countdownTarget.getTime() - Date.now();
      setRemaining(diff > 0 ? diff : 0);
    };

    updateRemaining();
    const timer = window.setInterval(updateRemaining, 1000);

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

function calculateAge(dateOfBirth: string) {
  if (!dateOfBirth) return 'N/A';

  const birthDate = new Date(dateOfBirth);
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();

  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
    age -= 1;
  }

  return `${age} years`;
}

export default function PricingSection() {
  const remaining = useCountdown();
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const {
    register,
    handleSubmit,
    getValues,
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
  };

  const copyAccountDetails = async () => {
    const accountDetails = `Bank name: STERLING BANK\nAccount name: EKOTECH COACHING HUB\nAccount Number: 0148583020`;

    try {
      await navigator.clipboard.writeText(accountDetails);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  };

  const handlePaid = () => {
    const values = getValues();
    const message = [
      `Parent name: ${values.parentName}`,
      `Student name: ${values.studentName}`,
      `Email: ${values.email}`,
      `Age: ${calculateAge(values.dob)}`,
      `Gender: ${values.gender}`,
      `Age track: ${values.track}`,
      'Amount: ₦100,000',
      'Payment status: I have paid'
    ].join('\n');

    const whatsappUrl = `https://wa.me/2348066604664?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="enrol" className="scroll-mt-24 px-3 pb-16 sm:px-8 lg:pb-20">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="order-1 min-w-0 rounded-[1.5rem] border border-emerald-300/20 bg-gradient-to-br from-emerald-500/10 via-slate-950/90 to-slate-950/95 p-1 shadow-soft lg:order-1">
          <div className="min-w-0 rounded-[1.5rem] bg-slate-950/95 p-6 text-white shadow-xl ring-1 ring-white/10">
            <div className="mb-6 space-y-4">
              <span className="inline-flex items-center rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-emerald-100">
                FULL 4-WEEKS BOOTCAMP
              </span>
              <div className="space-y-3">
                <h2 className="text-3xl font-semibold tracking-tight text-white">Bootcamp enrolment & program highlights</h2>
                <p className="max-w-2xl text-sm leading-6 text-slate-300">A premium live online summer bootcamp for children aged 6–14+ focused on coding, robotics, AI, and digital creativity.</p>
                <p className="max-w-2xl text-sm leading-6 text-slate-300">Perfect for learners who want a standout summer experience with expert instruction and hands-on projects.</p>
              </div>
            </div>

            <div className="grid gap-4 lg:grid-cols-[0.72fr_1.28fr]">
              <div className="rounded-[1.5rem] border border-emerald-300/20 bg-emerald-500/10 p-5">
                <p className="text-xs uppercase tracking-[0.35em] text-emerald-300">Program fee</p>
                <p className="mt-3 text-4xl font-semibold text-emerald-100">₦100,000</p>
                <p className="mt-2 text-sm leading-6 text-slate-300">One-time payment • Certificate included</p>
              </div>
              <div className="rounded-[1.5rem] border border-white/10 bg-slate-900/95 p-5">
                <p className="text-xs uppercase tracking-[0.35em] text-emerald-300">Summer cohort</p>
                <p className="mt-3 text-xl font-semibold text-white">Aug 5 – Sept 1, 2026</p>
                <p className="mt-2 text-sm leading-6 text-slate-400">Live instructor-led sessions, hands-on projects, progress reviews, certificate showcase.</p>
              </div>
            </div>

            <div className="mt-6 rounded-[1.5rem] bg-slate-900/95 p-6 ring-1 ring-emerald-300/10">
              <h3 className="text-lg font-semibold text-white">What’s included</h3>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {paymentDetails.map((item) => (
                  <div key={item} className="rounded-2xl border border-emerald-500/10 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-100">
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 rounded-[1.5rem] bg-emerald-600/10 p-4 text-center text-sm text-emerald-100 ring-1 ring-emerald-300/20">
              <p className="font-semibold">{remaining ? formatCountdown(remaining) : 'Bootcamp Has Started'}</p>
            </div>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="order-2 rounded-[1.75rem] border border-white/10 bg-[linear-gradient(180deg,rgba(16,24,40,0.98),rgba(2,6,23,0.98))] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.35)] ring-1 ring-white/5 lg:order-2">
          <div className="mb-8 space-y-4">
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center rounded-full bg-emerald-500/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.35em] text-emerald-200 ring-1 ring-emerald-300/20">Premium enrolment</span>
            </div>
            <div className="space-y-2">
              <p className="text-sm uppercase tracking-[0.35em] text-emerald-300">Enrolment form</p>
              <h2 className="text-3xl font-semibold text-white">Join a class now.</h2>
              <p className="max-w-xl text-sm leading-6 text-slate-400">Complete the short registration below to confirm your place in the premium summer bootcamp experience.</p>
            </div>
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
                Select Age Track
                <select className="w-full rounded-3xl border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none transition focus:border-emerald focus:ring-2 focus:ring-emerald/20" {...register('track')}>
                  <option>Junior</option>
                  <option>Intermediate</option>
                  <option>Senior</option>
                </select>
                <p className="text-xs text-rose-500">{errors.track?.message}</p>
              </label>
              <div className="rounded-3xl border border-emerald-300/20 bg-emerald-500/10 p-4 text-sm text-emerald-100">
                <p className="text-[10px] uppercase tracking-[0.35em] text-emerald-300">Registration</p>
                <p className="mt-2 font-semibold text-white">Secure your seat in one seamless step</p>
                <p className="mt-2 text-slate-300">A guided premium checkout experience with live support and instant confirmation.</p>
              </div>
            </div>
            <div className="flex items-start gap-3 rounded-3xl border border-white/10 bg-slate-900/60 px-4 py-3">
              <label className="flex items-center gap-3 text-sm text-slate-200">
                <input type="checkbox" className="h-4 w-4 rounded border-slate-300 text-emerald focus:ring-emerald" {...register('agree')} />
                I agree to the terms and privacy policy.
              </label>
            </div>
            <p className="text-xs text-rose-500">{errors.agree?.message}</p>
            <div className="space-y-2">
              <Button type="submit" className="w-full bg-emerald text-slate-950 hover:bg-emerald-400">Pay & Enrol Now</Button>
            </div>
            {submitted && (
              <div className="space-y-4">
                <p className="rounded-2xl border border-emerald-300/20 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-100">
                  Copy the account details below and pay via transfer. Payment is secure.
                </p>
                <div className="rounded-[1.75rem] border border-emerald-300/20 bg-[linear-gradient(135deg,rgba(16,185,129,0.14),rgba(15,23,42,0.96))] p-5 text-sm text-slate-100 shadow-soft">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between gap-3">
                      <span className="text-slate-300">Bank name</span>
                      <span className="font-semibold text-white">STERLING BANK</span>
                    </div>
                    <div className="flex items-center justify-between gap-3">
                      <span className="text-slate-300">Account name</span>
                      <span className="font-semibold text-white">EKOTECH COACHING HUB</span>
                    </div>
                    <div className="flex items-center justify-between gap-3 rounded-2xl border border-white/10 bg-slate-900/70 px-3 py-2">
                      <span className="text-slate-300">Account Number</span>
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-white">0148583020</span>
                        <button
                          type="button"
                          onClick={copyAccountDetails}
                          className="rounded-full bg-emerald px-3 py-1 text-xs font-semibold text-slate-950 transition hover:bg-emerald-300"
                        >
                          {copied ? 'Copied' : 'Copy account'}
                        </button>
                      </div>
                    </div>
                    <div className="flex items-center justify-between gap-3 rounded-2xl border border-white/10 bg-slate-900/70 px-3 py-2">
                      <span className="text-slate-300">Amount</span>
                      <span className="font-semibold text-white">₦100,000</span>
                    </div>
                  </div>
                  <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <div className="text-xs text-slate-300">Click here after successful payment</div>
                    <button
                      type="button"
                      onClick={handlePaid}
                      className="inline-flex items-center justify-center rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-slate-100"
                    >
                      I have paid
                    </button>
                  </div>
                </div>
              </div>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
}
