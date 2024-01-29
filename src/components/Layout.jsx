import { useEffect, useState } from 'react';

import Header from "./section/Header"
import Footer from "./section/Footer"

function Layout({ children }) {
  const [walletAddress, setWalletAdresss] = useState(null);
  const [loading, setLoading] = useState(false)

  const checkIfWalletConnected = async () => {
    const { solana } = window;
    try {
      setLoading(true)
      if (solana) {
        if (solana.isPhantom) {
          // console.log("phantom is connected");
          const response = await solana.connect({
            onlyIfTrusted: true, //second time if anyone connected it won't show anypop on screen
          });
          setWalletAdresss(response.publicKey.toString());
          // console.log("public key", response.publicKey.toString());
        }
      }
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false)
    }
  };

  const connectWallet = async () => {
    const { solana } = window;
    try {
      setLoading(true)
      if (solana) {
        const response = await solana.connect(); //to disconnect use "solana.disconnect()"
        setWalletAdresss(response.publicKey.toString());
      } else {
        alert("Please Install Solana's Phantom Wallet");
      }
    } catch (err) {
      console.log(err)
    } finally {
      setLoading(false)
    }
  };

  const disConnectWallet = async () => {

    const { solana } = window;
    try {
      await solana.disconnect();
    } catch (err) {
      console.log(err)
    } finally {
      setWalletAdresss(null);
    }
  }

  useEffect(() => {
    const onLoad = () => {
      checkIfWalletConnected();
    };
    window.addEventListener("load", onLoad);
    return () => window.removeEventListener("load", onLoad);
  }, []);

  return (
    <>
      <Header connection={checkIfWalletConnected} connect={connectWallet} disconnect={disConnectWallet} loading={loading} wallet={walletAddress} />

      {children}

      <Footer />
    </>
  )
}

export default Layout