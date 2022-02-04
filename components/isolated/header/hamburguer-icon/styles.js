import styled from 'styled-components';
import { respondTo } from '@/styles/helpers';

const StyledBtn = styled.button`
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
