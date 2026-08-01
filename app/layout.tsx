import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'EkoTech Coaching Centre | Premium Live Online Bootcamp',
  description: 'Premium 4-weeks live online technology bootcamp for ages 6–14+ with live Zoom classes, coding, robotics, AI, projects, certificate, and WhatsApp support.',
  metadataBase: new URL('https://ekotech.ng'),
  openGraph: {
    title: 'EkoTech Coaching Centre | Premium Live Online Bootcamp',
    description: 'Premium 4-weeks live online technology bootcamp for ages 6–14+ with live Zoom classes, coding, robotics, AI, projects, certificate, and WhatsApp support.',
    type: 'website',
    images: [{ url: '/images/text1.png', width: 1200, height: 630 }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EkoTech Coaching Centre',
    description: 'Premium live online bootcamp for ages 6–14+ with live Zoom classes and hands-on projects.',
    images: '/images/text1.png'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-soft text-slate-100 selection:bg-emerald selection:text-slate-950">
        {children}
      </body>
    </html>
  );
}
