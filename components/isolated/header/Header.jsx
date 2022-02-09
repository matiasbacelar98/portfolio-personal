import Link from 'next/link';
import { useState } from 'react';
import PropTypes from 'prop-types';
import { AnimatePresence } from 'framer-motion';
import { StyledCustomLink, StyledAnchorLink } from '@/styles/reusable/links';
import Logo from '@/components-r/logo/Logo';
import HamburguerIcon from './hamburguer-icon/HamburguerIcon';
import MobileMenu from './mobile-menu/MobileMenu';
import { StyledHeader, StyledNav, StyledUl } from './styles';

const Header = ({ spacing }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <StyledHeader className={`wrapper ${spacing}`}>
      <Logo />

      <StyledNav>
        <StyledUl>
          <li>
            <Link href='/#hero' passHref>
              <StyledAnchorLink className='fw-medium'>Inicio</StyledAnchorLink>
            </Link>
          </li>

          <li>
            <Link href='/#sobremi' passHref>
              <StyledAnchorLink className='fw-medium'>Sobre mi</StyledAnchorLink>
            </Link>
          </li>

          <li>
            <Link href='/#proyectos' passHref>
              <StyledAnchorLink className='fw-medium'>Proyectos</StyledAnchorLink>
            </Link>
          </li>

          <li>
            <Link href='#contacto' passHref>
              <StyledAnchorLink className='fw-medium'>Contacto</StyledAnchorLink>
            </Link>
          </li>

          {/* Download CV */}
          <li>
            <StyledCustomLink
              className='fw-medium'
              href='/CV-Matias-Bacelar.pdf'
              rel='noopener noreferrer'
              download
            >
              CV
            </StyledCustomLink>
          </li>
        </StyledUl>
      </StyledNav>

      <HamburguerIcon isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

      <AnimatePresence>
        {isMenuOpen ? <MobileMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} /> : null}
      </AnimatePresence>
    </StyledHeader>
  );
};

// Proptypes
Header.propTypes = {
  spacing: PropTypes.string.isRequired,
};

export default Header;
