import Head from 'next/head';
import PropTypes from 'prop-types';
import { AnimatePresence } from 'framer-motion';
import { useToggleScroll } from '@/hooks/index';
import { useAnimationContext } from '@/context/animationContext';
import Header from '@/components-i/header/Header';
import Footer from '@/components-i/footer/Footer';
import Entrance from '@/components-i/entrance/Entrance';
import Transition from '@/components-i/transition/Transition';

const Layout = ({ children, headData }) => {
  const { isEntranceActive } = useAnimationContext();
  const [setScrollbarAction] = useToggleScroll();

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
      <AnimatePresence onExitComplete={() => setScrollbarAction('add')}>
        {isEntranceActive ? <Entrance /> : null}
      </AnimatePresence>

      {/* Transition Animation */}
      <Transition isEntranceActive={isEntranceActive} />
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
