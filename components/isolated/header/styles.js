import styled from 'styled-components';
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

const StyledUl = styled.ul`
  display: flex;
  align-items: center;

  & > * + * {
    margin-left: 2.5rem;
  }
`;

const StyledImgWrapper = styled.div`
  position: relative;
  width: 3.5rem;
  height: 3.5rem;

  .img {
    width: inherit;
    height: inherit;
  }
`;

export { StyledHeader, StyledNav, StyledUl, StyledImgWrapper };
