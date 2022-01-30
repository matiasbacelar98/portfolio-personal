import { createGlobalStyle } from 'styled-components';
import { reset, variables, montserratAndRalewayFonts, utilityClasses } from './helpers';

const GlobalStyles = createGlobalStyle`
${reset}
${variables};
${montserratAndRalewayFonts}; 
${utilityClasses}
`;

export default GlobalStyles;
