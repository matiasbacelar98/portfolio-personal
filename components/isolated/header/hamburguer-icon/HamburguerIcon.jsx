import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { activateScroll, removeScroll } from '@/utils/utilities';
import { useDocument } from '@/hooks/index';
import { StyledBtn } from './styles';

const HamburguerIcon = ({ isMenuOpen, setIsMenuOpen }) => {
  const { htmlNode } = useDocument();

  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
    isMenuOpen ? activateScroll(htmlNode) : removeScroll(htmlNode);
  };

  return (
    <StyledBtn
      type='button'
      aria-label={isMenuOpen ? 'Cerrar menu' : 'Abrir menu'}
      onClick={toggleMenu}
    >
      <svg
        width='40'
        height='40'
        viewBox='0 0 40 15'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <motion.path
          animate={{
            rotateZ: isMenuOpen ? 45 : 0,
            translateY: isMenuOpen ? '5px' : 0,
            fill: isMenuOpen ? 'var(--clr-background)' : 'var(--clr-text)',
          }}
          transition={{ type: 'tween', duration: 0.3, ease: 'easeOut' }}
          d='M0 1.78571C0 1.31211 0.263393 0.85791 0.732234 0.523024C1.20107 0.188138 1.83696 0 2.5 0H37.5C38.163 0 38.7989 0.188138 39.2678 0.523024C39.7366 0.85791 40 1.31211 40 1.78571C40 2.25932 39.7366 2.71352 39.2678 3.0484C38.7989 3.38329 38.163 3.57143 37.5 3.57143H2.5C1.83696 3.57143 1.20107 3.38329 0.732234 3.0484C0.263393 2.71352 0 2.25932 0 1.78571Z'
        />
        <motion.path
          animate={{
            rotateZ: isMenuOpen ? -45 : 0,
            translateY: isMenuOpen ? '-5px' : 0,
            fill: isMenuOpen ? 'var(--clr-background)' : 'var(--clr-text)',
          }}
          transition={{ type: 'tween', duration: 0.3, ease: 'easeOut' }}
          d='M4 10.7144C2.93913 10.7144 1.92172 10.9025 1.17157 11.2374C0.421428 11.5723 0 12.0265 0 12.5001C0 12.9737 0.421428 13.4279 1.17157 13.7628C1.92172 14.0976 2.93913 14.2858 4 14.2858H36C37.0609 14.2858 38.0783 14.0976 38.8284 13.7628C39.5786 13.4279 40 12.9737 40 12.5001C40 12.0265 39.5786 11.5723 38.8284 11.2374C38.0783 10.9025 37.0609 10.7144 36 10.7144H4Z'
        />
      </svg>
    </StyledBtn>
  );
};

// Proptypes
HamburguerIcon.propTypes = {
  isMenuOpen: PropTypes.bool.isRequired,
  setIsMenuOpen: PropTypes.func.isRequired,
};

export default HamburguerIcon;
