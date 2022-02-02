import { css } from 'styled-components';
import { fluidValues } from './functions';

export const utilityClasses = css`
  //--------- Spacing ---------//
  .flow-spacing-sections > * + * {
    margin-top: var(--spacing-section);
  }

  .flow-spacing-headings > * + * {
    margin-top: var(--spacing-headings);
  }

  .flow-spacing-text > * + * {
    margin-top: var(--spacing-text);
  }

  .flow-spacing-fix > * + * {
    margin-top: var(--fix-spacing-2);
  }

  .header-spacing-top {
    margin-top: var(--fix-spacing-1);
  }

  .footer-spacing-bottom {
    margin-bottom: var(--fix-spacing-1);
  }

  //--------- Typography ---------//
  .clr-primary {
    color: var(--clr-primary);
  }

  .fw-bold {
    font-weight: bold;
  }

  .fw-medium {
    font-weight: 500;
  }

  .underline {
    text-decoration: underline;
  }

  .active-link-section {
    font-size: ${fluidValues(768, 1200, 18, 20)};
    transition: color 0.3s ease;

    &:hover {
      cursor: pointer;
      color: var(--clr-primary);
    }

    &:focus {
      color: var(--clr-primary);
    }
  }

  //--------- Layout ---------//
  .wrapper {
    width: min(90%, 100rem); // 100rem = 1600px
    margin-inline: auto;
  }

  .max-width-800 {
    max-width: 800px; // 50rem
  }

  .max-width-550 {
    max-width: 550px; // 34.375rem
  }

  //--------- Various ---------//
  .remove-scroll {
    overflow-y: hidden;
  }

  .box-shadow {
    box-shadow: var(--box-shadow);
  }
`;
