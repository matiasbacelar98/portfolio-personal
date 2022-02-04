import styled from 'styled-components';
import { motion } from 'framer-motion';

const StyledContainer = styled(motion.div)`
  position: fixed;
  z-index: 10;
  top: 0;
  right: 0;
  width: 70%;
  height: 100%;
  display: grid;
  grid-template-rows: 80% min-content;
  place-content: center;
  background-color: var(--clr-primary);
  color: var(--clr-background);
`;

const StyledBgBlur = styled(motion.div)`
  background: hsla(0, 0%, 100%, 0.6);
  backdrop-filter: blur(3px);
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9;
`;

const StyledNav = styled.nav`
  display: grid;
  place-content: center;
  row-gap: 3rem; // 48px

  @media (max-width: 31.25em /* 500px */) {
    padding-top: 4rem;
  }
`;

const StyledUl = styled.ul`
  text-align: center;

  & > * + * {
    margin-top: 2rem; // 32px
  }

  .border {
    border: 1px solid var(--clr-background);
    border-radius: var(--border-radius);
  }

  .download-link {
    display: block;
    width: 100%;
    font-size: 1rem;
    text-transform: uppercase;
    color: var(--clr-background);
    padding: 0.4rem 0;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: hsla(0, 0%, 100%, 0.2);
    }
  }
`;

export { StyledContainer, StyledNav, StyledUl, StyledBgBlur };
