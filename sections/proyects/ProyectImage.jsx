import Image from 'next/image';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { formatImageUrl, calculatePaddingTop } from '@/utils/utilities';

const ProyectImage = ({ image, isFullWidth }) => {
  const { alternativeText, url, width, height } = image.data.attributes;

  return (
    <section className={isFullWidth === true ? 'wrapper' : ''}>
      <StyledWrapper paddingTopVal={calculatePaddingTop(height, width)}>
        <StyledImgWrapper>
          <div className='img-container'>
            <Image
              src={formatImageUrl(url)}
              alt={alternativeText}
              layout='fill'
              objectFit='cover'
            />
          </div>
        </StyledImgWrapper>
      </StyledWrapper>
    </section>
  );
};

// Styles
const StyledWrapper = styled.section`
  position: relative;
  width: 100%;
  height: 0;
  padding-top: ${props => `${props.paddingTopVal}%`};
`;

const StyledImgWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
`;

// Proptypes
ProyectImage.propTypes = {
  image: PropTypes.shape({
    data: PropTypes.shape({
      attributes: PropTypes.shape({
        alternativeText: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        width: PropTypes.number.isRequired,
        height: PropTypes.number.isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
  isFullWidth: PropTypes.bool.isRequired,
};

export default ProyectImage;
