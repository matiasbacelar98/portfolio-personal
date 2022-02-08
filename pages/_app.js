/* eslint-disable */
import { useEffect } from 'react';
import useScrollbarSize from 'react-scrollbar-size';
import { AnimatePresence } from 'framer-motion';
import AnimationProvider from '@/context/animationContext';
import GlobalStyles from '@/styles/globalStyles';

function MyApp({ Component, pageProps, router }) {
  const { width } = useScrollbarSize();

  // set css variable with browser scrollbar width & calculate space
  useEffect(() => {
    document.documentElement.style.setProperty(
      '--scrollbar-width',
      `calc(${width}px - (100vw - 100%))`
    );
  }, [width]);

  return (
    <AnimationProvider>
      <>
        <GlobalStyles />

        <AnimatePresence exitBeforeEnter>
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </>
    </AnimationProvider>
  );
}

export default MyApp;
