import { motion, type HTMLMotionProps } from 'framer-motion';

interface ButtonProps extends HTMLMotionProps<'button'> {
  variant?: 'primary' | 'secondary';
}

export default function Button({ variant = 'primary', className = '', ...props }: ButtonProps) {
  return (
    <motion.button
      whileHover={{ y: -1, scale: 1.01 }}
      whileTap={{ scale: 0.98 }}
      className={`inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition duration-200 ${
        variant === 'primary'
          ? 'bg-emerald text-white shadow-[0_20px_60px_rgba(34,197,94,0.18)] hover:bg-emerald-500'
          : 'border border-slate-200 bg-white text-navy hover:bg-slate-50'
      } ${className}`}
      {...props}
    />
  );
}
