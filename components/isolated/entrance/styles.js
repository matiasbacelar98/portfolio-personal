import styled from 'styled-components';
import { motion } from 'framer-motion';
import { fluidValues } from '@/styles/helpers';

const StyledBg = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: var(--clr-primary);
  z-index: 1000;
`;

const StyledWrapper = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 37.5rem; // 600px
  width: 100%;

  & > * + * {
    margin-left: ${fluidValues(280, 768, 8, 24)};
  }
`;

const StyledSvg = styled(motion.svg)`
  width: ${fluidValues(280, 1200, 120, 150)};
  height: ${fluidValues(280, 1200, 80, 150)};
  overflow: visible;
`;

export { StyledWrapper, StyledBg, StyledSvg };
