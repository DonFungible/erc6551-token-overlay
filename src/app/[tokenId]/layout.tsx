'use client';

import '../../../styles/globals.css';

import { useEffect, useState } from 'react';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [ready, setReady] = useState(false);
  useEffect(() => {
    setReady(true);
  }, []);

  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen justify-between bg-white z-30">
        {ready ? <div className="flex-grow">{children}</div> : <></>}
      </body>
    </html>
  );
}
