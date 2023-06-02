"use client";

import Image from "next/image";
import Link from "next/link";
import { useConnect, useAccount } from "wagmi";
import { MetaMaskConnector } from "wagmi/connectors/metaMask";

function Header(props) {
  const { address, isConnected } = useAccount();
  const { connect } = useConnect({
    connector: new MetaMaskConnector(),
  });

  return (
    <header>
      <div className="leftH">
        <Image
          src="/alpha.svg"
          alt="logo"
          className="logo"
          width={40}
          height={40}
        />
        <Link href="/Swap" className="link">
          <div className="headerItem">Swap</div>
        </Link>
        <Link href="/Tokens" className="link">
          <div className="headerItem">Tokens</div>
        </Link>
      </div>
      <div className="rightH">
        <div className="headerItem">
          <Image
            src="/eth.svg"
            alt="eth"
            className="eth"
            width={20}
            height={20}
            padding-right={10}
          />
          EVM
        </div>
        <div className="connectButton" onClick={connect}>
          {isConnected ? `Connected (${address.slice(0, 8)}...)` : "Connect"}
        </div>
      </div>
    </header>
  );
}

export default Header;
