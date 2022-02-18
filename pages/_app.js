/* eslint-disable */
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { AnimatePresence } from 'framer-motion';
import AnimationProvider from '@/context/animationContext';
import GlobalStyles from '@/styles/globalStyles';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  // This function prevents the asPath prop from reloading the path
  // when an anchor link is clicked
  const renderKeyWithoutUnnecessaryReloads = () => {
    const isProyectRoute = '/proyectos';
    const isErrorRoute = '/404';

    // Error
    if (router.pathname === isErrorRoute) {
      return router.asPath;
    }

    // Proyect or Home
    if (router.asPath.includes(isProyectRoute)) {
      return `/proyectos/${router.query.id}`;
    } else {
      return `/`;
    }
  };

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
          <Component {...pageProps} key={renderKeyWithoutUnnecessaryReloads()} />
        </AnimatePresence>
      </>
    </AnimationProvider>
  );
}

export default MyApp;
