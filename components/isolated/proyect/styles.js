import styled from 'styled-components';
import { motion } from 'framer-motion';
import { fluidValues, respondTo } from '@/styles/helpers';

const StyledWrapper = styled.a`
  position: relative;
  display: block;
  background-color: transparent;
  padding-bottom: ${fluidValues(280, 756, 64, 72)};

  & > * + * {
    margin-top: ${fluidValues(280, 756, 64, 72)};
  }
`;

const StyledNameWrapper = styled.div`
  display: grid;
  place-content: center;

  // Responsive
  ${respondTo.md`
      display: block;
  `}
`;

const ImageWrapper = styled(motion.div)`
  display: none;

  ${respondTo.xxxl`
    display: block;
    position: absolute;
    z-index: 5;
    top: -10%;
    right: 0;
    margin-top: 0;
    width: 43.75rem; // 700px  
    height: 28.125rem; // 450px
    box-shadow: var(--box-shadow);
  `}

  .img-container {
    position: relative;
    width: 100%;
    height: 100%;
  }
`;

const StyledSpan = styled.span`
  display: inline-block;
  text-align: left;
  margin-bottom: 8px;
`;

const StyledLine = styled.div`
  height: 1px;
  background-color: hsla(219, 17%, 16%, 0.8);
`;

export { StyledWrapper, StyledNameWrapper, StyledSpan, StyledLine, ImageWrapper };
