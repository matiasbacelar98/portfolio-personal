/* eslint-disable */
import AnimationProvider from '@/context/animationContext';
import { useEffect } from 'react';
import GlobalStyles from '@/styles/globalStyles';
import useScrollbarSize from 'react-scrollbar-size';

function MyApp({ Component, pageProps }) {
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
        <Component {...pageProps} />
      </>
    </AnimationProvider>
  );
}

export default MyApp;
