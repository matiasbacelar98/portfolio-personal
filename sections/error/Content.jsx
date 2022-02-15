import Link from 'next/link';
import { useAnimation, motion } from 'framer-motion';
import styled from 'styled-components';
import { MdKeyboardArrowRight } from 'react-icons/md';

const Content = () => {
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
    <section className='center'>
      <div className='flow-spacing-text center'>
        <h1>
          {/* eslint-disable-next-line */}
          <img src='/404.svg' alt='error' />
        </h1>

        <StyledParragraph>La página que estas buscando no existe</StyledParragraph>

        <Link href='/' passHref>
          <StyledLink onHoverStart={() => animateArrow(8)} onHoverEnd={() => animateArrow(0)}>
            <span className='clr-primary fw-bold'>Volver a inicio</span>
            <StyledIconWrapper animate={arrowControls}>
              <StyledIcon />
            </StyledIconWrapper>
          </StyledLink>
        </Link>
      </div>
    </section>
  );
};

// Styled
const StyledParragraph = styled.p`
  text-align: center;
`;

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

export default Content;
