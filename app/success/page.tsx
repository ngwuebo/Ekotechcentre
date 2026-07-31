'use client';

import { motion } from 'framer-motion';
import { CheckCircle2, Download, MessageSquare, Mail, ShieldCheck } from 'lucide-react';

export default function SuccessPage() {
  return (
    <main className="min-h-screen bg-soft px-6 py-12 text-navy sm:px-10">
      <div className="mx-auto flex max-w-4xl flex-col gap-10 rounded-[2rem] border border-white/70 bg-white/90 p-8 shadow-soft backdrop-blur-xl">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="mx-auto inline-flex h-20 w-20 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 shadow-lg shadow-emerald-100/70">
            <CheckCircle2 className="h-10 w-10" />
          </div>
          <h1 className="mt-8 text-center text-4xl font-semibold">Payment Successful</h1>
          <p className="mx-auto mt-4 max-w-2xl text-center text-base text-slate-600">Your child is enrolled for the live bootcamp. Check your email for the welcome pack and Zoom details.</p>
        </motion.div>
        <motion.div className="grid gap-6 md:grid-cols-2" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.15 }}>
          <div className="space-y-4 rounded-3xl bg-navy/5 p-6 shadow-sm">
            <div className="flex items-center gap-3 text-navy">
              <ShieldCheck className="h-6 w-6 text-emerald-500" />
              <span className="text-sm uppercase tracking-[0.25em] text-slate-500">Secure payment</span>
            </div>
            <p className="text-base leading-7 text-slate-700">Your transaction is protected, and your seat is reserved instantly.</p>
          </div>
          <div className="space-y-4 rounded-3xl bg-white p-6 shadow-sm">
            <div className="flex items-center gap-3 text-navy">
              <Download className="h-6 w-6 text-royal-500" />
              <span className="text-sm uppercase tracking-[0.25em] text-slate-500">Receipt ready</span>
            </div>
            <p className="text-base leading-7 text-slate-700">Download the receipt and keep it for your records. Your bootcamp confirmation is on its way.</p>
          </div>
        </motion.div>
        <motion.div className="grid gap-4 sm:grid-cols-3" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.25 }}>
          {[
            { icon: Mail, label: 'Check Email' },
            { icon: MessageSquare, label: 'Join WhatsApp' },
            { icon: ShieldCheck, label: 'Save Student ID' }
          ].map((item) => (
            <div key={item.label} className="rounded-3xl border border-slate-200 bg-white p-5 text-center shadow-sm">
              <item.icon className="mx-auto mb-3 h-7 w-7 text-royal" />
              <p className="font-semibold text-slate-900">{item.label}</p>
            </div>
          ))}
        </motion.div>
        <div className="grid gap-4 rounded-3xl bg-navy text-white p-6 shadow-soft md:grid-cols-2">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-slate-300">Student ID</p>
            <p className="mt-3 text-2xl font-semibold">EKOHUB-2026-1432</p>
          </div>
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-slate-300">Payment reference</p>
            <p className="mt-3 text-2xl font-semibold">PSK-8675309</p>
          </div>
        </div>
      </div>
    </main>
  );
}
