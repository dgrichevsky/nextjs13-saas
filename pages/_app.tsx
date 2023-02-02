import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Home from '../app/page';
function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Home />
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
