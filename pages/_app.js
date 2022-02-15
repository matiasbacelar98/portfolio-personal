/* eslint-disable */
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { AnimatePresence } from 'framer-motion';
import AnimationProvider from '@/context/animationContext';
import GlobalStyles from '@/styles/globalStyles';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  // Scroll to top after route change
  useEffect(() => {
    const scrollToTop = () => {
      setTimeout(() => {
        window.scroll({
          top: 0,
          left: 0,
        });
      }, 500);
    };

    router.events.on('routeChangeComplete', scrollToTop);

    // If the component is unmounted, unsubscribe
    return () => {
      router.events.off('routeChangeComplete', scrollToTop);
    };
  }, []);

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
