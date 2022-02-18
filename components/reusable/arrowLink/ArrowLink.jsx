import Link from 'next/link';
import { useAnimation, motion } from 'framer-motion';
import styled from 'styled-components';
import { MdKeyboardArrowRight } from 'react-icons/md';
import PropTypes from 'prop-types';

const ArrowLink = ({ to, text }) => {
  const arrowControls = useAnimation();

  const animateArrow = async x => {
    arrowControls.start({
      x,
      transition: {
        type: 'spring',
        duration: 0.4,
        ease: 'easeOut',
      },
    });
  };

  return (
    <Link href={to} passHref scroll={false}>
      <StyledLink onHoverStart={() => animateArrow(8)} onHoverEnd={() => animateArrow(0)}>
        <span className='clr-primary fw-bold'>{text}</span>
        <StyledIconWrapper animate={arrowControls}>
          <StyledIcon />
        </StyledIconWrapper>
      </StyledLink>
    </Link>
  );
};

// Styles
const StyledLink = styled(motion.a)`
  display: flex;
  align-items: center;
  width: max-content;
`;

const StyledIconWrapper = styled(motion.div)`
  display: flex;
  justif-content: center;
  align-items: center;
  margin-top: 3px; // optical illusion fix
`;

const StyledIcon = styled(MdKeyboardArrowRight)`
  color: var(--clr-primary);
`;

// Proptypes
ArrowLink.propTypes = {
  to: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default ArrowLink;
