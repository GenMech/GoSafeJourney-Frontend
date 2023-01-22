import { ChakraProvider } from '@chakra-ui/react';
import '../styles/globals.css';
import { Inter } from '@next/font/google';
import theme from '../styles/theme';

const inter = Inter({ subsets: ['latin'] });

function MyApp({ Component, pageProps }) {
  return (
    <main id='go-app' className={inter.className}>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </main>
  );
}

export default MyApp;
