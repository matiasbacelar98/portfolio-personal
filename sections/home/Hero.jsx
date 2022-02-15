import Link from 'next/link';
import styled from 'styled-components';
import { motion, useAnimation } from 'framer-motion';
import { StyledH1 } from '@/typography';
import { useAnimationContext } from '@/context/animationContext';
import { useIsomorphicLayoutEffect } from '@/hooks/index';
import { StyledCustomLink } from '@/styles/reusable/links';
import { respondTo, breakpoints } from '@/styles/helpers';

const Hero = () => {
  const { isTransitionActive } = useAnimationContext();
  const initialValuesAnim = { opacity: 0, y: 60 };
  const controls = {
    subHeading: useAnimation(),
    heading: useAnimation(),
    content: useAnimation(),
    proyectLink: useAnimation(),
    socialLinks: useAnimation(),
  };

  // Animate hero content
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

    const animate = async () => {
      await Promise.all([
        controls.subHeading.start(() => heroAnimation()),
        controls.heading.start(() => heroAnimation(0.1)),
        controls.content.start(() => heroAnimation(0.2)),
        controls.proyectLink.start(() => heroAnimation(0.3)),
      ]);

      // Animate social links
      controls.socialLinks.start(i => ({
        y: 0,
        transition: {
          type: 'tween',
          ease: 'easeOut',
          duration: 0.3,
          delay: i * 0.1,
        },
      }));
    };

    animate();
  }, [
    controls.subHeading,
    controls.heading,
    controls.content,
    controls.proyectLink,
    isTransitionActive,
  ]);

  return (
    <StyledSection id='hero'>
      <div className='flow-spacing-text content-area'>
        <div>
          <motion.p
            initial={initialValuesAnim}
            animate={controls.subHeading}
            custom={0}
            className='bottom-spacing-subtitle'
          >
            Hola , mi nombre es <span className='fw-bold'>Matias Bacelar</span>
          </motion.p>

          <StyledH1
            className='max-width-1000'
            initial={initialValuesAnim}
            animate={controls.heading}
            custom={1}
          >
            <span className='clr-primary'>Desarrollo</span> interfaces digitales{' '}
            <span className='clr-primary'>para la web.</span>
          </StyledH1>
        </div>

        <motion.p
          className='max-width-800'
          initial={initialValuesAnim}
          animate={controls.content}
          custom={2}
        >
          Soy un <span className='clr-primary fw-bold'>Frontend Developer</span> autodidacta de La
          Plata (Buenos Aires) con foco en Javascript & React. Tengo un interés por las micro
          interacciones y efectos en la UI como también en crear experiencias de usuario que sean
          dinámicas e interactivas.
        </motion.p>

        <motion.div initial={initialValuesAnim} animate={controls.proyectLink} custom={3}>
          <Link href='/#proyectos' passHref>
            <StyledCustomLink big className='fw-bold'>
              ver proyectos
            </StyledCustomLink>
          </Link>
        </motion.div>
      </div>

      <StyledLinksWrapper className='links-area'>
        <motion.div initial={{ display: 'inline-block', overflow: 'hidden' }}>
          <Link href='https://www.linkedin.com/in/matias-bacelar-371140199/' passHref>
            <StyledLink
              initial={{ y: 30 }}
              animate={controls.socialLinks}
              custom={0}
              target='_blank'
              rel='noopener noreferrer'
              className='underline'
            >
              linkedin,
            </StyledLink>
          </Link>
        </motion.div>

        <motion.div initial={{ display: 'inline-block', overflow: 'hidden' }}>
          <Link href='https://github.com/matiasbacelar98' passHref>
            <StyledLink
              initial={{ y: 30 }}
              animate={controls.socialLinks}
              custom={1}
              target='_blank'
              rel='noopener noreferrer'
              className='underline'
            >
              github,
            </StyledLink>
          </Link>
        </motion.div>

        <motion.div initial={{ display: 'inline-block', overflow: 'hidden' }}>
          <Link href='mailto:matiasbacelar@gmail.com' passHref>
            <StyledLink
              initial={{ y: 30 }}
              animate={controls.socialLinks}
              custom={2}
              target='_blank'
              rel='noopener noreferrer'
              className='underline'
            >
              email
            </StyledLink>
          </Link>
        </motion.div>
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

const StyledLink = styled(motion.a)`
  display: inline-block;
`;

export default Hero;
