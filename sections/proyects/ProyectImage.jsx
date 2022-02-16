import Image from 'next/image';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { formatImageUrl } from '@/utils/utilities';

const ProyectImage = ({ mainImage }) => {
  const { alternativeText, url } = mainImage.data.attributes;

  return (
    <StyledSection>
      <StyledImgWrapper>
        <div className='img-container'>
          <Image src={formatImageUrl(url)} alt={alternativeText} layout='fill' objectFit='cover' />
        </div>
      </StyledImgWrapper>
    </StyledSection>
  );
};

// Styles
const StyledSection = styled.section`
  position: relative;
  width: 100%;
  height: 0;
  padding-top: calc(100% * (9 / 16));
`;

const StyledImgWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
`;

// Proptypes
ProyectImage.propTypes = {
  mainImage: PropTypes.shape({
    data: PropTypes.shape({
      attributes: PropTypes.shape({
        alternativeText: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
};

export default ProyectImage;
