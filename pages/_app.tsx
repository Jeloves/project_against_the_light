import { GameProvider } from '@/context/GameProvider';
import '../styles/globals.css';  // Import the global styles here
import { AppProps } from 'next/app';
import { ResourceInventoryProvider } from '@/context/ResourceInventoryProvider';

function MyApp({ Component, pageProps }: AppProps) {
  return <GameProvider><ResourceInventoryProvider><Component {...pageProps} /></ResourceInventoryProvider></GameProvider>;
}

export default MyApp;