import styled from 'styled-components';
import { motion } from 'framer-motion';
import { respondTo } from '@/styles/helpers';

const StyledBtn = styled(motion.button)`
  display: grid;
  place-items: center;
  padding: 0;
  border: 0;
  background-color: transparent;
  z-index: 20;

  &:hover {
    cursor: pointer;
  }

  ${respondTo.md`
      display: none;
  `}
`;

export { StyledBtn };
