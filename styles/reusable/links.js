import styled from 'styled-components';
import { fluidValues } from '@/styles/helpers';

const StyledCustomLink = styled.a`
  display: inline-block;
  position: relative;
  width: ${props => (props.big ? '12rem' : '9rem')};
  padding: ${props => (props.big ? '0.6rem 0' : '0.4rem 0')};
  text-align: center;
  color: var(--clr-background);
  background-color: var(--clr-primary);
  border-radius: var(--border-radius);
  transition: transform 0.3s ease;

  &::after,
  &::before {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    z-index: -1;
    width: 100%;
    height: 100%;
    opacity: 0.3;
    background-color: var(--clr-primary);
    border-radius: inherit;
    transition: transform 0.3s ease;
  }

  &:hover {
    transform: translate(-10px, -10px);
  }

  &:hover::after {
    transform: translate(6px, 6px);
  }

  &:hover::before {
    transform: translate(10px, 10px);
  }

  &:active,
  &:active::after,
  &:active::before {
    transform: translate(0);
  }
`;

const StyledAnchorLink = styled.a`
  font-size: ${fluidValues(768, 1200, 18, 20)};
  transition: color 0.3s ease;

  &:hover {
    cursor: pointer;
    color: var(--clr-primary);
  }

  &:focus {
    color: var(--clr-primary);
  }
`;

const StyledMobileLinks = styled.a`
  font-size: 1.625rem; // 26px
  line-height: var(--line-height-headings);
  font-weight: bold;
  color: var(--clr-background);
`;

export { StyledCustomLink, StyledAnchorLink, StyledMobileLinks };
