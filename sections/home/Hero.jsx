import Link from 'next/link';
import styled from 'styled-components';
import { StyledH1 } from '@/typography';
import { StyledCustomLink } from '@/styles/reusable/links';
import { respondTo, breakpoints } from '@/styles/helpers';

const Hero = () => {
  return (
    <StyledSection id='hero'>
      <div className='flow-spacing-text content-area'>
        <div>
          <p className='bottom-spacing-subtitle'>
            Hola , mi nombre es <span className='fw-bold'>Matias Bacelar</span>
          </p>

          <StyledH1 className='max-width-1000'>
            <span className='clr-primary'>Desarrollo</span> interfaces digitales{' '}
            <span className='clr-primary'>para la web.</span>
          </StyledH1>
        </div>

        <p className='max-width-800'>
          Soy un <span className='clr-primary fw-bold'>Frontend Developer</span> autodidacta de La
          Plata (Buenos Aires) con foco en Javascript & React. Tengo un interés por las micro
          interacciones y efectos en la UI como también en crear experiencias de usuario que sean
          dinámicas e interactivas.
        </p>

        <Link href='/#proyectos' passHref>
          <StyledCustomLink big className='fw-bold'>
            ver proyectos
          </StyledCustomLink>
        </Link>
      </div>

      <StyledLinksWrapper className='links-area'>
        <Link
          href='https://www.linkedin.com/in/matias-bacelar-371140199/'
          target='_blank'
          rel='noopener noreferrer'
          passHref
        >
          <StyledLink className='underline'>linkedin,</StyledLink>
        </Link>

        <Link
          href='https://github.com/matiasbacelar98'
          target='_blank'
          rel='noopener noreferrer'
          passHref
        >
          <StyledLink className='underline'>github,</StyledLink>
        </Link>

        <Link target='_blank' href='mailto:matiasbacelar@gmail.com' passHref>
          <StyledLink className='underline'>email</StyledLink>
        </Link>
      </StyledLinksWrapper>
    </StyledSection>
  );
};

// Styles
const StyledSection = styled.section`
  min-height: calc(100vh - 112px);
  padding: 3rem 0 0 0;

  .bottom-spacing-subtitle {
    margin-bottom: 8px;
  }

  // Responsive
  ${respondTo.xl`
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-template-areas:
      'content content'
      '  .      links';

      .content-area {
        grid-area: content;
      }

      .links-area {
        grid-area: links;
        justify-self: end;
      }
  `}

  ${respondTo.xxl`
      padding: 3rem 0 0 6.5rem;
  `}

  // Specific Adjustment
  @media(min-width: ${breakpoints.md}) and (orientation: portrait) {
    min-height: calc(50vh - 112px);
  }
`;

const StyledLinksWrapper = styled.div`
  display: none;

  // Responsive
  ${respondTo.md`  
      display: block;
      margin-top: 3rem;

      & > * + * {
        margin-left: 1rem;
      }
  `}
`;

const StyledLink = styled.a`
  // Needed for passing the href
`;

export default Hero;
