import Head from 'next/head';
import PropTypes from 'prop-types';
import { AnimatePresence } from 'framer-motion';
import { activateScroll } from '@/utils/utilities';
import { useDocument } from '@/hooks/index';
import { useAnimationContext } from '@/context/animationContext';
import Header from '@/components-i/header/Header';
import Footer from '@/components-i/footer/Footer';
import Entrance from '@/components-i/entrance/Entrance';

const Layout = ({ children, headData }) => {
  const { isEntranceActive } = useAnimationContext();
  const { htmlNode } = useDocument();

  return (
    <>
      <Head>
        <title>{headData.title}</title>
        <meta name='description' content={headData.description} />
      </Head>

      <Header spacing='header-spacing-top' />
      {children}
      <Footer spacing='footer-spacing-top' />

      {/* Entrance Animation */}
      <AnimatePresence onExitComplete={() => activateScroll(htmlNode)}>
        {isEntranceActive ? <Entrance /> : null}
      </AnimatePresence>
    </>
  );
};

// Proptypes
Layout.propTypes = {
  children: PropTypes.element.isRequired,
  headData: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
};

export default Layout;
