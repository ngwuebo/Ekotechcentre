interface SectionHeadingProps {
  title: string;
  subtitle: string;
}

export function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p className="text-sm uppercase tracking-[0.32em] text-slate-400">{subtitle}</p>
      <h2 className="mt-4 text-3xl font-semibold text-navy sm:text-4xl">{title}</h2>
    </div>
  );
}
