import '../styles/globals.css';  // Import the global styles here
import { AppProps } from 'next/app';
import { ResourceInventoryProvider } from '@/context/ResourceInventoryProvider';
import { MapProvider } from '@/context/MapProvider';

function MyApp({ Component, pageProps }: AppProps) {
  return <MapProvider><ResourceInventoryProvider><Component {...pageProps} /></ResourceInventoryProvider></MapProvider>;
}

export default MyApp;