import styled from 'styled-components';

const StyledH1 = styled.h1`
  font-family: var(--font-headings);
  font-size: var(--fs-1);
  font-weight: bold;
`;

const StyledH2 = styled.h2`
  font-family: var(--font-headings);
  font-size: ${props => (props.proyect ? 'var(--fs-3)' : 'var(--fs-2)')};
  font-weight: bold;
  color: ${props => (props.proyect ? 'var(--clr-text)' : 'var(--clr-primary)')}; ;
`;

const StyledH3 = styled.h3`
  font-family: var(--font-headings);
  font-size: var(--fs-3);
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

export { StyledH1, StyledH2, StyledH3, StyledInfoHeading, StyledHeadingProyects };
