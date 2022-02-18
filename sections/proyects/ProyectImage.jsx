import Image from 'next/image';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useAnimateOnScroll } from '@/hooks/index';
import { formatImageUrl, calculatePaddingTop } from '@/utils/utilities';

const ProyectImage = ({ image, isFullWidth, boxShadow }) => {
  const { alternativeText, url, width, height } = image.data.attributes;
  const [element, controls, initialAnimValues] = useAnimateOnScroll(0.1, 0.5);

  return (
    <section className={isFullWidth === true ? 'wrapper' : ''}>
      <StyledWrapper
        ref={element}
        initial={initialAnimValues}
        animate={controls}
        paddingtopval={calculatePaddingTop(height, width)}
      >
        <StyledImgWrapper className={boxShadow === true ? 'box-shadow' : ''}>
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
const StyledWrapper = styled(motion.div)`
  position: relative;
  width: 100%;
  height: 0;
  padding-top: ${props => `${props.paddingtopval}%`};
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
  boxShadow: PropTypes.bool.isRequired,
};

export default ProyectImage;
