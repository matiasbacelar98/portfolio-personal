import Link from 'next/link';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';
import { AiFillGithub } from 'react-icons/ai';
import { IoMdOpen } from 'react-icons/io';
import { StyledH1, StyledInfoHeading } from '@/typography';
import { formatTitle } from '@/utils/utilities';
import { respondTo } from '@/styles/helpers';

const Hero = ({ title, intro, info }) => {
  const { type, codeUrl, liveSiteUrl, technologies } = info;

  return (
    <section className='flow-spacing-text'>
      <StyledH1 className='max-width-550'>
        Proyecto <span className='clr-primary'>{formatTitle(title)}</span>
      </StyledH1>

      <p className='max-width-800'>{intro}</p>

      <StyledInfoGrid className='flow-spacing-fix rm-spacing-md max-width-800'>
        <StyledInfoItem>
          <StyledInfoHeading>Tipo</StyledInfoHeading>
          <p>{type}</p>
        </StyledInfoItem>

        <StyledInfoItem>
          <StyledInfoHeading>Tecnologias</StyledInfoHeading>
          <p>React JS</p>
          {technologies.map(tech => (
            <p key={uuidv4()}>{tech}</p>
          ))}
        </StyledInfoItem>

        <StyledInfoItem>
          <StyledInfoHeading>Código</StyledInfoHeading>

          <Link href={codeUrl} passHref scroll={false}>
            <StyledLink target='_blank' rel='noopener noreferrer'>
              <AiFillGithub className='icon-size' />
              <span className='fw-bold clr-primary'>Repositorio</span>
            </StyledLink>
          </Link>
        </StyledInfoItem>

        <StyledInfoItem>
          <StyledInfoHeading>Sitio en vivo</StyledInfoHeading>

          <Link href={liveSiteUrl} passHref scroll={false}>
            <StyledLink target='_blank' rel='noopener noreferrer'>
              <IoMdOpen className='icon-size' />
              <span className='fw-bold clr-primary'>{formatTitle(title)}</span>
            </StyledLink>
          </Link>
        </StyledInfoItem>
      </StyledInfoGrid>
    </section>
  );
};

// Styles
const StyledLink = styled.a`
  display: flex;
  width: max-content;
  align-items: center;

  .icon-size {
    width: 1.625rem; // 26px
    height: 1.625rem;
  }

  & > * + * {
    margin-left: 0.75rem; // 12px
  }
`;

const StyledInfoGrid = styled.div`
  // Responsive
  ${respondTo.md`
      display: grid;
      grid-template-columns: repeat(2 , 1fr);
      row-gap: 2.5rem;
  `}

  ${respondTo.lg`
      grid-template-columns: repeat(4 , max-content);
      column-gap: 5rem; // 80px
  `}
`;

const StyledInfoItem = styled.div`
  & > * + * {
    margin-top: 1rem;
  }
`;

// Proptypes
Hero.propTypes = {
  title: PropTypes.string.isRequired,
  intro: PropTypes.string.isRequired,
  info: PropTypes.shape({
    type: PropTypes.string.isRequired,
    codeUrl: PropTypes.string.isRequired,
    liveSiteUrl: PropTypes.string.isRequired,
    technologies: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};

export default Hero;
