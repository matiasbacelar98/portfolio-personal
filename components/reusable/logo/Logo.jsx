import Link from 'next/link';
import styled from 'styled-components';

/* eslint-disable  @next/next/no-img-element */

const Logo = () => {
  return (
    <StyledImgWrapper>
      <Link href='/' passHref>
        <StyledLink className='inherit-dimensions'>
          <img className='inherit-dimensions' src='/logo.svg' alt='logo' />
        </StyledLink>
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
`;

const StyledLink = styled.a`
  display: block;
`;

export default Logo;
