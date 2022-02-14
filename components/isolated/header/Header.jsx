import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { AnimatePresence, motion, useAnimation } from 'framer-motion';
import { useAnimationContext } from '@/context/animationContext';
import Logo from '@/components-r/logo/Logo';
import { StyledHeader, StyledNav, StyledUl } from './styles';
import HamburguerIcon from './hamburguer-icon/HamburguerIcon';
import MobileMenu from './mobile-menu/MobileMenu';
import NavLinks from './navlinks/NavLinks';

const Header = ({ spacing, route }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isEntranceActive, isTransitionActive } = useAnimationContext();

  const controls = {
    logo: useAnimation(),
    link: useAnimation(),
  };

  // Animate header
  useEffect(() => {
    if (isEntranceActive) return;

    const animateHeader = async () => {
      await controls.logo.start({
        scale: 1,
        opacity: 1,
        transition: {
          type: 'spring',
          stiffness: 140,
          duration: 0.3,
          delay: !isTransitionActive.current ? 1.5 : 1,
          ease: 'easeInOut',
        },
      });

      controls.link.start(i => ({
        y: 0,
        opacity: 1,
        transition: {
          type: 'tween',
          duration: 0.4,
          ease: 'easeOut',
          delay: i * 0.12,
        },
      }));

      // set the transition as the only active animation
      isTransitionActive.current = true;
    };

    animateHeader();
  }, [controls.link, controls.logo, controls.hamburguerIcon, isEntranceActive, isTransitionActive]);

  return (
    <StyledHeader className={`wrapper ${spacing}`}>
      <motion.div
        initial={{
          scale: 0,
          opacity: 0,
        }}
        animate={controls.logo}
      >
        <Logo />
      </motion.div>

      <StyledNav>
        <StyledUl>
          <NavLinks type='desktop' pathname={route} controls={controls.link} />
        </StyledUl>
      </StyledNav>

      <HamburguerIcon isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

      <AnimatePresence exitBeforeEnter>
        {isMenuOpen ? (
          <MobileMenu pathname={route} isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        ) : null}
      </AnimatePresence>
    </StyledHeader>
  );
};

// Proptypes
Header.propTypes = {
  spacing: PropTypes.string.isRequired,
  route: PropTypes.string.isRequired,
};

export default Header;
