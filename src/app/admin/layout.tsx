import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Admin — WEXELO',
  robots: { index: false, follow: false },
};

export const dynamic = 'force-dynamic';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-light-bg">
      {children}
    </div>
  );
}