import { css } from 'styled-components';
import { respondTo } from './media';

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

  .main-spacing-top {
    margin-top: var(--spacing-section);
  }

  .header-spacing-top {
    margin-top: var(--fix-spacing-1);
  }

  .footer-spacing-top {
    margin-top: var(--spacing-section);
  }

  .footer-spacing-bottom {
    margin-bottom: var(--fix-spacing-1);
  }

  .rm-spacing-lg > * + * {
    ${respondTo.lg`
      margin-top: 0;
    `}
  }

  .rm-spacing-md > * + * {
    ${respondTo.md`
      margin-top: 0;
    `}
  }

  //--------- Typography ---------//
  .clr-primary {
    color: var(--clr-primary);
  }

  .clr-bg {
    color: var(--clr-background);
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

  //--------- Layout ---------//
  .wrapper {
    width: min(90%, 100rem); // 100rem = 1600px
    margin-inline: auto;
  }

  .max-width-1000 {
    max-width: 62.5rem; // 1000px
  }

  .max-width-800 {
    max-width: 50rem; // 800px
  }

  .max-width-550 {
    max-width: 34.375rem; // 550px
  }

  .center {
    display: grid;
    place-items: center;
  }

  //--------- Various ---------//
  .remove-scroll {
    overflow-y: hidden;
    touch-action: none;
  }

  .box-shadow {
    box-shadow: var(--box-shadow);
  }

  .inherit-dimensions {
    width: inherit;
    height: inherit;
  }
`;
