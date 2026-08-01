'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ShoppingCart } from 'lucide-react';
import Button from '@/components/ui/Button';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-30 border-b border-white/10 bg-white backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2 sm:px-10">
        <div className="h-10 w-[120px]">
          <Image
            src="/images/logo.png"
            alt="EkoTech logo"
            width={120}
            height={40}
            className="h-auto w-auto object-contain"
            priority
          />
        </div>
        <div className="hidden items-center gap-4 md:flex">
          <a
            href="https://wa.me/2348091822201"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-2 text-sm font-semibold text-white shadow-md shadow-[#25d366]/20 transition hover:bg-[#1ebe57]"
          >
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white text-[#25D366]">
              <svg viewBox="0 0 32 32" className="h-4 w-4" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.018 3.76c-6.766 0-12.255 5.507-12.255 12.3 0 2.167.573 4.337 1.658 6.235L3.2 28l6.125-1.613a12.172 12.172 0 0 0 5.69 1.45h.007c6.768 0 12.255-5.507 12.255-12.3 0-6.793-5.487-12.3-12.257-12.3Zm0 22.5a10.2 10.2 0 0 1-5.229-1.432l-.374-.22-3.633.96.97-3.539-.244-.367A10.14 10.14 0 1 1 26.2 16.058a10.098 10.098 0 0 1-10.182 10.2Zm5.688-7.956c-.312-.157-1.842-.91-2.128-1.015-.285-.106-.493-.157-.7.157-.208.312-.804 1.015-.987 1.223-.18.207-.362.234-.673.078-.312-.156-1.314-.484-2.5-1.537-.925-.825-1.55-1.846-1.732-2.158-.18-.312-.02-.48.138-.637.142-.14.312-.363.468-.545.156-.182.208-.312.312-.52.104-.208.052-.39-.026-.546-.078-.156-.7-1.69-.96-2.315-.253-.607-.51-.524-.7-.534l-.598-.01c-.207 0-.545.078-.83.39-.285.312-1.087 1.062-1.087 2.59 0 1.526 1.114 3.005 1.267 3.213.156.208 2.19 3.346 5.3 4.692.741.32 1.318.51 1.767.653.742.24 1.417.207 1.95.126.595-.092 1.842-.752 2.102-1.478.26-.728.26-1.353.182-1.48-.078-.126-.285-.208-.597-.364Z"/>
              </svg>
            </span>
            08091822201
          </a>
          <Button variant="primary" onClick={() => document.getElementById('enrol')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}>
            Enrol Now
          </Button>
        </div>
        <div className="flex items-center gap-2 md:hidden">
          <a
            href="https://wa.me/2348091822201"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-3 py-2 text-xs font-semibold text-white shadow-md shadow-[#25d366]/20 transition hover:bg-[#1ebe57]"
          >
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white text-[#25D366]">
              <svg viewBox="0 0 32 32" className="h-3.5 w-3.5" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.018 3.76c-6.766 0-12.255 5.507-12.255 12.3 0 2.167.573 4.337 1.658 6.235L3.2 28l6.125-1.613a12.172 12.172 0 0 0 5.69 1.45h.007c6.768 0 12.255-5.507 12.255-12.3 0-6.793-5.487-12.3-12.257-12.3Zm0 22.5a10.2 10.2 0 0 1-5.229-1.432l-.374-.22-3.633.96.97-3.539-.244-.367A10.14 10.14 0 1 1 26.2 16.058a10.098 10.098 0 0 1-10.182 10.2Zm5.688-7.956c-.312-.157-1.842-.91-2.128-1.015-.285-.106-.493-.157-.7.157-.208.312-.804 1.015-.987 1.223-.18.207-.362.234-.673.078-.312-.156-1.314-.484-2.5-1.537-.925-.825-1.55-1.846-1.732-2.158-.18-.312-.02-.48.138-.637.142-.14.312-.363.468-.545.156-.182.208-.312.312-.52.104-.208.052-.39-.026-.546-.078-.156-.7-1.69-.96-2.315-.253-.607-.51-.524-.7-.534l-.598-.01c-.207 0-.545.078-.83.39-.285.312-1.087 1.062-1.087 2.59 0 1.526 1.114 3.005 1.267 3.213.156.208 2.19 3.346 5.3 4.692.741.32 1.318.51 1.767.653.742.24 1.417.207 1.95.126.595-.092 1.842-.752 2.102-1.478.26-.728.26-1.353.182-1.48-.078-.126-.285-.208-.597-.364Z"/>
              </svg>
            </span>
            08091822201
          </a>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="fixed bottom-4 left-1/2 z-40 flex w-[min(96%,420px)] -translate-x-1/2 rounded-full bg-navy px-4 py-3 text-white shadow-2xl md:hidden"
      >
        <div className="flex items-center justify-between">
          <span className="text-sm font-semibold">Ready for the bootcamp?</span>
          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-full bg-emerald px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-emerald/20"
            onClick={() => document.getElementById('enrol')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Enrol <ShoppingCart className="h-4 w-4" />
          </button>
        </div>
      </motion.div>
    </header>
  );
}
