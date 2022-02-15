import { useRef } from 'react';
import PropTypes from 'prop-types';
import { useClickOutside, useToggleScroll } from '@/hooks/index';
import { StyledContainer, StyledNav, StyledUl, StyledBgBlur } from './styles';
import NavLinks from '../navlinks/NavLinks';

const MobileMenu = ({ isMenuOpen, setIsMenuOpen, pathname }) => {
  const [setScrollbarAction] = useToggleScroll();
  const menuRef = useRef(null);

  const closeMenu = () => {
    setTimeout(() => {
      setIsMenuOpen(false);
      isMenuOpen ? setScrollbarAction('add') : setScrollbarAction('remove');
    }, 800);
  };

  // close mobile menu when user click outside
  useClickOutside(menuRef, () => {
    setIsMenuOpen(false);
    setScrollbarAction('add');
  });

  return (
    <>
      <StyledContainer
        initial={{
          x: '100%',
        }}
        animate={{
          x: 0,
        }}
        transition={{
          duration: 0.3,
          type: 'tween',
          ease: 'easeOut',
        }}
        exit={{
          x: '100%',
        }}
        key='mobile-menu'
        ref={menuRef}
      >
        <StyledNav>
          <StyledUl>
            <NavLinks
              type='mobile'
              pathname={pathname}
              setIsMenuOpen={setIsMenuOpen}
              closeMenu={closeMenu}
            />
          </StyledUl>
        </StyledNav>
      </StyledContainer>

      <StyledBgBlur
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
        exit={{ opacity: 0 }}
      />
    </>
  );
};

// Proptypes
MobileMenu.propTypes = {
  isMenuOpen: PropTypes.bool.isRequired,
  setIsMenuOpen: PropTypes.func.isRequired,
  pathname: PropTypes.string.isRequired,
};

export default MobileMenu;
