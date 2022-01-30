import { css } from 'styled-components';

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
  .primary {
    color: var(--clr-primary);
  }

  .bold {
    font-weight: bold;
  }

  .underline {
    text-decoration: underline;
  }

  .active-link {
    color: var(--clr-primary);
  }

  //--------- Layout ---------//
  .wrapper {
    width: min(90%, 100rem); // 100rem = 1600px
    margin-inline: auto;
  }

  //--------- Various ---------//
  .remove-scroll {
    overflow-y: hidden;
  }

  .box-shadow {
    box-shadow: var(--box-shadow);
  }
`;
