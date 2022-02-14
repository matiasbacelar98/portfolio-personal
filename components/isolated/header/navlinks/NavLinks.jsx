import Link from 'next/link';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { StyledCustomLink, StyledAnchorLink, StyledMobileLinks } from '@/styles/reusable/links';

/* eslint-disable react/jsx-no-useless-fragment */

const NavLinks = ({ type, pathname, controls, setIsMenuOpen, closeMenu }) => {
  const router = useRouter();
  const { id } = router.query;

  if (type === 'mobile') {
    return (
      <>
        {pathname === '/' ? (
          <>
            <li>
              <Link href='/#hero' passHref>
                <StyledMobileLinks onClick={closeMenu}>Inicio</StyledMobileLinks>
              </Link>
            </li>

            <li>
              <Link href='/#sobremi' passHref>
                <StyledMobileLinks onClick={closeMenu}>Sobre mi</StyledMobileLinks>
              </Link>
            </li>

            <li>
              <Link href='/#proyectos' passHref>
                <StyledMobileLinks onClick={closeMenu}>Proyectos</StyledMobileLinks>
              </Link>
            </li>

            <li>
              <Link href='/#contacto' passHref>
                <StyledMobileLinks onClick={closeMenu}>Contacto</StyledMobileLinks>
              </Link>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link href='/' passHref>
                <StyledMobileLinks onClick={() => setIsMenuOpen(false)}>
                  Volver a Inicio
                </StyledMobileLinks>
              </Link>
            </li>

            <li>
              <Link href={`/proyectos/${id}#otros-proyectos`} passHref>
                <StyledMobileLinks onClick={closeMenu}>Otros Proyectos</StyledMobileLinks>
              </Link>
            </li>

            <li>
              <Link href={`/proyectos/${id}#contacto`} passHref>
                <StyledMobileLinks onClick={closeMenu}>Contacto</StyledMobileLinks>
              </Link>
            </li>
          </>
        )}

        {/* Download CV */}
        <li className='border'>
          <a
            className='download-link'
            target='_blank'
            rel='noopener noreferrer'
            href='/CV-Matias-Bacelar.pdf'
            download
          >
            CV
          </a>
        </li>
      </>
    );
  }

  return (
    <>
      {pathname === '/' ? (
        <>
          <motion.li initial={{ opacity: 0, y: -30 }} animate={controls} custom={0}>
            <Link href='/#hero' passHref>
              <StyledAnchorLink className='fw-medium'>Inicio</StyledAnchorLink>
            </Link>
          </motion.li>

          <motion.li initial={{ opacity: 0, y: -30 }} animate={controls} custom={1}>
            <Link href='/#sobremi' passHref>
              <StyledAnchorLink className='fw-medium'>Sobre mi</StyledAnchorLink>
            </Link>
          </motion.li>

          <motion.li initial={{ opacity: 0, y: -30 }} animate={controls} custom={2}>
            <Link href='/#proyectos' passHref>
              <StyledAnchorLink className='fw-medium'>Proyectos</StyledAnchorLink>
            </Link>
          </motion.li>

          <motion.li initial={{ opacity: 0, y: -30 }} animate={controls} custom={3}>
            <Link href='/#contacto' passHref>
              <StyledAnchorLink className='fw-medium'>Contacto</StyledAnchorLink>
            </Link>
          </motion.li>

          <motion.li initial={{ opacity: 0, y: -30 }} animate={controls} custom={4}>
            <StyledCustomLink
              className='fw-medium'
              href='/CV-Matias-Bacelar.pdf'
              rel='noopener noreferrer'
              download
            >
              CV
            </StyledCustomLink>
          </motion.li>
        </>
      ) : (
        <>
          <motion.li initial={{ opacity: 0, y: -30 }} animate={controls} custom={0}>
            <Link href='/' passHref>
              <StyledAnchorLink className='fw-medium'>Volver a inicio</StyledAnchorLink>
            </Link>
          </motion.li>

          <motion.li initial={{ opacity: 0, y: -30 }} animate={controls} custom={1}>
            <Link href={`/proyectos/${id}#contacto`} passHref>
              <StyledAnchorLink className='fw-medium'>Contacto</StyledAnchorLink>
            </Link>
          </motion.li>

          <motion.li initial={{ opacity: 0, y: -30 }} animate={controls} custom={2}>
            <StyledCustomLink
              className='fw-medium'
              href='/CV-Matias-Bacelar.pdf'
              rel='noopener noreferrer'
              download
            >
              CV
            </StyledCustomLink>
          </motion.li>
        </>
      )}
    </>
  );
};

// Proptypes
NavLinks.propTypes = {
  type: PropTypes.string.isRequired,
  pathname: PropTypes.string.isRequired,
  setIsMenuOpen: PropTypes.func,
  closeMenu: PropTypes.func,
  controls: PropTypes.shape({}),
};

NavLinks.defaultProps = {
  controls: null,
  setIsMenuOpen: null,
  closeMenu: null,
};

export default NavLinks;
