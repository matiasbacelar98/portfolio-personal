import Image from 'next/image';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';
import ArrowLink from '@/components-r/arrowLink/ArrowLink';
import { StyledH2, StyledH3 } from '@/typography';
import { formatTitle, formatImageUrl } from '@/utils/utilities';
import { respondTo } from '@/styles/helpers';

const OtherProyects = ({ content, images }) => {
  return (
    <StyledSection className='wrapper flow-spacing-text' id='otros-proyectos'>
      <StyledH2 proyect='true' className='title-area'>
        Otros Proyectos
      </StyledH2>

      {content.map((proy, index) => {
        const { alternativeText, url, width, height } = images.data[index].attributes;
        const { title, content, path } = proy;
        const pathStr = path.toString();

        return (
          <div key={uuidv4()} className={`card${index + 1}-area flow-spacing-text`}>
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
          </div>
        );
      })}
    </StyledSection>
  );
};

// Styles
const StyledSection = styled.section`
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
