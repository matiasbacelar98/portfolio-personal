import PropTypes from 'prop-types';
import UseAnimations from 'react-useanimations';
import styled from 'styled-components';
import { fluidValues } from '@/styles/helpers';

const Icon = ({ iconObj, url, color }) => {
  return (
    <UseAnimations
      animation={iconObj}
      size={40}
      wrapperStyle={{
        width: 'inherit',
        height: 'inherit',
      }}
      strokeColor='white'
      pathCss='stroke-width: 1;'
      render={(eventProps, animationProps) => (
        <StyledLink
          {...eventProps}
          href={url}
          bgColor={color}
          target='_blank'
          rel='noopener noreferrer'
        >
          <div {...animationProps} />
        </StyledLink>
      )}
    />
  );
};

const StyledLink = styled.a`
  display: inline-block;
  width: ${fluidValues(280, 1200, 80, 140)};
  height: ${fluidValues(280, 1200, 80, 140)};
  background-color: ${props => props.bgColor};
  border-radius: var(--border-radius);
`;

// Proptypes
Icon.propTypes = {
  iconObj: PropTypes.shape({
    // eslint-disable-next-line
    animationData: PropTypes.object,
    animationKey: PropTypes.string,
  }).isRequired,
  url: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default Icon;
