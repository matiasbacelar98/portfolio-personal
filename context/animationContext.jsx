/* eslint-disable react/jsx-no-constructed-context-values */
import { createContext, useContext, useState, useRef } from 'react';
import PropTypes from 'prop-types';

// Context
const AnimationContext = createContext();

// Export context
export const useAnimationContext = () => useContext(AnimationContext);

// Provider
const AnimationProvider = ({ children }) => {
  const [isEntranceActive, setIsEntranceActive] = useState(true);
  const isTransitionActive = useRef(false);

  return (
    <AnimationContext.Provider
      value={{ isEntranceActive, setIsEntranceActive, isTransitionActive }}
    >
      {children}
    </AnimationContext.Provider>
  );
};

// Proptypes
AnimationProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default AnimationProvider;
