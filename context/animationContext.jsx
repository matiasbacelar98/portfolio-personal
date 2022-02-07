/* eslint-disable react/jsx-no-constructed-context-values */
import { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';

// Context
const AnimationContext = createContext();

// Export context
export const useAnimationContext = () => useContext(AnimationContext);

// Provider
const AnimationProvider = ({ children }) => {
  const [isEntranceActive, setIsEntranceActive] = useState(true);

  return (
    <AnimationContext.Provider value={{ isEntranceActive, setIsEntranceActive }}>
      {children}
    </AnimationContext.Provider>
  );
};

// Proptypes
AnimationProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default AnimationProvider;
