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
    --shadow-color: 0deg 0% 63%;
    // Others
    --border-radius: 0.2rem;
    --scrollbar-width: 0;
    --box-shadow: 0.3px 0.5px 0.7px hsl(var(--shadow-color) / 0.36),
      0.8px 1.6px 2px -0.8px hsl(var(--shadow-color) / 0.36),
      2.1px 4.1px 5.2px -1.7px hsl(var(--shadow-color) / 0.36),
      5px 10px 12.6px -2.5px hsl(var(--shadow-color) / 0.36);
  }
`;
