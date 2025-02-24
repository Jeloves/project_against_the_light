import { GameProvider } from '@/context/GameProvider';
import '../styles/globals.css';  // Import the global styles here
import { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return <GameProvider><Component {...pageProps} /></GameProvider>;
}

export default MyApp;