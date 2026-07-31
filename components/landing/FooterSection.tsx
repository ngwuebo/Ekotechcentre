import { ArrowRight, Facebook, Instagram, Linkedin, Mail, Phone } from 'lucide-react';

export default function FooterSection() {
  return (
    <footer className="bg-navy px-6 py-12 text-white sm:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-8 lg:grid-cols-[1.5fr_1fr] lg:items-start">
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.32em] text-emerald-200">EkoTech Coaching Centre</p>
            <h3 className="text-2xl font-semibold">Learn. Innovate. Empower.</h3>
            <p className="max-w-xl text-sm leading-7 text-slate-300">A premium summer tech bootcamp for children aged 6–14+, designed to build real skills through live classes, projects, and mentorship.</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-3">
              <p className="text-sm uppercase tracking-[0.28em] text-slate-300">Contact</p>
              <p className="flex items-center gap-2 text-sm text-slate-200"><Phone className="h-4 w-4" /> +234 800 123 4567</p>
              <p className="flex items-center gap-2 text-sm text-slate-200"><Mail className="h-4 w-4" /> hello@ekotech.ng</p>
            </div>
            <div className="space-y-3">
              <p className="text-sm uppercase tracking-[0.28em] text-slate-300">Connect</p>
              <div className="flex items-center gap-3 text-slate-200">
                <Facebook className="h-5 w-5" />
                <Instagram className="h-5 w-5" />
                <Linkedin className="h-5 w-5" />
              </div>
              <p className="text-xs text-slate-400">CAC Registration No. 1234567</p>
              <p className="text-xs text-slate-400">SSL Secure · Paystack</p>
            </div>
          </div>
        </div>
        <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-slate-300 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 EkoTech Coaching Centre. All rights reserved.</p>
          <p className="inline-flex items-center gap-2">Built for families · <ArrowRight className="h-4 w-4" /></p>
        </div>
      </div>
    </footer>
  );
}
