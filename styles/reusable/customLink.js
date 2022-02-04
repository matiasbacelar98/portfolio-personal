import styled from 'styled-components';

export const StyledCustomLink = styled.a`
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
