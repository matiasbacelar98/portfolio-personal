import { useState } from 'react';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';
import { StyledTwoColumnGrid } from '@/styles/reusable/twoColumnGrid';
import { StyledH2 } from '@/typography';
import { useIsomorphicLayoutEffect, useAnimateOnScroll } from '@/hooks/index';
import { fluidValues, respondTo } from '@/styles/helpers';

const About = () => {
  const [isDesktopWidth, setDesktopWidth] = useState(false);
  const desktopWidth = 1024;
  const technologies = {
    rowOne: [
      'HTML',
      'CSS',
      'SCSS',
      'Javascript',
      'Strapi CMS',
      isDesktopWidth ? 'Tailwind CSS' : 'Tailwind',
    ],
    rowTwo: [
      'React JS',
      'Next JS',
      'Redux',
      'GSAP',
      isDesktopWidth ? 'Framer Motion' : 'Framer M...',
      isDesktopWidth ? 'Styled Comp...' : 'Styled Co...',
    ],
    rowThree: [
      ['Node JS', 'Express JS', 'Graphql'],
      [isDesktopWidth ? 'Apollo Client' : 'Apollo C...', 'Git', 'Figma'],
    ],
  };

  // Execute anim when element is in view
  const [element, controls, initialAnimValues] = useAnimateOnScroll(0.19, 0.5);

  // check window size
  useIsomorphicLayoutEffect(() => {
    window.innerWidth > desktopWidth ? setDesktopWidth(true) : false;
  }, []);

  return (
    <section id='sobremi' className='flow-spacing-headings' ref={element}>
      <StyledH2 initial={initialAnimValues} animate={controls} custom={0}>
        Sobre mi
      </StyledH2>

      <StyledTwoColumnGrid
        initial={initialAnimValues}
        animate={controls}
        custom={1}
        className='flow-spacing-text rm-spacing-lg'
      >
        <div className='flow-spacing-text'>
          <p className='max-width-550'>
            Programar es un hobby que tengo desde hace un tiempo , no me acuerdo exactamente pero
            todavía Flexbox no tenía soporte , fue cuando este tuvo soporte que empecé a disfrutar
            construir sitios y aplicaciones web ( los que usaban CSS antes de Flexbox se acordaran
            de que teníamos que flotar y limpiar y cambiar displays para tener navegaciones , todo
            muy divertido 😬) después de Flexbox apareció Grid y bueno construir sitios web
            responsive se volvió mucho más divertido aunque introdujo más complejidad.
          </p>
          <p className='max-width-550'>
            Después de probar varios lenguajes me encontré con Javascript y lo que me permitía hacer
            y probablemente esa sea la razón por la que termine interesándome por el frontend.
          </p>
        </div>

        <div className='flow-spacing-text'>
          <p className='max-width-550'>
            Tengo interés en particular en el ecosistema de React y en animaciones usando librerías
            como GSAP y Framer Motion.
          </p>

          <p className='max-width-550'>
            Estas son algunas de las tecnologías que utilizo de forma constante :
          </p>

          <StyledGridLanguages>
            <StyledItemWrapper className='rowOne'>
              {technologies.rowOne.map(item => (
                <StyledItem key={uuidv4()}>
                  <span className='triangle' />
                  {item}
                </StyledItem>
              ))}
            </StyledItemWrapper>

            <StyledItemWrapper className='rowTwo'>
              {technologies.rowTwo.map(item => (
                <StyledItem key={uuidv4()}>
                  <span className='triangle' />
                  {item}
                </StyledItem>
              ))}
            </StyledItemWrapper>

            <StyledItemWrapper mobileSpacing className='rowThree-a'>
              {technologies.rowThree[0].map(item => (
                <StyledItem key={uuidv4()}>
                  <span className='triangle' />
                  {item}
                </StyledItem>
              ))}
            </StyledItemWrapper>

            <StyledItemWrapper mobileSpacing className='rowThree-b'>
              {technologies.rowThree[1].map(item => (
                <StyledItem key={uuidv4()}>
                  <span className='triangle' />
                  {item}
                </StyledItem>
              ))}
            </StyledItemWrapper>
          </StyledGridLanguages>
        </div>
      </StyledTwoColumnGrid>
    </section>
  );
};

// Styles
const StyledGridLanguages = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-areas:
    'rowOne      rowTwo '
    'rowOne      rowTwo'
    'rowThree-a  rowThree-b';
  max-width: 34.375rem; // 34.375rem = 550px

  // Grid area classes
  .rowOne {
    grid-area: rowOne;
  }

  .rowTwo {
    grid-area: rowTwo;
  }

  .rowThree-a {
    grid-area: rowThree-a;
  }

  .rowThree-b {
    grid-area: rowThree-b;

    ${respondTo.lg`
            margin-top: 1.5rem;
    `}
  }

  // Responsive
  ${respondTo.lg`
      grid-template-columns: repeat(3, 1fr);
      column-gap: 2rem;     
      grid-template-areas: 'rowOne rowTwo rowThree-a'
                           'rowOne rowTwo rowThree-b';   
      max-width: 100%;                                                             
  `}
`;

const StyledItemWrapper = styled.div`
  // Spacing between li elements
  & > * + * {
    margin-top: ${fluidValues(280, 756, 16, 24)};
  }

  // Add margin to last two rows
  margin-top: ${props => (props.mobileSpacing ? `${fluidValues(280, 756, 16, 24)}` : null)};

  // Responsive
  ${respondTo.lg`
      margin-top: 0;
  `}
`;

const StyledItem = styled.li`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  .triangle {
    margin-right: 8px;
    display: block;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 6px 0 6px 10.4px;
    border-color: transparent transparent transparent var(--clr-primary);
  }
`;

export default About;
