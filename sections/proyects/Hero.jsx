import Link from 'next/link';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { motion, useAnimation } from 'framer-motion';
import { v4 as uuidv4 } from 'uuid';
import { AiFillGithub } from 'react-icons/ai';
import { IoMdOpen } from 'react-icons/io';
import { StyledH1, StyledInfoHeading } from '@/typography';
import { useIsomorphicLayoutEffect } from '@/hooks/index';
import { useAnimationContext } from '@/context/animationContext';
import { formatTitle } from '@/utils/utilities';
import { respondTo } from '@/styles/helpers';

const Hero = ({ title, intro, info }) => {
  const { type, codeUrl, liveSiteUrl, technologies } = info;
  const { isTransitionActive } = useAnimationContext();
  const controls = {
    title: useAnimation(),
    intro: useAnimation(),
    info: useAnimation(),
  };

  // Animate
  useIsomorphicLayoutEffect(() => {
    const delayValEntrance = window.innerWidth <= 768 ? 7.4 : 7.8;
    const delayValTransition = window.innerWidth <= 768 ? 1.9 : 2.3;

    const heroAnimation = (customVal = 0) => ({
      y: 0,
      opacity: 1,
      transition: {
        type: 'tween',
        ease: 'circOut',
        duration: 0.5,
        delay: !isTransitionActive.current
          ? delayValEntrance + customVal
          : delayValTransition + customVal,
      },
    });

    const animateHero = async () => {
      await Promise.all([
        controls.title.start(() => heroAnimation()),
        controls.intro.start(() => heroAnimation(0.1)),
        controls.info.start(() => heroAnimation(0.2)),
      ]);
    };

    animateHero();
  }, []);

  return (
    <section className='wrapper flow-spacing-text'>
      <StyledH1
        className='max-width-550'
        initial={{ y: 60, opacity: 0 }}
        animate={controls.title}
        custom={0}
      >
        Proyecto <span className='clr-primary'>{formatTitle(title)}</span>
      </StyledH1>

      <motion.p
        initial={{ y: 60, opacity: 0 }}
        animate={controls.intro}
        custom={0.1}
        className='max-width-800'
      >
        {intro}
      </motion.p>

      <StyledInfoGrid
        initial={{ y: 60, opacity: 0 }}
        animate={controls.info}
        custom={0.2}
        className='flow-spacing-fix rm-spacing-md max-width-800'
      >
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

const StyledInfoGrid = styled(motion.div)`
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
