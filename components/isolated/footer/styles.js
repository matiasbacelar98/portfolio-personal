import styled from 'styled-components';
import { motion } from 'framer-motion';
import { fluidValues, respondTo } from '@/styles/helpers';

const StyledButton = styled.button`
  border: 0;
  background-color: transparent;
  position: relative;
  display: inline-block;
  font-size: var(--fs-text);
  color: var(--clr-text);

  &:hover {
    cursor: pointer;
  }

  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 1px;
    bottom: 0;
    left: 0;
    background-color: var(--clr-text);
    transform: scaleX(0);
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
  }

  &:hover::after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
`;

const StyledLogoArticle = styled(motion.article)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: ${fluidValues(280, 1220, 72, 128)};
`;

const StyledContentWrapper = styled.div`
  & > * + * {
    margin-top: 1.5rem;
  }

  ${respondTo.lg`
    align-self: center;
  `}
`;

const StyledIconsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, max-content);
  grid-template-rows: repeat(2, max-content);
  gap: 1rem;
`;

export { StyledButton, StyledLogoArticle, StyledContentWrapper, StyledIconsGrid };
