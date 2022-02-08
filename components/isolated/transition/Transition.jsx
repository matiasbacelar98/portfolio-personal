import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { useToggleScroll } from '@/hooks/index';

const Transition = ({ isEntranceActive }) => {
  const [setScrollbarAction] = useToggleScroll();

  return (
    <>
      <StyledWrapper
        initial={!isEntranceActive}
        animate={{
          y: '100vh',
          transition: {
            type: 'spring',
            ease: 'easeInOut',
            bounce: 0,
            duration: 0.8,
            delay: 0.2,
          },
        }}
        onAnimationComplete={() => setScrollbarAction('add')}
      />

      <StyledWrapper
        initial={{
          y: '100vh',
        }}
        exit={{
          y: 0,
          transition: {
            type: 'spring',
            ease: 'easeInOut',
            bounce: 0,
            duration: 0.6,
          },
        }}
        onAnimationStart={() => setScrollbarAction('remove')}
      />
    </>
  );
};

// Styles
const StyledWrapper = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 500;
  width: 100%;
  height: 100vh;
  background-color: var(--clr-primary);
`;

// Proptypes
Transition.propTypes = {
  isEntranceActive: PropTypes.bool.isRequired,
};

export default Transition;
