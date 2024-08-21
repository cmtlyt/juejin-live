import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import '../globals.css';
import { Navbar } from '@/components/Navbar';
import StyledComponentsRegistry from '@/lib/register';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: '稀土掘金 - live',
  description: 'next 复现掘金',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StyledComponentsRegistry>
          <Navbar />
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
