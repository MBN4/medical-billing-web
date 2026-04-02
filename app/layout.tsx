import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';

const jakarta = Plus_Jakarta_Sans({ 
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400', '500', '600', '700', '800']
});

export const metadata = {
  title: 'Transcure | Advanced Medical Billing',
  description: 'AI-driven Revenue Cycle Management',
};

export default function RootLayout({ 
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={jakarta.className}>
        {children}
      </body>
    </html>
  );
}