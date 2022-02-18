import Image from 'next/image';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { v4 as uuidv4 } from 'uuid';
import ArrowLink from '@/components-r/arrowLink/ArrowLink';
import { StyledH2, StyledH3 } from '@/typography';
import { formatTitle, formatImageUrl } from '@/utils/utilities';
import { useAnimateOnScroll } from '@/hooks/index';
import { respondTo } from '@/styles/helpers';

const OtherProyects = ({ content, images }) => {
  const [element, controls, initialAnimValues] = useAnimateOnScroll(0.1, 0.5);

  return (
    <StyledSection
      ref={element}
      initial={initialAnimValues}
      animate={controls}
      className='wrapper flow-spacing-text'
      id='otros-proyectos'
    >
      <StyledH2 proyect='true' className='title-area'>
        Otros Proyectos
      </StyledH2>

      {content.map((proy, index) => {
        const { alternativeText, url, width, height } = images.data[index].attributes;
        const { title, content, path } = proy;
        const pathStr = path.toString();
        const formatIndex = index + 1;
        const cardAreaClass = `card${formatIndex}-area`;

        return (
          <StyledCard
            key={uuidv4()}
            addMarginBottom={formatIndex === 1 ? 'true' : 'false'}
            className={`${cardAreaClass} flow-spacing-text`}
          >
            <div className='box-shadow'>
              <div className='img-container'>
                <Image
                  src={formatImageUrl(url)}
                  alt={alternativeText}
                  layout='responsive'
                  width={width}
                  height={height}
                />
              </div>
            </div>

            <StyledContentWrapper>
              <StyledH3>{formatTitle(title)}</StyledH3>
              <p className='max-width-550'>{content}</p>
              <ArrowLink to={`/proyectos/${pathStr}`} text='Ver proyecto' />
            </StyledContentWrapper>
          </StyledCard>
        );
      })}
    </StyledSection>
  );
};

// Styles
const StyledSection = styled(motion.section)`
  ${respondTo.lg`
    display: grid;
    grid-template-columns: repeat(2 , 1fr);
    grid-template-areas: "title     title"
                         "card-one  card-two";
    column-gap: 9.5rem;
    
    .title-area {
      grid-area: title;
    }                  
    .card1-area {
      grid-area: card-one;
    }
    .card2-area {
      grid-area: card-two;
    }   
  `}
`;

const StyledCard = styled.div`
  ${props => (props.addMarginBottom === 'true' ? 'margin-bottom: var(--fix-spacing-1);' : null)};

  ${respondTo.lg`
    ${props => (props.addMarginBottom === 'true' ? 'margin-bottom: 0;' : null)}
  `}
`;

const StyledContentWrapper = styled.div`
  & > * + * {
    margin-top: 1.5rem;
  }
`;

// Proptypes
OtherProyects.propTypes = {
  content: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      content: PropTypes.string,
      path: PropTypes.number,
    })
  ).isRequired,
  images: PropTypes.shape({
    data: PropTypes.arrayOf(
      PropTypes.shape({
        attributes: PropTypes.shape({
          alternativeText: PropTypes.string,
          url: PropTypes.string,
          width: PropTypes.number,
          height: PropTypes.number,
        }),
      })
    ),
  }).isRequired,
};

export default OtherProyects;
