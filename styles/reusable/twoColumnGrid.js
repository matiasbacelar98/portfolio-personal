import styled from 'styled-components';
import { motion } from 'framer-motion';
import { respondTo } from '@/styles/helpers';

export const StyledTwoColumnGrid = styled(motion.div)`
  ${respondTo.lg`
    display: grid;
    grid-template-columns: repeat(2 , 1fr);
    column-gap: 3rem;
  `}
`;
