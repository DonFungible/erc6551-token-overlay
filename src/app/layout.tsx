'use client';

import '../../styles/globals.css';
import Footer from './Footer';
import Navbar from './Navbar';

import '@rainbow-me/rainbowkit/styles.css';

import { getDefaultWallets, RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import { mainnet, goerli, sepolia, polygon, polygonMumbai } from 'wagmi/chains';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';
import { useEffect, useState } from 'react';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Wagmi configuration
  const { chains, publicClient } = configureChains(
    [mainnet, goerli, sepolia, polygon, polygonMumbai],
    [
      alchemyProvider({
        apiKey: (process.env.NEXT_PUBLIC_ALCHEMY_API_KEY as string) ?? '',
      }),
      publicProvider(),
    ]
  );

  const { connectors } = getDefaultWallets({
    appName: 'My App',
    chains,
  });

  const wagmiConfig = createConfig({
    autoConnect: true,
    connectors,
    publicClient,
  });

  const [_chains, setChains] = useState(chains);
  const [ready, setReady] = useState(false);
  useEffect(() => {
    setReady(true);
  }, []);

  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen justify-between">
        {ready ? (
          <WagmiConfig config={wagmiConfig}>
            <RainbowKitProvider chains={_chains}>
              <Navbar />
              <div className="flex-grow">{children}</div>
            </RainbowKitProvider>
            <Footer />
          </WagmiConfig>
        ) : (
          <></>
        )}
      </body>
    </html>
  );
}
