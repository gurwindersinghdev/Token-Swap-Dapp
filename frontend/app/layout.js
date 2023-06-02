"use client";

import "./index.css";
import Header from "./components/Header";
import "./app.css";
import { WagmiConfig, createConfig, configureChains, mainnet } from "wagmi";
import { publicProvider } from "wagmi/providers/public";

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [mainnet],
  [publicProvider()]
);

const config = createConfig({
  autoConnect: true,
  publicClient,
  webSocketPublicClient,
});

export default function DashboardLayout({ children }) {
  return (
    <WagmiConfig config={config}>
      <html>
        <body>
          <Header />
          {children}
        </body>
      </html>
    </WagmiConfig>
  );
}
