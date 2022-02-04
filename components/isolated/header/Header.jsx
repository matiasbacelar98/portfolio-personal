import Link from 'next/link';
import { useState } from 'react';
import PropTypes from 'prop-types';
import { AnimatePresence } from 'framer-motion';
import { StyledCustomLink } from '@/styles/reusable/customLink';
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
            <Link href='#hero' scroll={false}>
              <a href='replace' className='fw-medium active-link-section'>
                Inicio
              </a>
            </Link>
          </li>

          <li>
            <Link href='#sobremi' scroll={false}>
              <a href='replace' className='fw-medium active-link-section'>
                Sobre mi
              </a>
            </Link>
          </li>

          <li>
            <Link href='#proyectos' scroll={false}>
              <a href='replace' className='fw-medium active-link-section'>
                Proyectos
              </a>
            </Link>
          </li>

          <li>
            <Link href='#contacto' scroll={false}>
              <a href='replace' className='fw-medium active-link-section'>
                Contacto
              </a>
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
