import { css } from 'styled-components';
import { fluidValues } from './functions';

export const variables = css`
  :root {
    // Fonts
    --font-headings: 'Montserrat', sans-serif;
    --font-text: 'Raleway', sans-serif;
    --fs-1: ${fluidValues(280, 1400, 41, 83)};
    --fs-2: ${fluidValues(280, 1400, 37, 61)};
    --fs-3: ${fluidValues(280, 1400, 32, 49)};
    --fs-4: ${fluidValues(280, 1400, 26, 31)};
    --fs-text: ${fluidValues(280, 1400, 18, 20)};
    --fs-error: ${fluidValues(280, 1400, 120, 250)};
    --line-height-text: 1.5;
    --line-height-headings: 1.2;
    // Spacing
    --spacing-section: ${fluidValues(280, 1400, 72, 128)};
    --spacing-headings: ${fluidValues(280, 1400, 40, 80)};
    --spacing-text: ${fluidValues(280, 1400, 24, 40)};
    --fix-spacing-1: 3.5rem; // 56px
    --fix-spacing-2: 1.5rem; // 24px
    // Colors
    --clr-primary: hsl(243, 100%, 65%);
    --clr-text: hsl(219, 17%, 16%);
    --clr-background: hsl(0, 0%, 100%);
    // Others
    --border-radius: 0.2rem;
    --box-shadow: -2px 2px 15px -2px rgba(0, 0, 0, 0.3);
  }
`;
