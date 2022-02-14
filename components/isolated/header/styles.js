import styled from 'styled-components';
import { motion } from 'framer-motion';
import { respondTo } from '@/styles/helpers';

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledNav = styled.nav`
  display: none;

  ${respondTo.md`
    display: block;
  `}
`;

const StyledUl = styled(motion.ul)`
  display: flex;
  align-items: center;

  & > * + * {
    margin-left: 2.5rem;
  }
`;

export { StyledHeader, StyledNav, StyledUl };
