import type { ReactNode } from 'react';

interface CardProps {
  title: string;
  description: string;
  icon?: ReactNode;
  className?: string;
  titleClassName?: string;
  descriptionClassName?: string;
}

export function Card({
  title,
  description,
  icon,
  className = '',
  titleClassName = '',
  descriptionClassName = ''
}: CardProps) {
  return (
    <div className={`rounded-3xl border border-slate-200/80 bg-white/90 p-6 shadow-sm backdrop-blur-xl ${className}`}>
      <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100 text-royal">{icon}</div>
      <h3 className={`text-xl font-semibold text-slate-950 ${titleClassName}`}>{title}</h3>
      <p className={`mt-3 text-sm leading-7 text-slate-600 ${descriptionClassName}`}>{description}</p>
    </div>
  );
}
