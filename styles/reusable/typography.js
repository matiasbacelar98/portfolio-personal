import styled from 'styled-components';
import { motion } from 'framer-motion';
import { fluidValues } from '../helpers';

const StyledH1 = styled(motion.h1)`
  font-family: var(--font-headings);
  font-size: var(--fs-1);
  font-weight: bold;
`;

const StyledH2 = styled(motion.h2)`
  font-family: var(--font-headings);
  font-size: ${props => (props.proyect === 'true' ? 'var(--fs-3)' : 'var(--fs-2)')};
  font-weight: bold;
  color: ${props => (props.proyect === 'true' ? 'var(--clr-text)' : 'var(--clr-primary)')}; ;
`;

const StyledH3 = styled.h3`
  font-family: var(--font-headings);
  font-size: var(--fs-4);
  font-weight: bold;
`;

const StyledHeadingProyects = styled.span`
  font-family: var(--font-headings);
  display: block;
  font-size: var(--fs-1);
  font-weight: 600;
`;

const StyledInfoHeading = styled.span`
  font-family: var(--font-headings);
  display: inline-block;
  font-size: var(--fs-4);
  font-weight: bold;
`;

const EntranceHeading = styled(motion.span)`
  display: block;
  font-size: ${fluidValues(280, 1200, 32, 56)};
  font-weight: bold;
  line-height: var(--line-height-headings);
  color: var(--clr-background);
`;

const StyledHighlight = styled(motion.span)`
  display: block;
  color: var(--clr-background);
  letter-spacing: 0.2rem;
`;

export {
  StyledH1,
  StyledH2,
  StyledH3,
  StyledInfoHeading,
  StyledHeadingProyects,
  EntranceHeading,
  StyledHighlight,
};
