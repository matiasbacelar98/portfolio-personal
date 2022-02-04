import Link from 'next/link';
import styled from 'styled-components';

const Logo = () => {
  return (
    <StyledImgWrapper>
      <Link href='/'>
        <a href='replace'>
          {/* eslint-disable-next-line */}
          <img src='/logo.svg' alt='logo' />
        </a>
      </Link>
    </StyledImgWrapper>
  );
};

// Styles
const StyledImgWrapper = styled.div`
  position: relative;
  width: 3.5rem;
  height: 3.5rem;
  z-index: 20;

  .img {
    width: inherit;
    height: inherit;
  }
`;

export default Logo;
