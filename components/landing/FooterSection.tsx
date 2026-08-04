import Image from 'next/image';
import { ArrowRight, Mail, Phone, MessageSquare } from 'lucide-react';

export default function FooterSection() {
  return (
    <footer className="bg-slate-950 px-3 py-8 text-white sm:px-10 sm:py-10">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div className="space-y-4">
            <span className="inline-flex rounded-full bg-emerald-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-emerald-200">
              EkoTech Coaching Centre
            </span>
            <div className="space-y-3">
              <h3 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">Learn, Innovate, Empower.</h3>
              <p className="max-w-2xl text-base leading-7 text-slate-300">
                A premium summer bootcamp for learners aged 6–14+ with live instruction, hands-on robotics, AI, coding and a certificate-ready finish.
              </p>
            </div>
          </div>

          <div className="space-y-5">
            <div>
              <p className="text-sm uppercase tracking-[0.28em] text-slate-400">Contact</p>
              <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-slate-200">
                <span className="inline-flex items-center gap-2 rounded-full bg-slate-900/70 px-3 py-2">
                  <Phone className="h-4 w-4 text-emerald-300" />
                  08091822201
                </span>
                <span className="inline-flex items-center gap-2 rounded-full bg-slate-900/70 px-3 py-2">
                  <Phone className="h-4 w-4 text-emerald-300" />
                  08091822202
                </span>
                <span className="inline-flex items-center gap-2 rounded-full bg-slate-900/70 px-3 py-2">
                  <Phone className="h-4 w-4 text-emerald-300" />
                  08091822203
                </span>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              <div className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-2 text-sm text-emerald-200">
                <MessageSquare className="h-4 w-4" />
                WhatsApp available
              </div>
              <div className="inline-flex items-center gap-3 rounded-full border border-emerald-400/20 bg-slate-900/75 px-3 py-2 shadow-[0_0_25px_rgba(16,185,129,0.12)]">
                <div className="relative h-12 w-12 overflow-hidden rounded-full border border-white/10 bg-white/5">
                  <Image
                    src="/images/cac.jpeg"
                    alt="CAC Approved"
                    width={48}
                    height={48}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <div className="flex flex-col leading-none">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.35em] text-emerald-200">CAC</span>
                  <span className="mt-1 text-xs font-medium text-white">Approved</span>
                </div>
              </div>
            </div>

            <p className="flex items-center gap-3 text-sm text-slate-200">
              <Mail className="h-4 w-4 text-emerald-300" />
              ekotechcentre@gmail.com
            </p>
          </div>
        </div>

        <div className="mt-8 border-t border-white/10 pt-4 text-sm text-slate-400 sm:flex sm:items-center sm:justify-between">
          <p>© 2026 EkoTech Coaching Centre. All rights reserved.</p>
          <p className="inline-flex items-center gap-2 text-slate-300">
            Built for families ·
            <ArrowRight className="h-4 w-4 text-emerald-300" />
          </p>
        </div>
      </div>
    </footer>
  );
}
