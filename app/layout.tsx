import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';

export const metadata: Metadata = {
  title: 'EkoTech Coaching Centre | Premium Live Online Bootcamp',
  description: 'Premium 4-weeks live online technology bootcamp for ages 6–14+ with live Zoom classes, coding, robotics, AI, projects, certificate, and WhatsApp support.',
  metadataBase: new URL('https://ekotech.ng'),
  openGraph: {
    title: 'EkoTech Coaching Centre | Premium Live Online Bootcamp',
    description: 'Premium 4-weeks live online technology bootcamp for ages 6–14+ with live Zoom classes, coding, robotics, AI, projects, certificate, and WhatsApp support.',
    type: 'website',
    images: [{ url: '/images/text2.png', width: 1200, height: 630 }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EkoTech Coaching Centre',
    description: 'Premium live online bootcamp for ages 6–14+ with live Zoom classes and hands-on projects.',
    images: '/images/text2.png'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-soft text-slate-100 selection:bg-emerald selection:text-slate-950">
        <Script id="fb-pixel" strategy="afterInteractive">
          {`!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '1943158563766626');
fbq('track', 'PageView');`}
        </Script>
        <noscript>
          <img height="1" width="1" style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=1943158563766626&ev=PageView&noscript=1"
            alt="facebook-pixel" />
        </noscript>
        {children}
      </body>
    </html>
  );
}
