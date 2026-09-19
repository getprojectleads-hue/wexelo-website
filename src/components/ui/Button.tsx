import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: 'primary' | 'secondary' | 'ghost' | 'white';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  showArrow?: boolean;
  onClick?: () => void;
  type?: 'button' | 'submit';
  disabled?: boolean;
  external?: boolean;
}

const variantStyles = {
  primary: 'btn-gradient text-white shadow-lg hover:shadow-xl',
  secondary: 'border-2 border-electric text-electric hover:bg-electric hover:text-white',
  ghost: 'text-primary-text hover:bg-light-bg',
  white: 'bg-white text-navy hover:bg-white/90 shadow-lg',
};

const sizeStyles = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-2.5 text-sm',
  lg: 'px-8 py-3.5 text-base',
};

export function Button({
  children,
  href,
  variant = 'primary',
  size = 'md',
  className = '',
  showArrow = true,
  onClick,
  type = 'button',
  disabled = false,
  external = false,
}: ButtonProps) {
  const baseStyles = `inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-300 group ${variantStyles[variant]} ${sizeStyles[size]} ${className} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`;

  const content = (
    <>
      {children}
      {showArrow && (
        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
      )}
    </>
  );

  if (href) {
    if (external) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={baseStyles}>
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className={baseStyles}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={baseStyles}
    >
      {content}
    </button>
  );
}
