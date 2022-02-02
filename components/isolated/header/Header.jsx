import Link from 'next/link';
import { useState } from 'react';
import PropTypes from 'prop-types';
import { StyledCustomLink } from '@/styles/reusable/customLink';
import { StyledHeader, StyledNav, StyledUl, StyledImgWrapper } from './styles';
import HamburguerIcon from './hamburguer-icon/HamburguerIcon';

const Header = ({ spacing }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <StyledHeader className={`wrapper ${spacing}`}>
      <StyledImgWrapper>
        <Link href='/' passHref>
          <a href='replace'>
            {/* eslint-disable-next-line */}
            <img src='/logo.svg' alt='logo' />
          </a>
        </Link>
      </StyledImgWrapper>

      <StyledNav>
        <StyledUl>
          <li>
            <Link href='/#inicio' scroll={false}>
              <a href='replace' className='fw-medium active-link-section'>
                Inicio
              </a>
            </Link>
          </li>

          <li>
            <Link href='/#sobremi' scroll={false}>
              <a href='replace' className='fw-medium active-link-section'>
                Sobre mi
              </a>
            </Link>
          </li>

          <li>
            <Link href='/#proyectos' scroll={false}>
              <a href='replace' className='fw-medium active-link-section'>
                Proyectos
              </a>
            </Link>
          </li>

          <li>
            <Link href='/#contacto' scroll={false}>
              <a href='replace' className='fw-medium active-link-section'>
                Contacto
              </a>
            </Link>
          </li>

          <li>
            <StyledCustomLink className='fw-medium' href='/CV-Matias-Bacelar.pdf' download>
              CV
            </StyledCustomLink>
          </li>
        </StyledUl>
      </StyledNav>

      <HamburguerIcon isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
    </StyledHeader>
  );
};

// Proptypes
Header.propTypes = {
  spacing: PropTypes.string.isRequired,
};

export default Header;
