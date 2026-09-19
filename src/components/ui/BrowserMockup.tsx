interface BrowserMockupProps {
  children: React.ReactNode;
  url?: string;
  className?: string;
  variant?: 'light' | 'dark';
}

export function BrowserMockup({
  children,
  url = 'wexelo.com',
  className = '',
  variant = 'light',
}: BrowserMockupProps) {
  const bgColor = variant === 'dark' ? 'bg-gray-900' : 'bg-white';
  const barColor = variant === 'dark' ? 'bg-gray-800' : 'bg-gray-100';
  const textColor = variant === 'dark' ? 'text-gray-500' : 'text-gray-400';

  return (
    <div className={`rounded-xl overflow-hidden shadow-2xl border border-border/50 ${bgColor} ${className}`}>
      {/* Browser bar */}
      <div className={`${barColor} px-4 py-2.5 flex items-center gap-3`}>
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-400" />
          <div className="w-3 h-3 rounded-full bg-yellow-400" />
          <div className="w-3 h-3 rounded-full bg-green-400" />
        </div>
        <div className={`flex-1 ${variant === 'dark' ? 'bg-gray-700' : 'bg-white'} rounded-md px-3 py-1 text-xs ${textColor} text-center`}>
          {url}
        </div>
      </div>
      {/* Content */}
      <div className="overflow-hidden">
        {children}
      </div>
    </div>
  );
}
