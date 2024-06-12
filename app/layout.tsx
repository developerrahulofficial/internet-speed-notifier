import './globals.css';
import React from 'react';
import { Inter } from 'next/font/google';
import { cn } from '@/lib/utils';
import { ThemeProvider } from '@/lib/theme-provider';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Topnav, NavFooter } from '@/components/reusable';
import SpeedComponent from '@/components/SpeedComponent';

const inter = Inter({ subsets: ['latin'] });

const SpeedNotification = () => (
  <div className="border border-dashed border-gray-300 p-4 my-4 text-center rounded-lg">
    🚀 Notifies your service provider whenever your internet goes slow 🐢
  </div>
);

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn('container min-h-screen bg-background max-w-screen-2xl m-auto home font-san antialiased lg:px-40', inter.className)}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Topnav />
          {/* Inserted SpeedNotification component */}
          <main className="flex flex-col items-center justify-between">
            <SpeedComponent />
            <SpeedNotification />
            {/* Wrap children and SpeedInsights in a div with a specific class */}
            <div className="hide-mobile">
              {children}
              <SpeedInsights />
            </div>
          </main>
          <NavFooter />
        </ThemeProvider>
      </body>
    </html>
  );
}
