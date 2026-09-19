interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  centered?: boolean;
  light?: boolean;
  className?: string;
  as?: 'h1' | 'h2';
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  centered = true,
  light = false,
  className = '',
  as: Component = 'h2',
}: SectionHeadingProps) {
  return (
    <div className={`${centered ? 'text-center' : ''} max-w-3xl ${centered ? 'mx-auto' : ''} mb-12 lg:mb-16 ${className}`}>
      {eyebrow && (
        <p className={`text-sm font-semibold tracking-widest uppercase mb-4 ${
          light ? 'text-cyan' : 'text-electric'
        }`}>
          {eyebrow}
        </p>
      )}
      <Component className={`font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4 ${
        light ? 'text-white' : 'text-primary-text'
      }`}>
        {title}
      </Component>
      {description && (
        <p className={`text-lg ${
          light ? 'text-dark-secondary' : 'text-secondary-text'
        }`}>
          {description}
        </p>
      )}
    </div>
  );
}