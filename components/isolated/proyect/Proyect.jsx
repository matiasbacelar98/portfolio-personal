import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { AnimatePresence } from 'framer-motion';
import { StyledHeadingProyects } from '@/typography';
import { formatTitle, formatImageUrl } from '@/utils/utilities';
import { StyledWrapper, StyledNameWrapper, ImageWrapper, StyledSpan, StyledLine } from './styles';

const Proyect = ({ title, number, imgData }) => {
  const [isImageActive, setIsImageActive] = useState(false);
  const { url, alternativeText } = imgData;
  const proyectNumber = number + 1;
  const isTitleTecnoshop = title === 'tecnoshop';

  return (
    <>
      <Link
        href={isTitleTecnoshop ? `/#proyectos` : `/proyectos/${proyectNumber}`}
        scroll={false}
        passHref
      >
        <StyledWrapper
          onMouseEnter={() => setIsImageActive(true)}
          onMouseLeave={() => setIsImageActive(false)}
        >
          <div>
            <StyledSpan>({`0${proyectNumber}`})</StyledSpan>
            <StyledLine />
          </div>

          <StyledNameWrapper>
            {isTitleTecnoshop ? <StyledSpan>Próximamente... </StyledSpan> : null}
            <StyledHeadingProyects>{formatTitle(title)}</StyledHeadingProyects>
          </StyledNameWrapper>

          <AnimatePresence>
            {isImageActive ? (
              <ImageWrapper
                key='image-anim'
                initial={{
                  y: '30%',
                  opacity: 0,
                }}
                animate={{
                  y: 0,
                  opacity: 1,
                  transition: {
                    type: 'tween',
                    duration: 0.4,
                    ease: 'easeOut',
                  },
                }}
                exit={{
                  y: '30%',
                  opacity: 0,
                  transition: {
                    type: 'tween',
                    duration: 0.4,
                    ease: 'easeOut',
                  },
                }}
              >
                <div className='img-container'>
                  <Image
                    src={formatImageUrl(url)}
                    alt={alternativeText}
                    layout='fill'
                    objectFit={isTitleTecnoshop ? 'contain' : 'cover'}
                  />
                </div>
              </ImageWrapper>
            ) : null}
          </AnimatePresence>
        </StyledWrapper>
      </Link>

      {isTitleTecnoshop ? <StyledLine /> : null}
    </>
  );
};

// Proptypes
Proyect.propTypes = {
  title: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
  imgData: PropTypes.shape({
    url: PropTypes.string.isRequired,
    alternativeText: PropTypes.string.isRequired,
  }).isRequired,
};

export default Proyect;
