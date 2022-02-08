import { useRef } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { useClickOutside, useToggleScroll } from '@/hooks/index';
import { StyledMobileLinks } from '@/typography';
import { StyledContainer, StyledNav, StyledUl, StyledBgBlur } from './styles';

const MobileMenu = ({ isMenuOpen, setIsMenuOpen }) => {
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
            <li>
              <Link href='/#hero' scroll={false} passHref>
                <StyledMobileLinks href='replace' onClick={closeMenu}>
                  Inicio
                </StyledMobileLinks>
              </Link>
            </li>

            <li>
              <Link href='/#sobremi' scroll={false} passHref>
                <StyledMobileLinks href='replace' onClick={closeMenu}>
                  Sobre mi
                </StyledMobileLinks>
              </Link>
            </li>

            <li>
              <Link href='/#proyectos' scroll={false} passHref>
                <StyledMobileLinks href='replace' onClick={closeMenu}>
                  Proyectos
                </StyledMobileLinks>
              </Link>
            </li>

            <li>
              <Link href='/#contacto' scroll={false} passHref>
                <StyledMobileLinks href='replace' onClick={closeMenu}>
                  Contacto
                </StyledMobileLinks>
              </Link>
            </li>

            {/* Download CV */}
            <li className='border'>
              <a
                className='download-link'
                target='_blank'
                rel='noopener noreferrer'
                href='/CV-Matias-Bacelar.pdf'
                download
              >
                cv
              </a>
            </li>
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
};

export default MobileMenu;
