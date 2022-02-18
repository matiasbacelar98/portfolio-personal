import PropTypes from 'prop-types';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';
import { StyledH2 } from '@/typography';
import { motion } from 'framer-motion';
import { useAnimateOnScroll } from '@/hooks/index';
import { respondTo, fluidValues } from '@/styles/helpers';

const Content = ({ contentData, title }) => {
  const { explanation, objectives, problems } = contentData;
  const [sectionOne, controls, initialAnimValuesOne] = useAnimateOnScroll(0.1, 0.5);
  const [sectionTwo, controlsTwo, initialAnimValuesTwo] = useAnimateOnScroll(0.1, 0.5);
  const [sectionThree, controlsThree, initialAnimValuesThree] = useAnimateOnScroll(0.1, 0.5);
  const techIcons = [
    {
      title: 'snapcode',
      images: [
        { src: '/react-icon.svg', alt: 'react' },
        { src: '/supabase-icon.svg', alt: 'supabase' },
        { src: '/code-mirroricon.svg', alt: 'codemirror' },
      ],
    },
    {
      title: 'moderne',
      images: [
        { src: '/react-icon.svg', alt: 'react' },
        { src: '/framer-motion.svg', alt: 'framer motion' },
        { src: '/react-query-icon.svg', alt: 'react query' },
      ],
    },
    {
      title: 'portfolio',
      images: [
        { src: '/react-icon.svg', alt: 'react' },
        { src: '/next-icon.svg', alt: 'next-js' },
        { src: '/strapi-icon.svg', alt: 'nextjs' },
      ],
    },
  ];
  const [iconsObj] = techIcons.filter(proy => proy.title === title);

  return (
    <>
      <motion.section
        ref={sectionOne}
        initial={initialAnimValuesOne}
        animate={controls}
        className='wrapper flow-spacing-text'
      >
        <StyledH2 proyect='true'>Objetivos & Meta</StyledH2>

        {/* Parragrahps */}
        {objectives.map(parragraph => (
          <p key={uuidv4()} className='max-width-800'>
            {parragraph}
          </p>
        ))}
      </motion.section>

      <StyledExplanationSection
        ref={sectionTwo}
        initial={initialAnimValuesTwo}
        animate={controlsTwo}
        className='wrapper flow-spacing-text'
      >
        <StyledH2 proyect='true' className='title-area'>
          Stack y Explicación
        </StyledH2>

        <StyledIconsGrid className='max-width-550 icons-area'>
          {iconsObj.images.map(icon => (
            <StyledImgWrapper key={uuidv4()}>
              <div className='img-icon'>
                {/* eslint-disable-next-line */}
                <img className='img-container' src={icon.src} alt={`icono ${icon.alt}`} />
              </div>
            </StyledImgWrapper>
          ))}
        </StyledIconsGrid>

        {/* Parragrahps */}
        <div className='content-area flow-spacing-text'>
          {explanation.map(parragraph => (
            <p key={uuidv4()} className='max-width-800'>
              {parragraph}
            </p>
          ))}
        </div>
      </StyledExplanationSection>

      <StyledProblemsSection
        ref={sectionThree}
        initial={initialAnimValuesThree}
        animate={controlsThree}
        className='wrapper flow-spacing-text'
      >
        <StyledH2 proyect='true'>Problemas & Soluciones</StyledH2>

        {/* Parragrahps */}
        {problems.map(parragraph => (
          <p key={uuidv4()} className='max-width-800'>
            {parragraph}
          </p>
        ))}
      </StyledProblemsSection>
    </>
  );
};

// Styles
const StyledProblemsSection = styled(motion.section)`
  ${respondTo.lg`
      display: grid;
      place-items: center;
      text-align: center;
  `}
`;

const StyledExplanationSection = styled(motion.section)`
  ${respondTo.lg`
    display: grid;
    grid-template-columns: repeat(2 , 1fr);
    grid-template-areas: "icons    title"
                         "icons    content";
    column-gap: 2rem;                      

    .icons-area {
      grid-area: icons;
      justify-self: start;
      align-self: center;
    };     
    
    .title-area {
      grid-area: title;
    }; 

    .content-area {
      grid-area: content;
    }; 
  `}
`;

const StyledImgWrapper = styled.div`
  width: ${fluidValues(280, 950, 100, 180)};
  height: ${fluidValues(280, 950, 100, 175)};
  box-shadow: var(--box-shadow);
  display: grid;
  place-items: center;

  .img-icon {
    width: ${fluidValues(280, 950, 60, 80)};
    height: ${fluidValues(280, 950, 60, 80)};
  }
`;

const StyledIconsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, max-content);
  grid-template-rows: repeat(2, 1fr);
  column-gap: 3.5rem; // 56px
  row-gap: 2rem;

  & div:last-child {
    grid-column: 1 / 3;
    justify-self: center;
  }
`;

// Proptypes
Content.propTypes = {
  contentData: PropTypes.shape({
    explanation: PropTypes.arrayOf(PropTypes.string).isRequired,
    objectives: PropTypes.arrayOf(PropTypes.string).isRequired,
    problems: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
  title: PropTypes.string.isRequired,
};

export default Content;
